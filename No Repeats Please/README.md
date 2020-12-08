# Algorithms: No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Tests:

* permAlone("aab") should return a number. :heavy_check_mark:
* permAlone("aab") should return 2. :heavy_check_mark:
* permAlone("aaa") should return 0. :heavy_check_mark:
* permAlone("aabb") should return 8. :heavy_check_mark:
* permAlone("abcdefa") should return 3600. :heavy_check_mark:
* permAlone("abfdefa") should return 2640. :heavy_check_mark:
* permAlone("zzzzzzzz") should return 0. :heavy_check_mark:
* permAlone("a") should return 1. :heavy_check_mark:
* permAlone("aaab") should return 0. :heavy_check_mark:
* permAlone("aaabb") should return 12. :heavy_check_mark:
