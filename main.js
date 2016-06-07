

document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1


})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.querySelector('#compoundInvestment')
  var value = pNode.textContent
  pNode.textContent = parseInt(value) * 2
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var shapeNode = document.querySelector('#circle-bw')
    if(shapeNode.style.backgroundColor !== 'black') {
        return shapeNode.style.backgroundColor = 'black'
    }else {
        return shapeNode.style.backgroundColor = 'white'
    }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var shapeNode = document.querySelector('.answer-box > .circle-red')
  var computedStyle = window.getComputedStyle(shapeNode)
  var intWidth = parseInt(computedStyle.width)
  var intHeight = parseInt(computedStyle.height)
  if(intWidth < 320 && intHeight < 320) {
    shapeNode.style.width = (intWidth * 2) + 'px'
    shapeNode.style.height = (intHeight * 2) + 'px'
  } else {
    shapeNode.style.width = '40px'
    shapeNode.style.height = '40px'
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var ulNode = document.querySelector('#userList')
  var liNodes = ulNode.querySelectorAll('li')

  for(var i = 0; i < liNodes.length; i ++) {
    var liNode = liNodes[i]
    if(liNode.classList.contains('inactive')) {
        ulNode.removeChild(liNode)
    }
  }
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