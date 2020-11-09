function dwarfRollCall(dwarves) {
var arr =[] 
for (let i=0; i<dwarves.length; i++){ 
  arr.push(`${[i+1]}. ${dwarves[i]}`) 
}
    return `${arr.join(' ')} `
}

function summonCaptainPlanet(planeteerCalls){
  var calls = planeteerCalls.join(' ') 
  var captialize = calls.toUpperCase()
  var captialCalls = captialize.split(' ') 
  var finalArr = [] 
  for (let i=0; i<captialCalls.length; i++){
    finalArr.push(`${captialCalls[i]}!`) 
  }
     return finalArr
}

function longPlaneteerCalls(words) { 
for (let i=0; i<words.length; i++){
  if(words.length > 4){
    return true 
  }else{
    return false
  }
}
}

function findTheCheese (foods) {
  for (let i=0; i<foods.length; i++){
    if (foods[i]=== 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembret'){
      return foods[i] 
    }
  }
 return 'no cheese!' 
}
