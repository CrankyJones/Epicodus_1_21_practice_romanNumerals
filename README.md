## *Tests*
#### Test 1:
Describe: 'romanNumerals()'
Test: Divide input by 1000 and store remainder.
Expect: romanNumerals(1200).toEqual(1, 200)
#### Test 2:
Describe: 'romanNumerals()'
Test: Repeat test #1 for remaining values (500, 100, 50, 10, 5, 1)
Expect: romanNumerals(620).toEqual(1, 1, 0, 2, 0, 0)