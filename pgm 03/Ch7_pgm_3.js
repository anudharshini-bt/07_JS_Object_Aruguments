var buildCar;
var getCarinfo;
var Car1;
var Car2;

buildCar = function (name,make,model,year,color) {
    return {
        name:name,
        make:make,
        model:model,
        year:year,
        color:color

    };
    
};
getCarinfo = function (Car) {
    return Car.name + ":" + Car.make +" " + Car.model + " " + Car.year+ " , Color: " + Car.color;
};

Car1 = buildCar("Blaze","Chevrolet","Camaro","2020","Summit White");
Car2 = buildCar("Stomer","Dodge","Challenger","2019","Granite Metallic");

console.log(getCarinfo(Car1));
console.log(getCarinfo(Car2));