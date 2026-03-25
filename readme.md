existing references of leetcode answers in js

https://github.com/JoshCrozier/leetcode-javascript/blob/master/solutions/0464-can-i-win.js

https://github.com/everthis/leetcode-js

https://github.com/sir-gon/algorithm-exercises-js


# JS Leetcode practice ground
Contains Unit test ready for you to use on leetcode problems (may include premium questions.)

# How to use this repo

Clone this repo

run `npm install`

this repo contains practice problem playground you can run uder
/leetcode-playground/
  - /[problemsname].js

opening the .js file,
you can start exercise of solving problem.

# Run test
- every problem has respective test case you can run using `jest`
- It contains test scenarios ready to battle test your solution
- test grouped under `/tests` folder.
- run the test your own way, e.g npm run test "testname".

# Performance Profiling (optional)
- run `npm run test:perf` to enable execution time and memory tracking for every test automatically
- no changes needed in test files — it applies globally via Jest setup
- output example:
  ```
    [PERF] should return [0, 1] for nums = [2, 7, 11, 15], target = 9
      time:   0.041ms
      memory: +0.12KB
  ```
- uses `PERF=true` env flag under the hood, so you can also run a single file: `PERF=true npm test -- 0001`

# Attach debugger
- running you script in debugmode is very important for process of learning
- attach breakpoint, and run test in debug mode.

# Tips
- i use vscode extension "Jest run it" when you open the file, you simply click 🏃 emoji to run specific test or describe block.
- with "Jest run it" debug icon will appear in the test, you can click on it, it will run your test in debug mode.


# Solution list
- Solution list are located in separate repository to prevent you from unwanted accidental peeking during practice, 
- repo link coming soon.
