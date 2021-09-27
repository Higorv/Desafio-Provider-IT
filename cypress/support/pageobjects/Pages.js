// <reference types="Cypress" />

import Elements from '../elements/Elements'
const Elements = new Elements
const url = Cypress.config("baseUrl")

class Page {
    // Acessa o site do VR
    acessarSite() {
        cy.visit(url)
    }

    // Clica na seção "Pra Você"
    clicarSecaoPraVoce() {
        cy.get(Elements.botaoPraVoce()).click()
    }

    // Clica no botão “Onde usar meu cartão VR”
    clicarBotaoOndeUsarVR() {
        cy.get(Elements.botaoOndeUsarCartaoVR()).click()
    }

     //Validar se o mapa do Google abriu
    visualizarMapaGoogle() {
        cy.get(Elements.mapaGoogle()).should('contain', 'Digite o nome ou endereço de um lugar')
    }
}

export default Page;
