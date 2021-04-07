var km = parseInt(prompt("Quanti km si vogliono percorrere?"));
document.getElementById("km").innerHTML = km;

var age = parseInt(prompt("Quanti anni ha il passeggero?"));
document.getElementById("age").innerHTML = age;

var fare_km = 0.21;
var total_fare = 0;
var message = "";

if (age < 18) {
  fare_km = fare_km - ((fare_km * 20) / 100);
  total_fare = km * fare_km;
  message = "Il costo del biglietto è di €" + total_fare.toFixed(2) + " avendo applicato uno sconto minorenni del 20%.";
} else if (age > 65) {
  fare_km = fare_km - ((fare_km * 40) / 100);
  total_fare = km * fare_km;
  message = "Il costo del biglietto è di €" + total_fare.toFixed(2) + " avendo applicato uno sconto senior del 40%.";
} else {
  total_fare = fare_km * km;
  message = "Il costo del biglietto è di €" + total_fare + ".";
}

document.getElementById("output").innerHTML = message;