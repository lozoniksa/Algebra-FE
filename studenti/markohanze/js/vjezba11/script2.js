var datum = new Date();
console.log(datum.toString());
console.log(datum.toLocaleString());

var osoba = {
  ime: "Perica",
  godine: 55
};

console.log(osoba.ime.valueOf());

console.log(osoba);
console.log(JSON.stringify(osoba));

var jsonAdresa = '{"ulica":"Ilica","broj":21, "grad":"Zagreb"}';
console.log(jsonAdresa);
var objAdresa = JSON.parse(jsonAdresa);
console.log(objAdresa.grad);

var novaOsoba = {
  ime: "Perica",
  prezima: "Horvat",
  godine: 55,
  toJSON(){
    return this.ime + ' ' + this.prezima;
  }
};

console.log(JSON.stringify(novaOsoba));

var novaOsoba1 = {
  ime: "Perica",
  prezima: "Horvat",
  godine: 55,
}
console.log(JSON.stringify(novaOsoba1));