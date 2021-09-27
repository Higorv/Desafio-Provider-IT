/* global Given, Then, When */

import Page from '../pageobjects/Page'
const Page = new Page

Given("acesso o site do VR", () => {
    Page.acessarSite();
})

When("acesso a pagina do VR", () => {
    Page.clicarSecaoPraVoce();
    Page.clicarBotaoOndeUsarVR();
})

Then("devo validar que o mapa do Google abriu em tela", () => {
    Page.visualizarMapaGoogle();
})