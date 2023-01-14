import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  wishlist: any;
  emsg:string=''
  
  constructor(private api:ApiService,private router:Router){}
  
  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.Products;
        if(this.wishlist.length==0){
          this.emsg="Empty wishlist"
        }
        
      },
      //client error
      (data:any)=>{
        this.emsg=data.error.message
      }
      
    )
  }

  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        // this.router.navigateByUrl('wishlist')
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )

  }


}
