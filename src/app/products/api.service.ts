import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to share stream of data
  searchkey=new BehaviorSubject('')

  constructor(private http:HttpClient) {   }

  getAllProducts(){
    return this.http.get('http://localhost:3005/all-products') //products json data
  }
  //Add to Wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,                          
    title:product.title,
    price:product.price,
    description:product.description,
    image:product.image,
   
    }

    return this.http.post('http://localhost:3005/addtowishlist',body) 

  }


  //get wishlist
  getwishlist(){
    return this.http.get('http://localhost:3005/getwishlist') //products json data

  }

  //delete wishlist
  deletewish(id:any){
    return this.http.delete('http://localhost:3005/deletewish/'+id)

  }


}
