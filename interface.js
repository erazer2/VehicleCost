function showHydroCarbonSection(){
    document.getElementById('electricSection').style.display="none";
    document.getElementById('hydrocarbonSection').style.display="block";
    calculateHydroCarbonVehicleCost();
    document.getElementById('headingHydroCarbonButton').className="buttonHeadingSelected";
    document.getElementById('electricButton').className="electricButton";
    document.getElementById('hydroCarbonButton').className="hydroCarbonButtonSelected";
    
    document.getElementById('headingElectricButton').className="buttonHeadings";
    
    
    

}
function showElectricSection(){
    document.getElementById('electricSection').style.display="block";
    document.getElementById('hydrocarbonSection').style.display="none";
    
    calculateElectricVehicleCost();
      document.getElementById('headingElectricButton').className="buttonHeadingSelected";
    document.getElementById('headingHydroCarbonButton').className="buttonHeadings";
    document.getElementById('hydroCarbonButton').className="hydroCarbonButton";
    document.getElementById('electricButton').className="electricButtonSelected";
}

var currentMode=0;

function useNasStyle() {
  
  document.getElementById("styleToUse").href = "style.css";
  currentMode=1;
}

  function useBasicStyle() {
  
    document.getElementById("styleToUse").href = "simpleStyle.css";
    currentMode=0;
  }

function toggleTheStyle(){
 
console.log("switching style");

if (currentMode>0)
{
  useBasicStyle();

}
else {
  useNasStyle();
}

console.log(currentMode);
}