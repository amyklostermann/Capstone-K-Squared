// "root" index.js
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import "./env";
import { auth, db } from "./firebase";
import { writeResults } from "./lib/writeResults";

const router = new Navigo(location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let routeEntered = params.page;
      let formattedRoute = capitalize(routeEntered);
      let pieceOfState = state[formattedRoute];
      render(pieceOfState);
    },
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;

  if (st.page === "Suicide") {
    // function of query selectors for suicide page
    getserviceAnimalFromDB();
  }
  router.updatePageLinks();
}

function suicideQuerySelectors(state, illness) {
  const suicidePage = document.getElementById("idk");
  suicidePage.innerHTML = writeResults(state.Saresults.saFirestoreData, illness);
}

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

//get mental illnesses from Firebase
function getMentalIllnessFromDB(mentalIllness) {
  return db
    .collection("mentalIllnesses")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
      });
    });
}

console.log(getMentalIllnessFromDB("mentalIllnesses"));

//get service animals from Firebase
const serviceAnimals = db.collection("serviceAnimals");

function getserviceAnimalFromDB() {
  return db
    .collection("serviceAnimals")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        console.log(doc, "doc");
        state.Saresults.saFirestoreData.push(doc.data());
        console.log("Document data:", doc.data());
      });
    })
    .then(() => suicideQuerySelectors(state))
    .then(() => document
        .querySelector("#mental_illness")
        .addEventListener("change", (event) => {
          suicideQuerySelectors(state, event.target.value)
        })
    );
    }
