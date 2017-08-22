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

alert(guerrier1.nom + " a "+ guerrier1.sante +" de sante ");

// Attaque//
attaquer=function(){
  if(guerrier1.sante>guerrier2.sante){

  guerrier1.sante=guerrier1.sante+10;

  alert(guerrier1.nom + " attaque "+ guerrier2.nom +" il lui reste "+ guerrier1.sante+ " de vie ");


}if(guerrier2.sante>guerrier1.sante){

  guerrier2.sante=guerrier2.sante+10;
  alert(guerrier2.nom + " attaque "+ guerrier1.nom +" il lui reste "+ guerrier2.sante+ " de vie " );

  }
  else {
    alert("perdu");
  }
};
attaquer();
// fin Attaque//

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

// alert( magicien.nom +" a "+ magicien.sante + " de sante ");

// soins

soin= function(){

if(magicien.sante>=10){

magicien.mana=magicien.mana-10;
magicien.sante=magicien.sante+10;
alert( magicien.nom +" a "+ magicien.sante+" de sante" );

}else{


alert("pas assez de mana");
};

}
soin();

// Attaque//
combat=function(){
  if(guerrier.sante>magicien.sante){

  guerrier.sante=guerrier.sante+10;

  alert(guerrier.nom + " attaque "+ magicien.sante +" il lui reste "+ guerrier.sante+ " de vie ");

}if(magicien.sante>guerrier.sante){

  magicien.sante=magicien.sante+10;
  alert(magicien.sante + " attaque "+ guerrier.nom +" il lui reste "+ magicien.sante+ " de vie " );

  }
  else {

    magicien.mana=magicien.mana+10
    alert(magicien.nom + " vient de se soigner il lui reste "+ magicien.mana+ " de mana" );
  }
};
combat()
