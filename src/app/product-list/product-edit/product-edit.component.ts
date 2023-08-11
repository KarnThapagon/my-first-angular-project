import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  searchInput:string = '';

  @Output() searchCreated = new EventEmitter<string>();

  constructor(){
   
  }
  ngOnInit(): void {

  }
  onSearch(){
    this.searchCreated.emit(this.searchInput);
  }
}
