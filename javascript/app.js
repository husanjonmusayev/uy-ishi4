let btn = document.getElementById('btn')
let name = document.querySelector('#name')
let age = document.querySelector('#age')
let car = document.querySelector('#car')
let des = document.querySelector('#description')
let tbody = document.getElementById('tbody')

function validate() {
    if (!name.value) {
        name.focus()
        name.style.outlineColor = 'red'
        return false
    } else {
        name.style.outlineColor = 'blueviolet'
    }

    if (!age.value) {
        age.focus()
        age.style.outlineColor = 'red'
        return false

    } else {
        age.style.outlineColor = 'blueviolet'
    }
    if (age.value > 150 || age.value <= 0) {
        age.focus()
        age.style.outlineColor = 'red'
        return false
    }

    if (!car.value) {
        car.focus()
        car.style.outlineColor = 'red'
        return false
    } else {
        car.style.outlineColor = "blueviolet"
    }

    if (!des.value) {
        des.focus()
        des.style.outlineColor = 'red'
    } else {
        des.style.outlineColor = 'blueviolet'
    }
    return true
}

function clear(){
name.value = ''
age.value = ''
car.value = ''
des.value = ''
}
function creatRow (user, index){
const tr = document.createElement('tr')

const tdNo = document.createElement('td')
tdNo.innerHTML = index


const tdName = document.createElement('td')
tdName.innerHTML = user.name

const tdAge = document.createElement('td')
tdAge.innerHTML = user.age 


const tdCar = document.createElement('td')
tdName.innerHTML = user.car

const tdDes = document.createElement('td')
tdName.innerHTML = user.des

tr.appendChild(tdNo);
tr.appendChild(tdName);
tr.appendChild(tdAge);
tr.appendChild(tdCar);
tr.appendChild(tdDes );


return tr
}

btn && btn.addEventListener('click', function () {
    if (validate()) {
        let user = {
            name: name.value,
            age: age.value,
            car: car.value,
            des: des.value
        }
        
        let datalocalStorg = [];
        if(localStorage.getItem('user')){
        datalocalStorg = JSON.parse(localStorage.getItem('user'))
        }
        datalocalStorg.push('user');
        localStorage.setItem('user', datalocalStorg)
        clear()
    }

})
document.addEventListener("DOMContentLoaded", function(){
    let data = [];
    if(localStorage.getItem(user)){
        data = JSON.parse(localStorage.getItem('user'))
    }


    if(data.length && tbody){
     data.forEach((element, index) => {
          const  tr = creatRow(element, index + 1 )
          tbody.appendChild(tr)  
        });
    }
})