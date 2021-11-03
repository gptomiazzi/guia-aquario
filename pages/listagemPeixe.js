import { MainGrid } from "../src/components/MainGrid/index.js";
import { Sidebar } from "../src/components/Sidebar/index.js";

export default function ListagemPeixe() {
    return (
        <MainGrid>
            <Sidebar />

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const listaPeixes = [
                        {especie: "", phI: 0, phF: 0, tempI: 0, tempF: 0},
                    ];
                    console.log(pao);
                    
                    const ph = document.querySelector("#inputPH").value;
                    const temperatura = document.querySelector("#inputTemperatura").value;
                
                    

                }}>

                    <span>Ph</span>
                    <input placeholder="Insira o PH" type="text" id="inputPH"/>

                    <span>Temperatura</span>
                    <input placeholder="Insira a temperatura" type="text" id="inputTemperatura"/>



                    <button type="submit">Listar</button>
                </form>
            </div>

        </MainGrid>
    )
}