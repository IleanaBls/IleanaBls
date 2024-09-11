function div400(year){
    if(year%400 == 0){
        return true
    }
    return false
}

function div100(year){
    if(year % 100 == 0 && year % 400 !== 0){
        return false
    }
    return true
}

function div4(year){
    if(year%4 == 0 && year%100 !== 0){
        return true
    }
    return false
}

function divis4(year){
    if(year%4 == 0){
        return true
    }
    return false
}

function main(year){
    if(!divis4(year)){
        return false
    }
   if(div400(year)){
        return true
    }
    if(div4(year)){
        return true
    }
    if(div100(year)){
        return false
    }

}

// console.log(main(1992));

module.exports = {
    div400,
    div100,
    div4,
    divis4
}