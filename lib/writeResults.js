const writeResults = (printableData, illness) => {
  const illnessData = printableData.filter((curr) => 
    curr.Mental_Illness.includes(illness)
 );
let htmlString = "";
  if (illnessData.length > 0) {
    illnessData.forEach((element) => {
      console.log(element);
      htmlString += `<div style="font-family:'Roboto', sans-serif">
        <p><b>Type:</b> ${element.Type}</p>
        <p><b>Mental Illness:</b> ${element.Mental_Illness.join(", ")}</p>
        <p><b>Traits:</b> ${element.Trait}</p>
        <p><b>URL:</b> <a target="_blank" rel="noopener" href=${element.URL}>${element.URL}</a></p>
        <br/>
        </div>`;
    });
    return htmlString;
  } else {
    return `
      <div style="font-family:'Roboto', sans-serif">
      Please choose a mental illness from the drop-down above to see which animals will be most supportive for that particular illness.
        </div>`
  } 
  };

export { writeResults };


