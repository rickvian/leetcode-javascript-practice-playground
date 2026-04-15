#!/bin/bash

# Count test files by backfill status

BACKFILL_COUNT=$(grep -l "TODO(backfill)" leetcode-playground/tests/*.test.js 2>/dev/null | wc -l)
COMMUNITY_COUNT=$(grep -l "TODO(community)" leetcode-playground/tests/*.test.js 2>/dev/null | wc -l)
TOTAL_COUNT=$(ls leetcode-playground/tests/*.test.js 2>/dev/null | wc -l)
DONE_COUNT=$((TOTAL_COUNT - BACKFILL_COUNT - COMMUNITY_COUNT))

echo "=== Test Backfill Status ==="
echo "Total test files: $TOTAL_COUNT"
echo "Backfill sentinel: $BACKFILL_COUNT"
echo "Community sentinel: $COMMUNITY_COUNT"
echo "Done (no sentinel): $DONE_COUNT"
echo ""
echo "Backfill queue (first 10):"
grep -l "TODO(backfill)" leetcode-playground/tests/*.test.js 2>/dev/null | head -10
