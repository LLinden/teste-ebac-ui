/// <reference types="cypress" />

describe("Funcionalidade Página de Produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
      //.first()
      //.eq(3)
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
  });

  it.only("Deve adicionar um produto ao carrinho", () => {
    let quantidade = 2;

    cy.get('[class="product-block grid"]')
      .contains("Arcadio Gym Short")
      .click();
    cy.get(".button-variable-item-32").click();
    cy.get(".button-variable-item-Black").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get('.dropdown-toggle > .mini-cart-items').should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade + " × “Arcadio Gym Short” foram adicionados no seu carrinho."
    );
  });
});
