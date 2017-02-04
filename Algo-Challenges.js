// Get 1 to 255: Write a function that returns an array with all the numbers from 1 to 255.
function get_array(){
	var arr = [];
	for(var i = 1; i < 256; i++){
		arr.push(i);
	}
	return arr;
}

//Get Even 100: Write a function that would get the sum of all the even numbers from 1 to 1000.
function sum_even_numbers(){
	var sum = 0;
	for(var i = 1, i < 1001; i++){
		if (i % 2 == 0){
			sum = sum + i;
		}
	}
	return sum;
}

//Sum Odd 5000: Write a function that returns the sum of all the odd numbers from 1 to 5000.
function sum_odd_5000() {
    var sum = 0;
    for(var i = 1; i < 5001; i++){
    	if(i % 2 == 1){
    		sum = sum + i;
    	}
    }
    return sum;
}

//Iterate an Array: Write a function that returns the sum of all the values within an array.
function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
    	sum = sum + arr[i];
    }
    return sum;
}

//Find Max: Given an array with multiple values, write a function that returns the maximum number in the array.
function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++){
    	if(arr[i] > max){
    		max = arr[i];
    	}
    }
    return max;
}

//Find Average: Given an array with multiple values, write a function that returns the average of the values in the array.
function findAvg(arr) {
	var avg = 0;
	for(var i = 0; i < arr.length; i++){
		avg = arr[i] + avg;
	}
	return avg/arr.length;
}

//Array Odd: Write a function that would return an array of all the odd numbers between 1 to 50
function oddNumbers() {
    var arr = [];
    for(var i = 1; i < 50; i++){
	    if(i % 2 == 1){
		arr.push(i);
	    }
    }
    return arr;
}

//Greater than Y: Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr, Y) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
	    if(arr[i] > Y){
		count = count + 1;
	    }
    }
    return count;
}

//Squares: Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareVal(arr) {
    for(var i = 0; i < arr.length; i++){
	    arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//Negatives: Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function noNeg(arr) {
    for(var i = 0; i < arr.length; i++){
	    if(arr[i] < 0){
		    arr[i] = 0;
	    }
    }
    return arr;
}

//Max/Min/Avg: Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];

	for(var i = 1; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum = sum + arr[i];
	}
	var avg = sum/arr.length;
	var arrnew = [max, min, avg];
	return arrnew;
}
//Swap values: Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr) {
    //your code here
    return arrnew;
}

//Number to string: Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr) {
    //your code here
    return arr;
}
