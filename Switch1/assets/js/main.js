// let jourSemaine = prompt("Entrez un jour de la semaine")
// switch(jourSemaine){
//     case 'lundi' :
//     console.log( "On est"+" "+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'mardi' :
//     console.log("On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'mercredi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'jeudi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'vendredi' :
//     console.log("On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'samedi' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
//     case 'dimache' :
//     console.log( "On est"+jourSemaine+"."+ 'Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us');
//     break ;
// default:
//     console.log("Sorry, je ne comprend pas");
// }


4//


// let meteo = prompt("quel temps fait-il aujourd'hui ?")
// switch (meteo) {
//     case 'vent':
//     console.log("il y a du "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'pluie':
//     console.log("il y a de la "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'neige':
//     console.log("il y a de la "+ meteo + " hmdl j'ai une veste" );
//     break;
//     case 'soleil':
//     console.log("il y a du "+ meteo + " et des nanas" );
//     break;


//     default:
//         console.log("Tu fais quoi zebi");
//     break;
// }


3//

// let nombre =parseInt(prompt("donne moi un nombre"))
// switch (nombre % 2) {
//     case 0 :
//         alert(nombre+ " est un nombre pair ")
//     break;
    
//     default:
//      alert(nombre + " est impair");
//     break;
// }

4//
// let nombre = parseInt(prompt("donne moi un nombre"));
// let opera = prompt("donne moi une opérateur mathématique");
// let secondNombre= parseInt(prompt("donne moi un second nombre"));

// switch (opera) {
//     case "*":
//     alert(nombre*secondNombre)
//     break;
//     case "+":
//     alert(nombre+secondNombre)
//     break; 
//     case "-":
//     alert(nombre-secondNombre)
//     break; 
//     case "/":
//     alert(nombre/secondNombre)
//     break; 
//     default:
//         alert("a quoi tu joues ? on veut un opé!")
//         break;
// }



// Exo1_boucles-for.md
//Exo1



/* let classe = [ 

     "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
     ]
   for(let i=0; i < classe.length ; i++ )
    console.log("bonjour "+classe [i]);
    */
/* exo2 */
/* let nombre = parseInt(prompt("Donne moi nombre"))

 for(let i=0; i<=nombre; i++ ){
        console.log(i);
 }

 */
/* EXO 2 BOUCLE */
/* exo1 */
 /* let classe = [ 

 "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
    
   ]

    classe.forEach(element => console.log("bonjour "+element)); */
/* exo2 */
/*  let ele = [
         "un", "deux","trois","quatre","cinq"
 ]
 ele.forEach(element => console.log(element)); */





/*  exo3_boucles-for-foreach.md */

/* exo1 */


/* let multiplication = 5
for (let i=0; i<=10; i++) 
{
    console.log(multiplication+" * " + i + " = " + multiplication*i);

  }
 */

/* EXO2 */

/* let multiplication = 5
for (let i=0; i<=10; i+=2) 
{
    console.log(multiplication+" * " + i + " = " + multiplication*i);

  } 
  */


/* EXO 3 */
/*  
 
 for (let i=20; i>=0; i-=2)
 {
     console.log(i);
 
   }
    */

/* EXO 4 */

 /* let classe = [ 

  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
     
  ]
 
let longPrenoms = []

classe.forEach(element => {
  if (element.length>5){
    longPrenoms.push(element)
  }

});
console.log(longPrenoms);  */

/* EXO 5 */

/*  let somme = [
   14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61
  ]

let grossesSommes = []

somme.forEach(element => {
  if (element>60) {
    grossesSommes.push(element)
    
  }
  
}); 
console.table(grossesSommes)
console.table(somme)

  */

/* EXO6 */
/*  let donnees = [
  17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100
];

let typeString=[]
let typeNumber=[]
let typeObject=[]
let typeAutre=[]

donnees.forEach(element => {
    if (typeof  element== "string") {
    typeString.push(element)
    
  } else if (typeof element == "number") {
    typeNumber.push(element)
  }else if (typeof element == "object"){
    typeObject.push(element)
  }else {
    typeAutre.push(element)
  }
 
 });
console.log(typeString);

console.log(typeNumber);

console.log(typeObject);

console.log(typeAutre); */


 /* EXO4_BOUCLES-while.md */


 /* EXO1 */


