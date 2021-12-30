import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products: Product[] = [
    { id: 20394753, name: "Sofá 3 Puestos Chester", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/sofa.svg", totalStock: 4, normalPrice: 1834540, promoPrice: 1725000, selectedQuantity: 3 },
    { id: 20394750, name: "Combo Somier + Colchón Individual", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/cama.svg", totalStock: 2, normalPrice: 834540, promoPrice: 725000, selectedQuantity: 2 },
    { id: 20394751, name: "Repisa Wengué", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/estanteria.svg", totalStock: 1, normalPrice: 324540, promoPrice: 254000, selectedQuantity: 1 },
    { id: 20394754, name: "Combo Escritorio Wengué + Silla Oficina", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/mesa.svg", totalStock: 1, normalPrice: 635540, promoPrice: 535540, selectedQuantity: 4 },
    { id: 20394752, name: "Sofá 2 Puestos Chester", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/sofa.svg", totalStock: 4, normalPrice: 1834540, promoPrice: 1725000, selectedQuantity: 23 },
    { id: 20394756, name: "Combo Somier + Colchón Doble", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/cama.svg", totalStock: 2, normalPrice: 834540, promoPrice: 725000, selectedQuantity: 7 },
    { id: 20394755, name: "Cómoda Blanca", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/estanteria.svg", totalStock: 1, normalPrice: 224540, promoPrice: 154000, selectedQuantity: 4 },
    { id: 20394759, name: "Silla Oficina", productImage: "https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiMTE5Mzg5LzExOTM4OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MDAsImhlaWdodCI6MTUwMCwiZml0IjoiY29udGFpbiJ9fX0=", categoryImage: "/assets/icon/categories/mesa.svg", totalStock: 1, normalPrice: 135540, promoPrice: 130540, selectedQuantity: 1 },
  ]

  cuotas = [2, 3, 4, 6, 9, 12, 18, 24, 28, 32, 36, 40]
  convenios = ["Convenio #1", "Convenio #2", "Convenio #3", "Convenio #4", "Convenio #5",]
  selectedCuotas = []

  constructor() { }

  ngOnInit() {
  }

  selectCuota(cuota: number) {
    if (this.selectedCuotas.includes(cuota)) {
      this.selectedCuotas = this.selectedCuotas.filter(val => { return val != cuota })
    } else {
      this.selectedCuotas.push(cuota)
    }
  }

  getTotal(type: "normal" | "promo") {
    let total = 0
    switch (type) {
      case "normal": this.products.forEach(item => total += item.normalPrice); return total
      case "promo": this.products.forEach(item => total += item.promoPrice); return total
      default: throw new Error("Opción incorrecta");
    }
  }

}
