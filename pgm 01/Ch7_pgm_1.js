var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));

var planet2;
var getPlanetInfo;

planet2 = {
    name:"Uranus",
    position: 7,
    type: "Ice Giant",
    radius:25559,
    sizeRank: 4
};
getPlanetInfo = function (planet) {
    return planet.name + ":planet number " +planet.position;
};

console.log(getPlanetInfo(planet2));

getPlanetInfo = function (planet) {
    return planet.name + ": position " + planet.position + ", type: " + planet.type + ", radius: " + planet.radius + " km";
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
