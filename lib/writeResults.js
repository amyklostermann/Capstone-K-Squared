export default function writeResults(printableData) {

let container = document.querySelector("#container");

let htmlString = "";

if (printableData.length >= 1) {
   let i = 0;
    printableData.forEach(element => {
      i++;
      htmlString += `<div>
        Type: ${element.type},
        Mental Illness: ${element.mental_illness},
        Traits: ${element.trait},
        URL: ${element.url}
        </div>`;
    });

   // console.log(printableData);
return(printableData);
container.innerHTML = htmlString;
};
//else {
   // console.log("Error in writeResults function");
   // alert("Nothing to print");
    //return `
	  //  <div>
	    //    There seems to be no data for this search. We are very sorry. Please try a different search combination.
	    //  </div>
};
