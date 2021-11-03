import React, { useState } from "react";
import { MainGrid } from "../src/components/MainGrid/index.js";
import { Sidebar } from "../src/components/Sidebar/index.js";

export default function ListagemPeixe() {
    const [ listaPeixesAtt, setPeixes ] = React.useState([]); //TODO
    return (
        <MainGrid>
            <Sidebar />

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const listaPeixes = [
                        {especie: "Acará-Bandeira", phI: 6, phF: 7, tempI: 24, tempF: 28, tamanho: 15},
                        {especie: "Acará-Disco", phI: 6.6, phF: 7, tempI: 24, tempF: 28, tamanho: 15},
                        {especie: "Abelhinha", phI: 7, phF: 8, tempI: 20, tempF: 26, tamanho: 4},
                        {especie: "Bala Shark", phI: 6.8, phF: 7, tempI: 23, tempF: 26, tamanho: 36},
                        {especie: "Barbo Ouro", phI: 6.4, phF: 7.4, tempI: 24, tempF: 28, tamanho: 8},
                        {especie: "Barbo Sumatra", phI: 6.8, phF: 7.8, tempI: 22, tempF: 28, tamanho: 7},
                        {especie: "Betta", phI: 6.8, phF: 7.2, tempI: 24, tempF: 28, tamanho: 7},
                        {especie: "Borboleta", phI: 6.3, phF: 6.8, tempI: 23, tempF: 30, tamanho: 6},
                        {especie: "Botia Palhaço", phI: 6.8, phF: 7, tempI: 24, tempF: 30, tamanho: 30},
                        {especie: "Camarão Red ou Blue", phI: 6.3, phF: 7.4, tempI: 18, tempF: 28, tamanho: 1.5},
                        {especie: "Cascudo", phI: 5.8, phF: 7.5, tempI: 24, tempF: 29, tamanho: 30},
                        {especie: "Chilodus", phI: 5, phF: 7.2, tempI: 24, tempF: 30, tamanho: 8},
                        {especie: "Cobrinha Kuhli", phI: 5, phF: 7.2, tempI: 24, tempF: 30, tamanho: 10},
                        {especie: "Coliza Azul", phI: 6, phF: 7.4, tempI: 23, tempF: 28, tamanho: 7},
                        {especie: "Comedor de Algas", phI: 6.5, phF: 7.5, tempI: 24, tempF: 28, tamanho: 25},
                        {especie: "Corydora", phI: 6.8, phF: 7.2, tempI: 20, tempF: 28, tamanho: 8},
                        {especie: "Cruzeiro do Sul", phI: 6.8, phF: 7.2, tempI: 23, tempF: 27, tamanho: 16},
                        {especie: "Danio", phI: 6.4, phF: 7.4, tempI: 20, tempF: 26, tamanho: 12},
                        {especie: "Espadinha", phI: 7.2, phF: 7.8, tempI: 22, tempF: 28, tamanho: 11},
                        {especie: "Jacundá", phI: 6.4, phF: 7.4, tempI: 24, tempF: 28, tamanho: 30},
                        {especie: "Kinguio", phI: 7, phF: 7.6, tempI: 18, tempF: 24, tamanho: 25},
                        {especie: "Labeo Bicolor", phI: 6.6, phF: 7, tempI: 24, tempF: 27, tamanho: 15},
                        {especie: "Labeo Frenatus", phI: 6.5, phF: 7.2, tempI: 24, tempF: 27, tamanho: 15},
                        {especie: "Lebiste ou Guppy", phI: 7, phF: 7.5, tempI: 24, tempF: 28, tamanho: 5},
                        {especie: "Limpa Vidro", phI: 6.8, phF: 7, tempI: 19, tempF: 26, tamanho: 5},
                        {especie: "Mato Grosso", phI: 5.5, phF: 7.2, tempI: 24, tempF: 28, tamanho: 5},
                        {especie: "Molinesia", phI: 7, phF: 7.8, tempI: 21, tempF: 28, tamanho: 8},
                        {especie: "Neon", phI: 6.8, phF: 7, tempI: 24, tempF: 28, tamanho: 5},
                        {especie: "Oscar", phI: 6.8, phF: 7, tempI: 24, tempF: 28, tamanho: 30},
                        {especie: "Pangássiu", phI: 7, phF: 7.2, tempI: 22, tempF: 26, tamanho: 45},
                        {especie: "Paulistinha", phI: 6.4, phF: 7.4, tempI: 20, tempF: 26, tamanho: 5},
                        {especie: "Peixe Beijador", phI: 6.8, phF: 7.2, tempI: 24, tempF: 28, tamanho: 26},
                        {especie: "Plati", phI: 6.8, phF: 7.8, tempI: 20, tempF: 28, tamanho: 6},
                        {especie: "Ramirezi", phI: 6.8, phF: 7, tempI: 24, tempF: 28, tamanho: 5},
                        {especie: "Rodóstomo", phI: 6.8, phF: 7, tempI: 22, tempF: 28, tamanho: 4},
                        {especie: "Tetra Neon Negro", phI: 5.6, phF: 7.2, tempI: 24, tempF: 28, tamanho: 5},
                        {especie: "Tricogaster", phI: 6, phF: 7.2, tempI: 24, tempF: 30, tamanho: 12}
                    ];
                    
                    const ph = document.querySelector("#inputPH").value;
                    const temp = document.querySelector("#inputTemperatura").value;
                
                    if (ph < 5 || ph > 7.8 && temp < 18 || temp > 30) {
                        console.log("sem condições amigão")
                    } else {
                        listaPeixes.map((peixe) => {
                            if (ph >= peixe.phI && ph <= peixe.phF && temp >= peixe.tempI && temp <= peixe.tempF) {
                                console.log(peixe.especie);
                            }
                        })
                    }
                }}>

                    <span>Ph</span>
                    <input placeholder="Insira o PH" type="text" id="inputPH" autoComplete="off"/>

                    <span>Temperatura</span>
                    <input placeholder="Insira a temperatura" type="text" id="inputTemperatura" autoComplete="off"/>

                    <button type="submit">Listar</button>
                </form>
            </div>
                
        </MainGrid>
    )
}