/* let chiffre = parseInt(prompt("choissez un chiffre"))

let compteur = 0

while (compteur <= chiffre) {
  console.log(compteur);
  compteur++;
}


 */

/* EXO2 */
/*  let classe= [
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
]
let i=0

while (classe.length>i) {

  console.log("Bonjour "+classe[i]);
  i++;
}
 */

 /* let classe =[
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 while (classe.length>i) {
   console.log("bonjour "+classe[i]);
   i++;
 } */


 /* let tabl=[
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 while (tabl.length>i) {
   console.log("bonjour "+ tabl[i]);
   i++;
 } */
/* EXO3 */
 /* let classe = []

 let nombre = parseInt(prompt("donne moi un nombre max d'étudiants dans la classe "))

 while (classe.length<nombre) {
   classe.push(prompt("donne moi un nom a push"))
   
 }
 console.log(classe); */

/* EXO1 */
/* let chiffre = parseInt(prompt("choisissez un chiffre"))

let compteur = 0


do { 
  console.log(compteur);
  compteur++;
} while (compteur <= chiffre);
 */

 /* EXO2 */

 /* let classe = [
  "abdel","amine","antoine","ayoub","bilal","camille","cem", "gauthier","laurie","mahad","mufassa","nghia","redwane","salim","said","yahya","yasmina","yassin"
 ]

 let i = 0

 do {
   console.log("Salut "+classe[i]);
   i++;
 } while (classe.length>i); */ 

 /* EXO3 */


/*   let fruit = [
   "muss","abdel","said","mahad","gauthii","banane"
 ]

 let i = 0

 do {
   i--;
   console.log(fruit);
 } while (fruit.shift());
   */

/*  # Boucles WHILE && DO...WHILE */
/* ## Exo 1 Boucles simples */

/*  let valeur 
 while (!valeur.trim()) { 
   valeur = prompt('entrez un chiffre ')
  
}
alert(valeur)
  
 */

 /* let valeur = parseInt(prompt("Donne une valeur chien")) 

 while (!valeur || isNaN || (valeur)<10) { 
  valeur = prompt('entrez un chiffre ')
  
}
alert(valeur) */

/* let valeur = parseInt(prompt("Donne une valeur ")) 
let i = 0; 

while (i==i) { 
  i++;
  console.log(i);
}
 */

/* let i = 2; 

while (i<6) { 
  i++;
  console.log(i);
} */

/* let i = 0; 

while (i<20) { 
 i+=2;
  console.log(i);
} */

/* EXO2 */

/* let panierLegumes = [
  "salade","tomate","radis","gauth"
]
let caisseLegumes = []

while (panierLegumes.length>0) {

  caisseLegumes.push(panierLegumes.shift())

}

console.log(panierLegumes);
console.log(caisseLegumes); */

/* Exo4 */

/*  let enigme = prompt('De quelle couleur est le cheval blanc de napoléon')

while (enigme != "blanc" ) {
  enigme=prompt('De quelle couleur est le cheval blanc de napoléon')
  
}
alert('Bien joué bg') 
 */
/*Exo5  */

/* let enigme 

do {
  enigme=prompt('De quelle couleur est le cheval blanc de napoléon')
} while (enigme !== "blanc");
alert("c'est bon") */

/* Exo6 */
/*  let annee = 2021
let randomYear = Math.floor(Math.random() * (annee - 1970 +1)) + 1970;




 let question 

let reponse = annee - randomYear
 
 let i = 1;

do {
   question = prompt("Si je suis né(e) en "+randomYear+ " , quel âge ai-je aujourd’hui ?");
  i++;
     
} while (question != reponse && i<=3 ) 
 
 if (question == reponse) {
       alert("C'est pertinant")
     } else {
       alert("t'es con ou quoi?")
     } */

/* Exo7 */
/* let panierFruits = [ ]


do {
  let fruit= prompt("remplie le panier")

  fruit = fruit.charAt(0).toUpperCase()+fruit.slice(1).toLowerCase()
  panierFruits.push(fruit)

    
} while (panierFruits.length<3);
console.table(panierFruits);

let enlever
let i = 1;

do {
  i=0;
  enlever = prompt("Tu veux enlever un fruit ? "+ panierFruits)
  enlever = enlever.charAt(0).toUpperCase()+enlever.slice(1).toLowerCase()
  if (panierFruits.includes(enlever)&& enlever!="") {
    panierFruits.splice(panierFruits.indexOf(enlever),1)
  i++;
  }
  
} while (i>0);
console.table(panierFruits);
alert("Merci bon appétit") 

 */


