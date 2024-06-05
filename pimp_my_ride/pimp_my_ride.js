const tripToParse = ["Roger 0 5 10",
"Pongo 3 7 14",
"Perdita 8 10 8",
"Anita 16 3 7"]

console.table(tripToParse)



//permet de spliter et stocker les données de la variable dans un object
function splitTrip(trip){
    let tabtrip = trip.split(" ");
    let client = tabtrip[0];
    let start = tabtrip[1];
    let duration = tabtrip[2];
    let price = tabtrip[3];
    return {client, start: parseInt(start), duration: parseInt(duration), price: parseInt(price)}
}


//appelle la fonction splitTrip
function parseTrips(trips){
    const tableau = []
    for(let i = 0; i < trips.length; i++){
        const parsedTrip = splitTrip(trips[i])
        tableau.push(parsedTrip)
    }
    return tableau 

}
 console.log(parseTrips(tripToParse))

 let trip = parseTrips(tripToParse);
 
 //additionne tous les prix    
function getTripsPrice(voyages){
    let totalprix = 0
    for( let i = 0 ; i < voyages.length ; i++){
        totalprix += voyages[i].price
    }
    return totalprix
}
//console.log(getTripsPrice(trip))
//compare l'heure d'arrivee du 1er voyage avec l'heure de depart du second pour verifer la compatibilité
function checkCompatibility(tripA, tripB){
    let tripAarrivee = tripA.start + tripA.duration
    if (tripAarrivee < tripB.start){
        return true
    } else
        return false
}
//console.log(checkCompatibility(trip[0],trip[1]))







