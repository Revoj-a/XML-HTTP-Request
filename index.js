const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Loaded!");
  JSON.parse(this.responseText);
};

req.oneerror = function () {
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/");
req.send();