/* let annee = 2021
let randomYear = Math.floor(Math.random() * (annee - 1970 +1)) + 1970;




 let question 

let reponse = annee - randomYear
 
 let i = 1;

do {
   question = prompt("Si je suis né(e) en "+randomYear+ " , quel âge ai-je aujourd’hui ?");
  i++;
     
} while (question != reponse && i<=3 ) 
 
 if (question == reponse) {
       alert("C'est pertinant")
     } else {
       alert("t'es con ou quoi?")
     } 

     
 */


 /* EXO_INTRO_FONCTION.md */

 /* # Exo 1 Additionner */
 
/*  let maFonction = (parm1,parm2) =>{
  console.log(parm1+parm2);
};
maFonction(12 , 54) */

/*deuxieme maniere de faire */
/* let maFonction = (parm1,parm2) =>{
  return(parm1+parm2);
};
console.log(maFonction(12 , 54));
 */
/* # Exo 2 Soustraire */
/* let maFonction = (parm1,parm2)=> {
  return(parm1-parm2)
}
console.log(maFonction(12,54)); */

/* # Exo 3 Multiplication*/
/* let maFonction = (parm1,parm2) =>{
  return(parm1*parm2);
};
console.log(maFonction(12 , 54));
 */
/* # Exo 4 Division*/
/* let maFonction = (parm1,parm2) =>{
  return(parm1/parm2);
};
console.log(maFonction(12 , 54)); */

/* Exo 5 Modulo */
/* let maFonction = (parm1,parm2) =>{
  return(parm1%parm2);
};
console.log(maFonction(12 , 54)); */

/* # Exo 6 Carré */
/* let maFonction = (parm1) =>{
  return(parm1^2);
};
console.log(maFonction(12 , 54)); */
/* # Exo 7 Exposant */
/* let maFonction = (parm1,parm2) =>{
  return(parm1^parm2);
};
console.log(maFonction(12 , 54)); */

/* # Exo 8 Capitalize */
/* let maFonction = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(maFonction("sALRUDJD")); */

/* # Exo 9 Calcul */
/*  let  monCalcul = (nombre, secondNombre, opera) => {
  
  switch (opera) {
       case "*":
        return(nombre*secondNombre)
       
       case "+":
        return(nombre+secondNombre)
        
       case "-":
        return(nombre-secondNombre)
        
       case "/":
        return(nombre/secondNombre)
        
       default:
        return("a quoi tu joues ? on veut un opé!")
          
   }
  
}
console.log(monCalcul(5,5,"*"));

 let valeur1= parseInt(prompt("donne un nombre"))
 let valeur2= parseInt(prompt("donne un nombre"))
 let opera= prompt("donne moi une operation")

 alert(monCalcul(valeur1 ,valeur2,opera)) 


 */

/* EXO_MIDDLE_FONCTIONS_2.md */
/*# Exo 1 reverseNumber*/
/* let reverseNumber = (nombre) =>{
  nombre = nombre +""
  return nombre.split("").reverse().join("");
}
console.log(reverseNumber(123456)); */

/* # Exo 2 Pair */
/* let estPair = (nbr)=>{

  switch (nbr%2) {
    case 1:
      return("pas pair")
    case 0:
      return(" pair")      
    default:
      return ('ta pas mis un nombre')
  }


}

console.log(estPair(5));
 */

 /* # Exo 3 logIn */

 /* let logIn = () => {
  let mdp 
  do{ 
   mdp = prompt('Quelle est le mdp?')
  } while (mdp !== 'tqt') 
  alert("t'es co")
 }
 logIn() 
  */

