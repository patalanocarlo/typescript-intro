console.log("Hello,typescript");
let myVar = "Carlo";
 let myString = 2
let myNumber:any = 5
myNumber="5"
// è un linguaggio costruito su javascript ma come differenze è l'uso dei dati e nuove funzionalità
//ad esempio andando a specificare una specifica variabile e typescript non avviene attraverso il browser o node.js ma viene compilato.

//Serve principalmente a verificare una struttura errata direttamente in fase di sviluppo anziche durante l'esecuzione del programma stesso dando cosi un aiuto in termini di tempo e di solidità strutturale.
//Può risolvere la problematica relativa al individuazione degli errori che in JS classico è più difficile.
//Praticamente le differenze con Js sono: Typescript introduce  un interfaccia orientata ad avere degli oggetti come delle classi a differenza di JS che utilizza uno scripting interpretato e inoltre typescript non lavorando con il browser ha bisogno di una compilazione con il codice JS sa riconoscere
//come vantaggio che possiamo usare è la possibilità di avere un codice complesso ma allo stesso tempo mantenibile e robusto...
//Il compilatore è necessario perchè riusciamo sia a risparmiare tempo ma anche facilitando la struttura dato che il compilatore aggiorna ad ogni salvataggio il nostro file JS senza dover richiamare il comando ogni volta nel terminale.
//Il suo funzionamento è: Invece di scrivere ad ogni salvataggio "app.ts" o il nomed file ma andremo a scrivere " app.ts -w " cosi facendo attiveremo un compilatore che ad ogni salvataggio compila il nostro file in JS.
// any è un tipo di dato che ci permette di essere completamente generico infatti possiamo settare un valore come stringa numero ecc..senza limitazioni e non è molto consigliato.
//Union non è altro come dice il nome che un unione di due valori o dati attraverso il simbolo "|" possiamo ovviamente inserire anche un any al interno dell'unione e serve principalmente e circoscrivere una variabile... 
//Le type inference consente al compilatore va a dedurra da solo il tipo di base che usiamo  in riferimento al contesto senza doverlo dichiarare perforza.
let numero = 5; // TypeScript deduce che 'numero' è di tipo number
let testo = "Ciao"; // TypeScript deduce che 'testo' è di tipo string



type Persona= {
    nome:string;
    cognome: string
}
let persona :Persona
persona ={
    nome:"Joel",
    cognome:"Rossi"
}
function trovaPersona (persona:Persona){}
//un esempio di union:
//type Prova = string | number
//const  x :Prova = true //non si aspetta come valore un booleano...
//le interfacce in TS sono principalmente un modo di definira la struttura dei dati che abbiamo e vanno a specificare un loro percorso di utilizzo attraverso proprietà specifiche
//classico esempio di interfaccia:
interface Persona2 {
    nome: string;
    età: number;
}
 
let persona2: Persona2;
persona2 = {
    nome: "Carlo",
    età: 5
}

function Saluta(persona: Persona2) {
    console.log(`Ciao, ${persona.nome}! Hai ${persona.età} anni.`);
}