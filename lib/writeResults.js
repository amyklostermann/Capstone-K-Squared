const writeResults = (printableData) => {
  let htmlString = "";

  if (printableData.length > 0) {
    printableData.forEach((element) => {
      console.log(element);
      htmlString += `<div>
        <p>Type: ${element.Type}</p>
        <p>Mental Illness: ${element.Mental_Illness},</p>
        <p>Traits: ${element.Trait}</p>
        <p>URL: ${element.URL}</p>
        <br/>
        </div>`;
    });
    return htmlString;
  } else {
    console.log("Error in writeResults function");
    alert("Nothing to print");
    return `
	   <div>
	       There seems to be no data for this search. We are very sorry. Please try a different search combination.
	     </div>
    `;
  }
};

export { writeResults };