/* EXO_challenge_fonction */
/* # Exo 1 Classe */
/*  let codingSchool17 = []

do {
  let codingSchool17= prompt("remplie le panier")

  codingSchool17 = codingSchool17.charAt(0).toUpperCase()+codingSchool17.slice(1).toLowerCase()
  codingSchool17.push(codingSchool17)

    
} while (codingSchool17.length<3);
console.table(codingSchool17);

let enlever
let i = 1;
do {
  i=0;
  enlever = prompt("Tu veux enlever un fruit ? "+ codingSchool17)
  enlever = enlever.charAt(0).toUpperCase()+enlever.slice(1).toLowerCase()
  if (codingSchool17.includes(enlever)&& enlever!="") {
    codingSchool17.splice(codingSchool17.indexOf(enlever),1)
  i++;
  }
  
} while (i>0);
console.table(codingSchool17);
alert("Merci bon appétit")  */
 


/* function estPremier(nbr) {
  for(let i = 2; i < let; i++)
    if(nbr%i === 0) return false;
  return nbr > 1;
}

console.log(estPremier); */
/* 
function nbrPremier(nbr) {
  for(let i = 2; i < nbr; i++)
    if(nbr%i === 0) return false;
  return nbr > 1;
}

console.log(nbrPremier(2)); */


/* Revision_js # Exo 1 Les methods string prompt etc*/
/* 1 */
/* let prenom= prompt('Quel est ton prenom ?')
alert(prenom.charAt(0)) */
/* 2 */
/* let prenom= prompt('Quel est ton prenom ?')
alert(prenom.substr(1))
 */
/* 3 */

/* 3 */
/* let prenom= prompt('Quel est ton prenom ?')

if (prenom.length>=5) {
  alert(prenom.substr(4,1)) 
} else {
  alert('je veux au moin 5 lettres')
}

 */

 /* 5 */

/*  let min = prompt("Quel est ton prenom? ").toLowerCase()
 alert(min)

 let maj = prompt("Quel est ton prenom? ").toUpperCase()
 alert(maj) */

/*  let prenom = prompt("Quel est ton prenom? ")
 prenom = prenom.charAt(0).toUpperCase()+prenom.slice(1).toLowerCase()
 alert(prenom)

 let prenom = prompt("Quel est ton prenom? ")

prenom = prenom.charAt(0).toUpperCase()+prenom.slice(1).toLowerCase()
 alert(prenom)
 */

/*  
let prenom = prompt("Quel est ton prenom? ")

 prenom = prenom.charAt(0).toLowerCase()+prenom.slice(1).toUpperCase()    
 
 alert(prenom)

 */


 /* ## Exo 2(les tableaux) */


    /* 2 */
/*  let tabL = [ "Tu",
              "Vas",
              "Te",
              "Calmer",
              "Said"]

 */

 /* 3 */
 /* console.log(tabL[2],tabL[4]); */
/* tabL */
  /* 4 */
/* let tabL = [ "Tu",
              "Vas",
               "Te",
              "Calmer",
              "Said"]
              
tabL[1] = tabL[1].substr().toLowerCase()+tabL[1].slice(1).toUpperCase()   

console.log(tabL[1]);  */

/* 5 */
/* 
let tabL = [ "Tu",
"Vas",
 "Te",
"Calmer",
"Said"]

tabL[3] = tabL[3].charAt(0)

console.log(tabL[3]);  */
/* 6 */
/*  let tabL = [  "Tu",
              "Vas",
              "Te",
              "Calmer",
              "Said"]

tabL[1] = tabL[4].slice(1,5)

console.log(tabL[1]);  */
 
/* 7 */

/* let tabL = [  "tu",
              "Vas",
              "Tees",
              "Calmer",
              "Said"]

console.log(tabL[0].charAt(0).toLocaleUpperCase()+tabL[0].charAt(1).toLowerCase()); */

/* 8 */
/* let tabL = [  "tu",
              "Vas",
              "Te",
              "Calmer",
              "Said"]
console.log(tabL[0]+tabL[2]); */

/* 9 */
/* let tabL = [  "tu",
              "Vas",
              "Te",
              "Calmer",
              "Said"]
console.log(tabL[2].slice(0).toUpperCase()+" "+tabL[4].toLowerCase()) */
/* 10 */

/* let tabL = [  "tu",
              "vas",
              "te",
              "calmer",
              "said"]

 */
