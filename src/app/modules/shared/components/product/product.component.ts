import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() item: Product
  @Input() type: "trend" | "product" | "cart" | "recent" = "trend"

  constructor() { }

  ngOnInit() { }

}
