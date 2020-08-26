// "root" index.js
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { auth, db } from "./firebase";

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

  addPicOnFormSubmit(st);
}

function addPicOnFormSubmit(st) {
  if (st.page === "Register") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      let inputList = event.target.elements;
      console.log(inputList[0].value);
      let newPicObject = {
        title: inputList[1].value,
        url: inputList[0].value
      };
      state.Gallery.pictures.push(newPicObject);
      render(state.Gallery);
    });
  }
}

render(state.Home);

//FUNCTION: GET MENTAL ILLINESSES FROM FIREBASE
function getMentalIllnessFromDB(mentalIllness) {
  return db
    .collection("mental_Illnesses")
    .get()
    // .then(snapshot =>
    //  snapshot.forEach(doc => {
    //    if ( url === doc.data().url)
    //  };
};


// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});



// get data from an API endpoint (Recording from 8/4; Lesson 8.3)
// axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     state.Blog.posts = response.data;
//     if (router.lastRouteResolved().params) {
//       const currentPage = router.lastRouteResolved().params.page;
//       render(state[currentPage]);
//       }
//     });
