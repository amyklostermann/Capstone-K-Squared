//***  Get the Serive Animal Data from Firestore ***
import * as state from "../store";
import { auth, db } from "./firebase";
// Constant for Firebase Firestorm DB
const coll = db.collection("serviceAnimals");

export default function getfirestoredata() {
  state.Saresults.saFirestoreData = [];
  coll
    .get()
    .then(snapshot =>
      snapshot.docs.forEach(doc => {
        state.Saresults.saFirestoreData.push(doc.data());
      })
    )
    .catch(err => {
      console.log(
        "The Firestorm load request failed!"
      );
      console.log("error", err);
    });
}
