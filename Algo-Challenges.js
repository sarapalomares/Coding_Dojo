// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255. 
function get_array(){
	var arr = [];
	for(var i = 1; i < 256; i++){
		arr.push(i);
	}
	return arr;
}

//Get Even 100 - Write a function that would get the sum of all the even numbers from 1 to 1000.
function sum_even_numbers(){
	var sum = 0;
	for(var i = 1, i < 1001; i++){
		if (i % 2 == 0){
			sum = sum + i;
		}
	}
	return sum;
}

//Sum Odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
function sum_odd_5000() {
    var sum = 0;
    for(var i = 1; i < 5001; i++){
    	if(i % 2 == 1){
    		sum = sum + i;
    	}
    }
    return sum; 
}

//Iterate an Array - Write a function that returns the sum of all the values within an array. 
function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
    	sum = sum + arr[i];
    }
    return sum; 
}

//Given an array with multiple values, write a function that returns the maximum number in the array.
function findMax(arr) {
    var max = 0;
    (var i = 0; i < arr.length; i++){
    	if(arr[i] > max){
    		max = arr[i];
    	}
    }
    return max; 
}