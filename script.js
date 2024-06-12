function addValue(number){
    let resultBox = document.getElementById('result')
    resultBox.value +=   number 
}

function clearValue(){
    document.getElementById('result').value = ''
}

function calculate(){
    let eqn = document.getElementById('result').value
    let result = eval(eqn)
    document.getElementById('result').value = result
}

function deleteValue(){
    let eqn = document.getElementById('result').value
    let newEqn = eqn.substring(0, eqn.length - 1)
    document.getElementById('result').value = newEqn
}