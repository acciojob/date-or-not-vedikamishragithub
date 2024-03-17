var isDate = function (input) {
  //   write your code here
    var checkDate=/^\d{4}-\d{2}-\d{2}$/.test(input);
	return checkDate;
	
};

// Do not change the code below.
const input = prompt("Enter Date.");

alert(isDate(input));   

