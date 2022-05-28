function showHydroCarbonSection(){
    document.getElementById('electricSection').style.display="none";
    document.getElementById('hydrocarbonSection').style.display="block";
    calculateHydroCarbonVehicleCost();

}
function showElectricSection(){
    document.getElementById('electricSection').style.display="block";
    document.getElementById('hydrocarbonSection').style.display="none";
    
    calculateElectricVehicleCost();

}