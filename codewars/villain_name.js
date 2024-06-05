const monthFirstName = {
    "January" : "The Evil",
    "February" : "The Vile",
    "March" : "The Cruel",
    "April" : "The Trashy",
    "May" : "The Despicable",
    "June" : "The Embarrassing",
    "July" : "The Disreputable",
    "August" : "The Atrocious",
    "September" : "The Twirling",
    "October" : "The Orange",
    "November" : "The Terrifying",
    "December" : "The Awkward"
}

console.table(monthFirstName)

const dateLastName = {
    0 : "Mustache",
    1 : "Pickle",
    2 : "Hood Ornament",
    3 : "Raisin",
    4 : "Recycling Bin",
    5 : "Potato",
    6 : "Tomato",
    7 : "House Cat",
    8 : "Teaspoon",
    9 : "Laundry Basket"
}

function villainName(a, b){
    let firstName = monthFirstName[a]
    let lastName = dateLastName[b]
    let name = firstName + " " + lastName
    return name 

    }
    console.log(villainName("January", "6"))

