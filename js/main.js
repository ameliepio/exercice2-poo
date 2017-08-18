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
var guerrier1 = new guerrier('hulck',100,50,75,[]);

alert(guerrier1.nom)

var guerrier2=new guerrier('batman',100,50,75,[])

alert(guerrier2.nom)

/*Création du magicien*/
 var magic=new guerrier('merlin',200,100,80,[])

magic.mana=200;

alert(magic.mana)

var adversaire=magic;

alert(adversaire.nom)
/*Attaque*/

function attaquer(cible) {

if (this.sante > 0) {

var perte = this.force;

cible.sante = cible.sante - perte;

if (cible.sante > 0) {

alert(cible.nom + " a encore " + cible.sante + " points de vie");

} else {

cible.sante = 0;
}
}
alert(this.nom + " perdu");
};
// Combat le magicien

guerrier.combattre = function (adversaire) {

    // guerrier.attaquer(adversaire);

    this.attaquer(adversaire);


    if (guerrier.sante === 0) {

        alert("perdu")
};
}
adversaire.attaquer(guerrier1);
adversaire.attaquer(guerrier2);
guerrier1.combattre(adversaire);

guerrier2.combattre(adversaire);
