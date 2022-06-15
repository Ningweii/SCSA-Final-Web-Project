let addEduBtn = document.getElementById('addEduBtn')
let counter = 1

addEduBtn.onclick = function(){
    counter += 1

    let addEducationTextArea = document.createElement('textarea')
    addEducationTextArea.setAttribute('rows', '5')
    addEducationTextArea.setAttribute('cols', '20')
    addEducationTextArea.setAttribute('maxlength', '140')
    addEducationTextArea.setAttribute('placeholder', 'კიდევ გვითხარი, რა განათლება გაქვს, გეთაყვა...')
    addEducationTextArea.style.borderRadius = '5px'
    addEducationTextArea.style.marginTop = '5px'
    addEducationTextArea.style.marginBottom = '5px'
    addEducationTextArea.style.boxShadow = '0px 0px 10px 2px black'

    let newLabel = document.createElement('label')
    newLabel.innerText = 'განათლება ' + counter
    
    newLabel.setAttribute('for', 'education' + counter)
    addEducationTextArea.id = 'education' + counter
    
    let addEducationDiv = document.getElementById('addEducationDiv')
    addEducationDiv.append(newLabel, addEducationTextArea)
    addEducationDiv.style.display = "flex"
    addEducationDiv.style.flexDirection = "column"

    newLabel.style.fontWeight = "bolder"

    

    



}

