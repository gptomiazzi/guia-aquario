import { MainGrid } from "../src/components/MainGrid";
import { Sidebar } from "../src/components/Sidebar";

export default function LitragemEVidro() {
    return (
        <MainGrid>
            <Sidebar />

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()

                    const altura = document.querySelector("#altura").value;
                    const largura = document.querySelector("#largura").value;
                    const comprimento = document.querySelector("#comprimento").value;
                    const litragem = (altura * largura * comprimento)/1000;
                    let espessura;

                    if (litragem > 0 && litragem <= 30) {
                        espessura = "3mm";
                    } else if (litragem > 30 && litragem <= 100) {
                        espessura = "5mm";
                    } else if (litragem > 100 && litragem <= 200) {
                        espessura = "6mm";
                    } else if (litragem > 200 && litragem <= 400) {
                        espessura = "8mm";
                    } else if (litragem > 400 && litragem <= 600) {
                        espessura = "10mm";
                    } else if (litragem > 600 && litragem <= 800) {
                        espessura = "12mm";
                    } else if (litragem > 800 && litragem <= 1000) {
                        espessura = "15mm";
                    }

                    alert(espessura);
                    
                }}>
                    <span>
                        Altura
                    </span>
                    <input placeholder="Insira a altura do aquário" type="text" id="altura" autoComplete="off"/>
                    
                    <span>
                        Largura
                    </span>
                    <input placeholder="Insira a largura do aquário" type="text" id="largura" autoComplete="off"/>
                    
                    <span>
                        Comprimento
                    </span>
                    <input placeholder="Insira o comprimento do aquário" type="text" id="comprimento" autoComplete="off"/>

                    <button type="submit"> Calcular espessura </button>
                </form>
            </div>
        </MainGrid>
    )
}