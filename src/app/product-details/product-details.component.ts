import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";
import { inject } from "@angular/core/testing";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Seu produto foi adicionado ao carrinho!");
  }

  ngOnInit() {
    // pega o produto id da rota atual.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // procura o produto que corresponde ao id dado na rota.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
