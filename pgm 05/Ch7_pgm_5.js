
var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(5, 10, 3);   
showSmallest(-5, -10, 0);  
showSmallest(1, 1, 1); 