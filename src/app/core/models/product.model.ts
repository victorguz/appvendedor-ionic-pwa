export interface Product {
  id: number
  name: string
  productImage: string
  categoryImage: string
  totalStock: number
  normalPrice: number,
  promoPrice: number
  selectedQuantity?: number
}

