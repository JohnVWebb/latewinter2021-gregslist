export default class House{
    constructor({bathrooms, bedrooms, description, imgUrl, levels, price, year, _id, id}){
      this.bathrooms = bathrooms
      this.bedrooms = bedrooms
      this.description = description
      this.imgUrl = imgUrl
      this.levels = levels
      this.price = price
      this.year = year
      this.id = _id || id
    }
    
    get Template(){
      return /*html*/`<div class="card col-2">
      <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.deleteCar('${this.id}')" aria-hidden="true"></i>
      <img class="card-img-top" src="${this.imgUrl}" alt="">
      <div class="card-body">
          <h4 class="card-title">${this.year} ${this.bedrooms} - ${this.bathrooms}</h4>
          <p class="card-text">${this.description}</p>
          <p>Price: ${this.price}</p>
          <button class="btn btn-success" onclick="app.HousesController.bid('${this.id}')">Bid</button>
      </div>
    </div>`
    }
    
    }