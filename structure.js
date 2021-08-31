

// const oneCounter = document.querySelector('.counter')
const counterDisplayFirst = document.querySelector('.counterDisplay')
const addSumar = document.querySelector('.add')
const restMenos = document.querySelector('.rest')

let count = 0;
updateCount()
addSumar.addEventListener('click', () => {
    count++
    updateCount()
});

restMenos.addEventListener('click', () => {
    count--
    console.log('count :',count);
    updateCount()
    console.log('upadte count :', updateCount());
    if(count === 0){
        updateCount = 0
    } 
})

function updateCount(){
    counterDisplayFirst.innerHTML = count
}