

document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1


})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector('#compoundInvestment')
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2
})

// window.divNode = document.querySelector('#circle-bw')
document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
    var shapeDiv = document.querySelector('#circle-bw')
    if(shapeDiv.style.backgroundColor !== 'black') {
        return shapeDiv.style.backgroundColor = 'black'
    }else {
        return shapeDiv.style.backgroundColor = 'white'
    }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})