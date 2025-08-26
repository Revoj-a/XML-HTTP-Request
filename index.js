const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Loaded!");
  console.log(this);
};

req.oneerror = function () {
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/");
req.send();
