import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail2',
  templateUrl: './product-detail2.component.html',
  styleUrls: ['./product-detail2.component.css']
})
export class ProductDetail2Component implements OnInit {

  idProduct:any
selectedProduct:any
productName:string 
productDescription:string
productImage:string[]
productPrice:number
productRating:number
headers: string[] = ['Product Name', 'Description', 'Price', 'Rating'];


  constructor(private route : ActivatedRoute, private httpClient:HttpClient){
    this.productName = ''
    this.productDescription = ''
    this.productImage = []
    this.productPrice = 0
    this.productRating = 0
  }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    console.log(this.idProduct)
    
    this.getProductDetail();
  }

  getProductDetail(){
    this.httpClient.get(`https://dummyjson.com/products/${this.idProduct}`).subscribe((result:any)=>{
      this.selectedProduct = result;
      console.log(result)
      this.productName = this.selectedProduct.title
      this.productDescription = this.selectedProduct.description
      this.productImage = this.selectedProduct.images
      this.productPrice = this.selectedProduct.price
      this.productRating = this.selectedProduct.rating
      // สำหรับหาเฉพาะคำที่ search
    })
  }
}
