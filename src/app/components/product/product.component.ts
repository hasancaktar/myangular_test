import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  product1 = {productId: 1, productName: "telefon", categoryId:1, unitPrice:5}
  product2 = {productId: 2, productName: "mouse", categoryId:2, unitPrice:45}
  product3 = {productId: 3, productName: "kasa", categoryId:3, unitPrice:57}
  product4 = {productId: 4, productName: "keyboard", categoryId:2, unitPrice:25}
  product5 = {productId: 5, productName: "masa", categoryId:4, unitPrice:50}

  products = [this.product1,this.product2,this.product3,this.product4,this.product5]




  constructor() { }

  ngOnInit(): void {
  }

}
