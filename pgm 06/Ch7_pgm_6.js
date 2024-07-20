var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

for (var i = -20; i <= 60; i += 10) {
    console.log("Line length:", i);
    console.log(line(i));
    console.log("-----------------------");
}

var spaces = function (spaceLength) {
    spaceLength = Math.max(0, spaceLength);
    spaceLength = Math.min(40, spaceLength);
    return " ".repeat(spaceLength);
};

console.log(spaces(10));  
console.log(spaces(30));                              
console.log(spaces(50));

var emptyBox = function (width) {
    width = Math.max(0, width);
    width = Math.min(40, width);
    
    var topBottom = "=".repeat(width);
    var middle = "= " + " ".repeat(width - 4) + " ="; // Adjusted for padding inside the box
    
    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};

emptyBox(12);