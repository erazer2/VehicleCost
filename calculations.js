

let calculateElectricVehicleCost=()=>{
    console.log("calculating");
        capacity=document.getElementById("batteryCapacity").value;
        range=document.getElementById("batteryRange").value;
        electricCost=document.getElementById("electricityCost").value;
    
        calculations=(capacity*electricCost/range);
    
        document.getElementById("costPerMile").innerHTML="Costs "+ calculations +" pence per mile";
    console.log("calculated");
    }


    let calculateHydroCarbonVehicleCost=()=>{
        console.log("calculating");
        var litersPerGallon=4.54;

            consumptionRate=document.getElementById("milesPerGallon").value;
            
            fuelCost=document.getElementById("hydrocarbonCost").value;
        
            calculations=(fuelCost*litersPerGallon/consumptionRate);
        
            document.getElementById("costPerMile").innerHTML="Costs "+ calculations +" pence per mile";
            console.log(calculations);
        console.log("calculated");
        }