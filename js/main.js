// exercice 2
// initialise le personnage

function guerrier(nom,force,defense,sante,){
  this.nom = nom;
  this.force = force;
  this.defense = defense;
  this.sante = sante ;
  this.getName = function() {
   alert(this.nom);
 };
}


/*Les personnages*/
var guerrier1 = new guerrier('hulck',100,50,75,[])

alert(guerrier1.nom)

var guerrier2=new guerrier('batman',100,30,75,[])

alert(guerrier2.nom)

guerrier1.sante=guerrier1.sante-guerrier2.force;

alert(guerrier1.sante+" sante du guerrier1");

// essai//
attaquer=function(){
  if(guerrier1.sante>guerrier2.sante){

  guerrier1.sante=guerrier1.sante+10;

  alert(guerrier1.nom + " a "+ guerrier1.sante +" points de sante ");

}if(guerrier2.sante>guerrier1.sante){

  guerrier2.sante=guerrier2.sante+10;

  alert(guerrier2.nom +" a " + guerrier2.sante + " points de sante ");
  }
  else {
    alert("perdu");
  }
};
attaquer();
// fin essai//

/*Création du magicien*/

function magic(nom,force,defense,sante,mana,){
  this.nom = nom;
  this.force = force;
  this.defense = defense;
  this.sante = sante;
  this.mana=mana;
  this.getName = function() {
 alert(this.nom);
 };
 }
var magicien=new magic('merlin',200,100,80,250,[])

alert(magicien.sante + " sante du magicien");

soin= function(){

if(magicien.sante>=10){

magicien.mana=magicien.mana-10;
magicien.sante=magicien.sante+10;
alert(magicien.sante+" sante magicien");

}else{

alert("pas assez de mana");
};

}
soin();

/*Attaque*/

// attaquer= function(){
//
// if (this.sante > 0) {
//
// var perte = this.force;
// this.sante = this.sante -perte;
// }
//
// if (this.sante > 0) {
//
// alert(this.nom + " a encore " + this.sante + " points de vie");
//
// }else{
//
// this.sante = 0;
//
// }
// magicien.attaquer(guerrier1);
// alert(this.nom + " a encore " + this.sante + " points de vie");
//
// magicien.attaquer(guerrier2);
// guerrier1.attaquer(magicien);
// guerrier2.attaquer(magicien);
// }
// attaquer();
