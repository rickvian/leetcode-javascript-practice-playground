"""
Import JoshCrozier leetcode-javascript solutions into solutions-bank/.

For each solutions/NNNN-slug.js in the cloned repo:
  - Extract function name via regex
  - Append ES Module export
  - Write to solutions-bank/NNNN-slug.js

Files where the regex fails are logged to scripts/ralph/import-skipped.json.
Idempotent: safe to re-run (overwrites existing files).
"""

import os
import re
import json
import glob
import shutil
import tempfile
import subprocess
from pathlib import Path

REPO_URL = "https://github.com/JoshCrozier/leetcode-javascript.git"
REPO_ROOT = Path(__file__).resolve().parent.parent.parent
SOLUTIONS_BANK = REPO_ROOT / "solutions-bank"
SKIPPED_JSON = Path(__file__).parent / "import-skipped.json"

FN_RE = re.compile(r"^var\s+(\w+)\s*=\s*function", re.MULTILINE)


def main():
    timestamp = os.getpid()
    clone_dir = Path(tempfile.mkdtemp(prefix=f"joshcrozier-{timestamp}-"))

    try:
        print(f"Cloning {REPO_URL} into {clone_dir} ...")
        subprocess.run(
            ["git", "clone", "--depth=1", REPO_URL, str(clone_dir)],
            check=True,
        )

        SOLUTIONS_BANK.mkdir(parents=True, exist_ok=True)

        pkg_json = SOLUTIONS_BANK / "package.json"
        pkg_json.write_text(json.dumps({"type": "module"}, indent=2) + "\n")

        source_glob = str(clone_dir / "solutions" / "*.js")
        source_files = sorted(glob.glob(source_glob))

        written = 0
        skipped = []

        for src_path in source_files:
            filename = os.path.basename(src_path)
            source = Path(src_path).read_text(encoding="utf-8")

            match = FN_RE.search(source)
            if not match:
                skipped.append(
                    {
                        "file": filename,
                        "reason": "no 'var fnName = function' pattern found",
                    }
                )
                continue

            fn_name = match.group(1)
            export_line = f"\nexport {{ {fn_name} }};\n"

            dest_path = SOLUTIONS_BANK / filename
            dest_path.write_text(source + export_line, encoding="utf-8")
            written += 1

        SKIPPED_JSON.write_text(
            json.dumps(skipped, indent=2) + "\n", encoding="utf-8"
        )

        print(f"Written : {written} files to {SOLUTIONS_BANK}/")
        print(f"Skipped : {len(skipped)} files (see {SKIPPED_JSON})")

    finally:
        shutil.rmtree(clone_dir, ignore_errors=True)
        print("Scratch clone removed.")


if __name__ == "__main__":
    main()
