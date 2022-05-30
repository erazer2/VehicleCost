

let calculateElectricVehicleCost=()=>{
    console.log("calculating");
        capacity=document.getElementById("batteryCapacity").value;
        range=document.getElementById("batteryRange").value;
        electricCost=document.getElementById("electricityCost").value;
    
        calculations=(capacity*electricCost/range).toFixed(2);
    
        document.getElementById("costPerMile").innerHTML="This will cost you "+ calculations +" Pence per mile you drive";
    console.log("calculated");
    }


    let calculateHydroCarbonVehicleCost=()=>{
        console.log("calculating");
        var litersPerGallon=4.54;

            consumptionRate=document.getElementById("milesPerGallon").value;
            
            fuelCost=document.getElementById("hydrocarbonCost").value;
        
            calculations=(fuelCost*litersPerGallon/consumptionRate).toFixed(2);
        
            document.getElementById("costPerMile").innerHTML="This will cost you "+ calculations +" Pence per mile you drive";
            console.log(calculations);
        console.log("calculated");
        }