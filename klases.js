class  Cilveks {
 constructor (age = 0, name = "Anna", sex = "V"){
    this.vecums = age;
    this.vards = name;
    this.dzimums = sex;
    this.info();
   
 }
svinetDzimeni(){
   this.vecums++;
   this.info()
}
mainitVardu(jaunaisVards){
   this.vards = jaunaisVards;


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
  let teksts = "Sveiki, mani sauc" + this.vards + "Man ir " + this.vecums + "gadu."
  teksts += "Es esmu "
   if (this.dzimums == "S") {
       teksts += "sieviete."
   } else if (this.dzimums == "V"){
 teksts += "vīrietis."

   } else  { teksts += this.dzimums}
   
console.log(teksts)
}
}


 pirmais = new Cilveks(15, "Katrīna", "S")

