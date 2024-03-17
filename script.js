var isDate = function (input) {
  //   write your code here
 //    var checkDate=/^\d{4}-\d{2}-\d{2}$/.test(input);
	// return checkDate;
	var isDate = function (input) {
    if (input instanceof Date) return true; // check if input is a Date object
    
    var timestamp = Date.parse(input); // try to parse input
    if (isNaN(timestamp) == false) return true; // check if parsing was successful
    
    return false; // if neither condition is met, return false
};
	
};

// Do not change the code below.
const input = prompt("Enter Date.");

alert(isDate(input));   