/* 
console.log
  (tabL[0].charAt(0)+tabL[0].slice(1,2).toUpperCase()
+" "+tabL[1].charAt(0)+tabL[1].slice(1,2).toUpperCase()
+" "+tabL[2].charAt(0)+tabL[2].slice(1,2).toUpperCase()
+" "+tabL[3].charAt(0)+tabL[2].slice(1,2).toUpperCase()
+" "+tabL[4].charAt(0)+tabL[4].slice(1,2).toUpperCase());


 */

/*  let tabNew = []
 tabL.forEach(e => {
   e=e.charAt(0).toLowerCase()+e.charAt(1).toUpperCase()
   tabNew.push(e)
 })
 console.log(tabNew); */

 /* ## Exo 3(boucle forEach) Partie 1 */
/*exo1  */
/*  let prenom = [
"Camille",
 "Anais",
 "Axel",
 "Arthur",
 "Evan",
 "Clara",
 "Emma",
 "Charlotte",
 "Adrien"] */
 /* exo2 */
 /* console.log(prenom); */
/* exo 3 */
/* 
prenom.forEach(e => {
 console.log( e=e.charAt(0))
})
 */
/* 4 */
/* prenom.forEach(e => {
  console.log( e=e.charAt(1))
 }) */
 /* 5 */
/*  prenom.forEach(e => {
  console.log( e=e.charAt(1)+" "+e)
 }) */
/* 6 */
/* prenom.forEach(e => {
  if (e.length%2!==0) {
    console.log()
  } else {
    console.log(e)
  }
 })  */
/* 
 prenom.forEach( e, index) => {
  if ( index %2 == 0 ) {
    console.log(e)
 }
  */

 /* ## Exo 3(boucle forEach) Partie 2*/
 /* exo1 */
 /* let prenom = [
  "camille",
   "anais",
   "axel",
   "arthur",
   "evan",
   "clara",
   "emma",
   "charlotte",
   "adrien"] */
   /* exo 2 */
   /* prenom.forEach(e,index) => {
    if (index % 2 !=0) {
      console.log(e.toUpperCase()); 
    }
    
   }) */

/* exo3 */
/* prenom.forEach(e, index) => {
  if (index % 2 ==0 ) {
    console.log(e.charAt(0).toUpperCase()+e.substring(1)); 
  } 
 })
   
 */

 /* exo 4 */

 /* prenom.forEach(e, length => {
  if (length % 2 == 0 && e.length >  4) {
    console.log(e); 
  } 
 })
    */

    /* exo 5 */
    /* prenom.forEach(e, i => {
      if (i % 2== 0 && e.length>=4) {
        console.log(e.charAt(0).toUpperCase()); 
      } 
     }) */

     /* exo 6 */
     /* prenom.forEach(e => {
      if (e.charAt(0) =="a" || e.charAt(0)=="e"|| e.charAt(0)=="m"|| e.charAt(0)=="f"|| e.charAt(0)=="y"||e.charAt(0)=="n") {
        console.log(e); 
      } 
     }) */

     /* exo 7 */
    /*  prenom.forEach(e=> {
       if ((e.charAt(0) =="a" || e.charAt(0)=="e"|| e.charAt(0)=="m"|| e.charAt(0)=="f"|| e.charAt(0)=="y"||e.charAt(0)=="n") && e.length>5) {
         console.log(e);
       }
     })
 */
     /* Exo 3(boucle forEach) Partie 3  */

     /* exo 1 */
     /* let tab = [
      "camille",
      "kompluu",
       "anais",
       "axel",
       "arthur",
       "evan",
       "clara",
       "emma",
       "charlotte",
       "adrien",
        "kid"] */
       /* exo2 */
       /* tab.forEach(e=> {
        if ((e.charAt(0) =="a" || e.charAt(0)=="e"|| e.charAt(0)=="m"|| e.charAt(0)=="f"|| e.charAt(0)=="y" || e.charAt(0)=="n") && e.length<5 ) {
          
        } */
      /* }) */
      /* exo3 */
      /* prenom.forEach(e=>{
        if (((e.charAt(0)=='k'||e.charAt(0)=='c'||e.charAt(0)=='m'||e.charAt(0)=='f'||e.charAt(0)=='y'||e.charAt(0)=='n'||e.charAt(0)=='a'||e.charAt(0)=='e'||e.charAt(0)=='p'||e.charAt(0)=='o') && e.length<=4) && e.length%2!==0 ) {
          console.log(e);
        }
      })
       */
      /*  */
      /* prenom.forEach(e, i => {
      if (i % 2== 0 && e.length>=4) {
        console.log(e.charAt(0).toUpperCase()); 
      } 
     }) */
       /*  */
      /* exo 4 */
   /*    prenom.forEach(e=>{
        if (((e.charAt(0)=='k'||e.charAt(0)=='c'||e.charAt(0)=='m'||e.charAt(0)=='f'||e.charAt(0)=='y'||e.charAt(0)=='n'||e.charAt(0)=='a'||e.charAt(0)=='e'||e.charAt(0)=='p'||e.charAt(0)=='o') && e.length>5)  && e.length%2==0 ) {
          console.log(e.charAt(0).toLowerCase()+e.slice(1,2).toUpperCase()+e.slice(2,e.length -1)+e.charAt(e.length -1 ).toUpperCase());
        }
      }) */
      /* 5 */
      /* let lafin=""
      prenom.forEach(e=>{
        if (((e.charAt(0)=='k'||e.charAt(0)=='c'||e.charAt(0)=='m'||e.charAt(0)=='f'||e.charAt(0)=='y'||e.charAt(0)=='n'||e.charAt(0)=='a'||e.charAt(0)=='e'||e.charAt(0)=='p'||e.charAt(0)=='o') && e.length<7)  && e.length%2==0 ) {
           lafin=lafin+e.charAt(0).toUpperCase()+e.slice(1,2) 
        }
      })
      console.log(lafin); */

      /* Exo 4(boucle for et forEach,condition) */
       /* let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"]  */
      
       /* leTableau.forEach(e => {
        switch (typeof(e)) {
        case "boolean":
          console.log("it's a boolean braaah");
          break;
          case "number":
            console.log("it's a number braaah");
          break;
          case "string":
            console.log("it's a string braaah");
          break;
          case "object":
            console.log("it's an object braaah");
          break;
      
        default:
          break;
      }
      }); */
