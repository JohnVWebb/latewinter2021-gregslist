import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService{
  constructor(){
    console.log("houses service")
    this.getHouses()
  }
  
  async getHouses(){
    try {
     const res = await api.get('houses')
     //console.log(res.data)
     ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
     console.log(ProxyState.houses)
    } catch (error) {
      
    }
  }

  async createHouse(rawHouse){
    try {
      await api.post('houses', rawHouse)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()