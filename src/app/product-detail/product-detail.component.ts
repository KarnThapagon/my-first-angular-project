import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  name:string;
  headers: string[] = ['Product Name', 'Description', 'Price'];
  products:any

  constructor(private router:Router){
    this.name = ''
    console.log('router ',this.router.getCurrentNavigation()?.extras.state?.['detail'])
    this.products = this.router.getCurrentNavigation()?.extras.state?.['detail']
    // console.log(this.products,typeof(this.products))
  }

  ngOnInit(): void {
   
  }
}
