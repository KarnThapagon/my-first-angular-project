import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  headers: string[] = ['Product Name', 'Description', 'Image', 'Price', 'Detail'];

  //TODO Type ในการประกาศสำคัญ 
  products:any[] // list เริ่มต้นเห็บข้อมูลทุกตัว
  productSearch:string // string เก็บคำที่รับมาจาก search ของ product-edit
  productsCategory:any[] //list เก็บข้อมูลของคำ search category

   //TODO Pagination
   page:number = 1;
   count:number = 0;
   tableSize: number = 10;
   tableSizes:number[] = [];
  
  constructor(private httpClient:HttpClient, private router:Router){
    this.products =[]
    this.productSearch = ''
    this.productsCategory = []
  }

  ngOnInit(): void {
    this.getProductList();
    this.onSearchedProduct('');
  }

  getProductList(){
    this.httpClient.get('https://dummyjson.com/products').subscribe((result:any)=>{
      console.log('result',result);
      this.products = result.products;
      console.log('products -> ',this.products)
      // สำหรับหาเฉพาะคำที่ search
    })
  }

  onSearchedProduct(product:string){
    console.log('ส่งมาแล้วจ้า',product)
    this.productSearch = product
    this.httpClient.get(`https://dummyjson.com/products/search?q=${this.productSearch}`).subscribe((result:any)=>{
      this.productsCategory = result.products
      if(this.productsCategory.length == 0){
        alert(`Can't find  ${product} on this website`)
      }
    })
  }

  //TODO Pagination function 

  onTableDataChange(event:any){
    this.page = event
    this.getProductList()
  }
 

}
