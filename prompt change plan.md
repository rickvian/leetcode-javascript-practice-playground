i had plan to generate 3000k,

it successfully make hundreds of ralph prd.yaml task,
just like US-006
the problem is, once i run the tasks using ralph
the result of test case lots of them are incorrect,
i test against the real leetcode website, the code is correct, but when i test with the test case, it says my code is wrong.

so the problem might because of there are no oracle,
at github there are collection of solution. though its not covering all question yet...
https://github.com/JoshCrozier/leetcode-javascript
i think we can start from there
we can make it our submodule
if there are leetcode question without oracle, then we will attempt to generate solution our own into the solution folder, and generate the test case.

i am thinking lets use those as solution bank in our repo as well. we can populate it as we go, with help of contributor, so solution is less of concern for now,

i need you to create plan so that ralph loop into task prd.yaml will eventually lead me to collecto 3000+ test case 

i have list of full_leetcode_problems_response.json but its huge, only read when you read
test case is at @sample.json

probably you can make the prd.yaml self expanding too, lets say clearing 10 prd task, the last one will be the task to generate next prd task todo cover more scenarios that eventually reach us to 3000k test scenario
if every last ticket expands more ticket it will self propagate anyway, as long as it has clear instruction to expand and references.
