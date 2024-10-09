function hideElementById(elementId){
    const element = document.getElementById(elementId)
    console.log(element)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    console.log(element)
    element.classList.remove('hidden')
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1DD100]')
}
function removeBackGroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-[#1DD100]')
}

function cursorAllowed(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('cursor-not-allowed')
}
function cursorNotAllowed(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('cursor-not-allowed')
}

function enableBtn(elementId) {
    document.getElementById(elementId).disabled = false;
}