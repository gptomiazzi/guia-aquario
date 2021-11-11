import React from "react";
import { ContentWrapper } from "../src/components/ContentWrapper/index.js";
import { MainGrid } from "../src/components/MainGrid";
import { Sidebar } from "../src/components/Sidebar";

export default function LitragemEVidro() {
    const [ litragem, setLitragem ] = React.useState(0);
    const [ espessura, setEspessura ] = React.useState(0);

    return (
        <MainGrid>
            <Sidebar />

            <ContentWrapper>
                <div className="litragemEVidro" style={{ display: 'flex', flexDirection: 'column' , flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                    <form onSubmit={(e) => {
                        e.preventDefault()

                        const altura = document.querySelector("#altura").value;
                        const largura = document.querySelector("#largura").value;
                        const comprimento = document.querySelector("#comprimento").value;
                        const litragem = (altura * largura * comprimento)/1000;
                        let espessura;

                        if (litragem <= 0) {
                            espessura = 0;
                        }
                       else if (litragem > 0 && litragem <= 30) {
                            espessura = 3;
                        } else if (litragem > 30 && litragem <= 100) {
                            espessura = 5;
                        } else if (litragem > 100 && litragem <= 200) {
                            espessura = 6;
                        } else if (litragem > 200 && litragem <= 400) {
                            espessura = 8;
                        } else if (litragem > 400 && litragem <= 600) {
                            espessura = 10;
                        } else if (litragem > 600 && litragem <= 800) {
                            espessura = 12;
                        } else if (litragem > 800 && litragem <= 1000) {
                            espessura = 15;
                        }

                        setLitragem(litragem);
                        setEspessura(espessura);
                        
                    }}>
                        <label>
                            <span>
                                Altura
                            </span>
                            <input placeholder="Insira a altura do aquário" type="text" id="altura" autoComplete="off"/>
                        </label>
                        <label>
                            <span>
                                Largura
                            </span>
                            <input placeholder="Insira a largura do aquário" type="text" id="largura" autoComplete="off"/>
                        </label>
                        <label>
                            <span>
                                Comprimento
                            </span>
                            <input placeholder="Insira o comprimento do aquário" type="text" id="comprimento" autoComplete="off"/>
                        </label>

                        <button type="submit"> Calcular espessura </button>
                    </form>
                    <h3>
                        O aquário terá: {litragem}L e o vidro {espessura}mm de espessura
                    </h3>
                </div>
            </ContentWrapper>
        </MainGrid>
    )
}