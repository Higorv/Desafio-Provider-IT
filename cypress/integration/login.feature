Feature: Login site VR

    Background: Acessar o site do VR
        Given acesso o site do VR

    @testeum
    Scenario: Visualizar mapa do Google
        When acesso a pagina do VR
        Then devo validar que o mapa do Google abriu em tela