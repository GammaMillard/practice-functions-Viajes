import { carInsurance, cityChoice, numberOfDays, carAmount } from "./utilities/functions.js"

const span = document.querySelector('.total')
const form = document.querySelector('.form')

/* Hemos hecho un programa para calcular el precio total de un paquete de viajes, pero se ha borrado el
archivo donde estaban definidas. 
El archivo esta dentro de ./utilities/functions.js
*/



const handleSubmit = (e) => {
    e.preventDefault()

//    Este es el objeto que reciben todas las funciones
   
    const data = {
        city: e.target.city.value,
        days: e.target.days.value,
        car: e.target.car.value,
        insurance: e.target.insurance.value,
    }


//   Estas variables guardan los resultados de las funciones.
    
    const daysPrice = numberOfDays(data)
    const carPrice = carAmount(data)
    const insurancePrice = carInsurance(data)
    const cityPrice = cityChoice(data)

    span.innerText = daysPrice + carPrice + insurancePrice + cityPrice

 



}

form.addEventListener('submit', handleSubmit)







