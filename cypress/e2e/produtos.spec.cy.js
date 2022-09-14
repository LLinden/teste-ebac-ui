/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

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
    cy.get('[class="product-block grid"]')
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type("2")

  });
});
