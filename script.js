
//ex1

let container = document.createElement("div");
document.body.appendChild(container);

let h1 = document.createElement("h1"); //creation of the h1
container.appendChild(h1); //h1 integration
h1.textContent = "Cinéma Le Dauphin"; //h1 text

let p = document.createElement("p"); //creation of the paragraph p
container.appendChild(p); //p integration
p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)." //text of my paragraph
let btnContinue = document.createElement("input"); //button generation
container.appendChild(btnContinue); //put the button in the bodysuit
btnContinue.type = "button"; //assigned him his type
btnContinue.value = "Voir les films à l’affiche cette semaine" //add text to the button


btnContinue.addEventListener("click", voir, false);

function voir() {
  container.hidden = true
  container2.hidden = false
}

// 1.2

let array = [ //
  ["titre du film", "realisateur", "nationalité", "année", "durée", "version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]; //Initiating an array

// 1.3

let container2 = document.createElement("div");
container2.hidden = true;
document.body.appendChild(container2);

function arraydisplay(array) {

  let i = 0; //declaration of the variable
  let j; //declaration of the variable
  let currentElmt; //creation of the current element
  let currentElmt2; //creation of the current element
  let table; //table creation
  let tbody; //creation tbody
  let tr; //creation tr
  let td; //creation tb


  table = document.createElement("table"); //creation of the table
  container2.appendChild(table); //set the table in the body

  tbody = document.createElement("tbody"); //creation of the tbody
  table.appendChild(tbody); //set the tbody in the table


  while (i < array.length) { //Condition of continuation
    currentElmt = array[i];
    let tr = document.createElement("tr");//generated a tr

    j = 0;

    while (j < currentElmt.length) { //Condition of continuation
      currentElmt2 = currentElmt[j];//Recovery of the current element
      let td = document.createElement("td");//generated a tr
      td.textContent = currentElmt[j];
      tr.appendChild(td);//put the td in the tr
      j++
    }
    tbody.appendChild(tr)
    i++
  }
}
arraydisplay(array);
