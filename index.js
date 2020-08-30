// "root" index.js
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import "./env";
import { auth, db } from "./firebase"
import { writeResults } from "./lib/writeResults"


const router = new Navigo(location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let routeEntered = params.page;
      let formattedRoute = capitalize(routeEntered);
      let pieceOfState = state[formattedRoute];
      render(pieceOfState);
    }
}).resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;

  router.updatePageLinks();
};

render(state.Home);

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

// function populateMentalIllnesses () {
//   document.querySelector("#mental-illnesses") = doc.getMentalIllnessFromDB;
// }

// const mentalIllnessDB = document.querySelectorAll('#mental-Illnesses');

// //create element and render mental illnesses
// function renderMentalIllnesses(doc) {
//   let li = document.createElement('li');
//   let mentalIllnesses = document.createElement('span');

//   li.setAttribute('data-id', doc.id);
//   mentalIllnessDB.textContent = doc.data().mentalIllnesses

  //li.appendChild(mentalIllnesses);

  //mentalIllnessDB.appendChild(li);
//}

//get mental illnesses from Firebase
function getMentalIllnessFromDB(mentalIllness) {
  return db
    .collection("mentalIllnesses")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.docs.forEach(doc => {
      console.log ("Document data:", doc.data());
      });
     });
}

console.log(getMentalIllnessFromDB("mentalIllnesses"));


//get service animals from Firebase
const serviceAnimals = db.collection("serviceAnimals");

function getserviceAnimalFromDB(serviceAnimal) {
  return db
    .collection("serviceAnimals")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.docs.forEach(doc => {
      state.Saresults.saFirestoredata.push(doc.data);
      console.log ("Document data:", doc.data());
      });
     });

}

//** functions to COMPARE Data
//*****************************
function compareTheData(mentalIllnessFromDropDown, saFirestoreData) {
  console.log("mentalIllnessFromDropDown= ", mentalIllnessFromDropDown);
  console.log("saFirestoreData = ", saFirestoreData);

  state.Saresults.comparedData = [];
  saFirestoreData.forEach(saFirestoreData => {
    mentalIllnessFromDropDown.DataList.forEach(dropDownItem => {
      if (saFirestoreData.mental_illness === dropDownItem.mentalIllnessFromDropDown) {
        let tempItem = dropDownItem;
        state.Saresults.comparedData.push(tempItem);
      }
    });
  });
    filterData(state.Saresults.comparedData);
    writeResults(state.Saresults.comparedData);
  };


// // ** FILTER according to drop-down choice
// // ***************************************
function filterData(serviceAnimal) {
  let filteredData = [];
  let mentalIllnessFromDropDown = document.querySelector("#mental_illness").value;


  state.Saresults.mental_illness.forEach(element => {
    if (element.mental_illness === mentalIllnessFromDropDown) {
        state.Saresults.filteredData.push(element);
    };
      });


console.log(getserviceAnimalFromDB("serviceAnimals"));

state.Saresults.filteredData = filteredData;
writeresults(state.Saresults.filteredData);
    };


