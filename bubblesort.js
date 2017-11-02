function bubbleSort(a){
	console.log(a);
    var swapped = true; // the base condition for the array to traverse.
    var count =0
    var count1 = 0
    var count2 = 0
    while (swapped){
        swapped = false;
        // check number of while loops
        for (var i=0; i < a.length; i++) {
        	count1++ // Checl number of times for loop is incremented
            if (a[i] > a[i+1]) {
            	count2++ //check number of times if is implemented
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
                console.log(a);
                // console.log('arr = ',a[i],a[i+1])
                
            } 
        }
        count++  
    } 
    // console.log(count , count1, count2);
    // console.log(a)
    return a 

}