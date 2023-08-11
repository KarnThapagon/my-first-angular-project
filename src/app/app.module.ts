import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-list/product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { ProductRequestModule } from './product-request/product-request.module';
import { FooterComponent } from './footer/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductDetail2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProductRequestModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      [
        {path:'',component:ProductListComponent},
        {path:'product-detail',component:ProductDetailComponent},
        {path:'product/:id',component:ProductDetail2Component}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
