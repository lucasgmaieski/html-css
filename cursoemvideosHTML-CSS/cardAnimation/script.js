const  tenis1 = document.querySelector('#tenis-1')
const  tenis2 = document.querySelector('#tenis-2')

const setaRigth = document.querySelector('#right')
const setaLeft = document.querySelector('#left')

setaLeft.addEventListener('click', () => {
    tenis1.style.left = "650px";
    tenis2.style.left = "-50px";
})
setaRigth.addEventListener('click', () => {
    tenis1.style.left = "-50px";
    tenis2.style.left = "-650px";
})