import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import { housesService } from "../Services/HousesService.js"

function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house => template += house.Template)
    console.log(template)
}
export default class HousesController{
    constructor(){
        console.log("houses controller")
    }
}