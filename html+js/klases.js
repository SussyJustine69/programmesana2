class  Cilveks {
 constructor (age = 0, name = "Anna", sex = "V"){
    this.vecums = age;
    this.vards = name;
    this.dzimums = sex;
   let rezultataVieta = document.getElementById("rezultats");

let cilvekaDiv = document.createElement("div");
this.infoVieta = document.createElement("p");
cilvekaDiv.appendChild(this.infoVieta);

let dzDPoga = document.createElement("button");
dzDPoga.innerHTML = "Dzimšanas diena!";
dzDPoga.onclick = () => this.svinetDzimeni();

cilvekaDiv.appendChild(dzDPoga);

this.jaunaisVards = document.createElement("input")
this.jaunaisVards.type = "text"
this.jaunaisVards.placeholder = "Jaunais vārds"

cilvekaDiv.appendChild(this.jaunaisVards)

let jaunsV = document.createElement("button");
jaunsV.innerHTML = "Jauns vārds";
jaunsV.onclick = () => this.mainitVardu();

cilvekaDiv.appendChild(jaunsV);

rezultataVieta.appendChild(cilvekaDiv);


{/* <button onclick="izveidotCilveku()">Izveidot Cilvēciņu!</button> */}

this.info();
   
 }
svinetDzimeni(){
   this.vecums++;
   this.info()
}

mainitVardu(){
   this.vards = this.jaunaisVards.value;
   this.info()
{/* <input type="text" id="vards" placeholder="Jaunais Vārds!"></input> */}


}
mainitDzimumu(jaunaisDzimums ="hz"){
if (jaunaisDzimums == "" ) {
 if( this.dzimums == "S"){
     this.dzimums = "V";
 } else{
this.dzimums = "S";

 }
 
}
 else {
     this.dzimums = jaunaisDzimums;
 }

 
}
info(){
  let teksts = "Sveiki, mani sauc " + this.vards + " Man ir " + this.vecums + " gadu."
  teksts += "Es esmu "
   if (this.dzimums == "S") {
       teksts += "sieviete."
   } else if (this.dzimums == "V"){
 teksts += "vīrietis."

   } else  { teksts += this.dzimums}
   
console.log(teksts)
this.infoVieta.innerHTML = teksts
}
}

let visiCilveki = [];

//  pirmais = new Cilveks(15, "Katrīna", "S")
function izveidotCilveku(){
 let vards = document.getElementById("vards").value
let dzimums = document.getElementById("dzimums").value
let vecums = document.getElementById("vecums").value
visiCilveki.push(new Cilveks(vecums, vards, dzimums))

}
