var point1;
var point2;
var move;
var showPoint;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 7, y : 9 });

showPoint(point1);
console.log("Move 7 down and 9 up");
showPoint(point2);
