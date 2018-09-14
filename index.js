var sumIntervals = function (arr){
	// our interval sum
	var count = 0;
	// first bring order to chaos, sort the array by the first element of sub array
	arr.sort(function(a, b){
	    return a[0] - b[0];
	});
	// var to determine if an interval is shorter than the already counted one
	var greatest = 0;

	for(i = 0; i < arr.length; i++){
		// if we hit the last element
		if(typeof arr[i+1] === 'undefined'){
			// if not yet accounted for, count interval
			if(arr[i][1] > greatest){
				count += sumInterval(arr[i]);
				greatest = arr[i][1];
			}
			break;
		}
		// if the next interval is greater than this one, no overlap, so count this one in
		if(arr[i][1] <= arr[i+1][0]){
			count += sumInterval(arr[i]);
		}
		// there is an overlap, so we merge the intervals
		else{
			var flattenedInterval = [];
			// find the beginning of the merged interval
			if(arr[i][0] <= arr[i+1][0]){
				// make sure we don't count something that was already counted
				flattenedInterval.push(checkGreatest(arr[i][0], greatest));
			}
			else{
				flattenedInterval.push(checkGreatest(arr[i+1][0], greatest));
			}
			// find the end of the merged interval
			if(arr[i][1] >= arr[i+1][1]){
				flattenedInterval.push(checkGreatest(arr[i][1], greatest));
			}
			else{
				flattenedInterval.push(checkGreatest(arr[i+1][1], greatest));
			}
			greatest = flattenedInterval[1];
			count += sumInterval(flattenedInterval);
			i++;
		}
	}
	return count;
}

function sumInterval(arr) {
	return arr[1] - arr[0];
}

function checkGreatest(current, greatest) {
	return (current < greatest)? greatest : current;
}

module.exports = sumIntervals;