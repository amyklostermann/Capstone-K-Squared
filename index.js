// "root" index.js
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
//import "./env";
import { auth, db } from "./firebase"

const router = new Navigo(location.origin);

//mental illnesses from Firebase
const coll = db.collection("mental_Illnesses");

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

  //addPicOnFormSubmit(st);
};

render(state.Home);

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});


//FUNCTION: GET MENTAL ILLINESSES FROM FIREBASE
function getMentalIllnessFromDB(mentalIllness) {
  db.collection("mental_Illnesses")
       .get()
      .then(snapshot =>
        snapshot.docs.forEach(doc => {
          if (url === doc.data().url) {
            let id = doc.id;
            db.collection("mental_Illnesses")
            .doc(type)
            return coll;
          }
        }
        )
      )
};