/* let lesIntegers = []
let lesStrings = []
let lesAutres = []

leTableau.forEach(e => {  
  switch (typeof(e)) {
    
      case "number":
        lesIntegers.push(e)
      break;
      case "string":
        lesStrings.push(e)
      break;
  
    default: 
    lesAutres.push(e)
      break;
  }
  });
  
console.table(lesIntegers);
console.table(lesStrings);
console.table(lesAutres); */
/* EXO3 */
/* let lesGrandsIntegers = []
let lesPetitsIntegers = []
let lesPetitsStrings = []
let lesGrandsString = []


leTableau.forEach(e => {
 if (typeof(e)=="number" && e<100) {
  lesPetitsIntegers.push(e)
 } else if (typeof(e)=="number" && e>=100) {
  lesGrandsIntegers.push(e)
 } else if (typeof(e)=="string" && e.length<6) {
  lesPetitsStrings.push(e)
 } else if (typeof(e)=="string" && e.length>=6){
  lesGrandsString.push(e)
 } 
});

console.table(lesGrandsIntegers);
console.table(lesPetitsIntegers);
console.table(lesPetitsStrings);
console.table(lesGrandsString); */

/*  Exo 4 */

/*  let pot1 = []
let pot2 = []
let i = 0
while ( i <11 ) {
  let question = parseInt(prompt("donne moi un nombre"))
 if (question<=100 && question > 0 ) {
   i++
    pot1.push(question)
  }else if( question < 0) {
    alert("t'es foutu");
  } else{
    i++
    pot2.push(question)
  }
}
 
console.table(pot1);  
console.table(pot2);  

 */

 /* 5. **PARTIE 1** */
 /* let  panier=[]
 let fruits = []
 let legumes = []
 for (let i = 0; i < 8; i++) {
 if (i<4) {
   panier.push(prompt("donne moi fruit")+("je suis un fruit")) 

 } else {
  panier.push(prompt("donne moi legume")+("je suis un legume"))
 }
   
 }

 panier.forEach(e => {
  if (e.includes("je suis un fruit")) {
    fruits.push(e)
  } else{
    legumes.push(e)
  }
})

console.table(panier);
console.table(legumes); 
console.table(fruits);

 */

