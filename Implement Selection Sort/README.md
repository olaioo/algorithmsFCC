# Algorithms: Implement Selection Sort

Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!

Tests:

* selectionSort should be a function. :heavy_check_mark:
* selectionSort should return a sorted array (least to greatest). :heavy_check_mark:
* selectionSort should return an array that is unchanged except for order. :heavy_check_mark:
* selectionSort should not use the built-in .sort() method. :heavy_check_mark:
