const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Loaded!");
  const data = JSON.parse(this.responseText);
  console.log(data);
};

req.oneerror = function () {
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/");
req.send();
