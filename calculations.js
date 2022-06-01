var litersPerGallon=4.54;
var gramsCO2PerLitreDiesel=2640;

let calculateElectricVehicleCost=()=>{
    console.log("calculating");

    gallonsFuelPerKWhrFromPowerPlant=0.08;//gallons petroleum per kwhr
    carbonDioxiderPerKWhrFromPowerPlant=gallonsFuelPerKWhrFromPowerPlant*litersPerGallon*gramsCO2PerLitreDiesel;
    
        capacity=document.getElementById("batteryCapacity").value;
        range=document.getElementById("batteryRange").value;
        electricCost=document.getElementById("electricityCost").value;
    kiloWattsPerMile=capacity/range;
    electricityCO2PerMile=(carbonDioxiderPerKWhrFromPowerPlant*kiloWattsPerMile).toFixed(0);
        calculations=(kiloWattsPerMile*electricCost).toFixed(2);
    
        document.getElementById("costPerMile").innerHTML="This will cost you "+ calculations +" Pence per mile you drive."+"The power station providing the electricity generates at least "+electricityCO2PerMile+"grams carbon dioxide per mile";
    console.log("calculated");


    }


    let calculateHydroCarbonVehicleCost=()=>{
        console.log("calculating");
        

        consumptionRate=document.getElementById("milesPerGallon").value;
            milesPerLitre=consumptionRate/litersPerGallon;
            fuelCost=document.getElementById("hydrocarbonCost").value;

        //diesel is c12h23
        var carbonAtomicMass=12;
        var hydrogenAtomicMass=1;
        var oxygenAtomicMass=16;
        var carbonsInFuel=12;        
        var hydrogensInFuel=23;
        var fuelDensity=850.8;//grams per litre for diesel
        var carbonsInCarbonDioxide=1;
        var oxygensInCarbonDioxide=2;
        
        carbonDioxideMolecularMass=carbonAtomicMass+(2*oxygenAtomicMass);
        carbonsInFuelMass=carbonsInFuel*carbonAtomicMass;
        fuelMolecularMass=(hydrogensInFuel*hydrogenAtomicMass)+carbonsInFuelMass;
        
        fuelCarbonPercentage=carbonsInFuelMass/fuelMolecularMass;
        gramsCarbonPerLitreFuel=fuelDensity*fuelCarbonPercentage;
        carbonsPerLitre=gramsCarbonPerLitreFuel/carbonsInFuel;
        carbonDioxidePerLitreGenerated=(carbonsPerLitre*carbonAtomicMass)+(carbonsPerLitre*(oxygensInCarbonDioxide*oxygenAtomicMass))
        gramsCarbonDioxidePerMile=carbonDioxidePerLitreGenerated/milesPerLitre;

        
        
            calculations=(fuelCost/milesPerLitre).toFixed(2);
        
            document.getElementById("costPerMile").innerHTML="This will cost you "+ calculations +" Pence per mile you drive."+"You emit "+gramsCarbonDioxidePerMile.toFixed(0)+"grams of carbon dioxide per mile using diesel.";
            console.log(calculations);
        console.log("calculated");
        }

