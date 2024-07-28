// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script. 

function remainder(a,b){
    return a%b
}

function muliplication(a,b){
    return a*b
}

export {
    remainder,
    muliplication
}
