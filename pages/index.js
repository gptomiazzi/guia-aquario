import { Sidebar } from "../src/components/Sidebar/index.js";
import { MainGrid } from "../src/components/MainGrid/index.js";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { ContentWrapper } from "../src/components/ContentWrapper/index.js";

export default function Home() {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Roboto']
            }
        });
    }, []);

    return (

        <MainGrid>
            <Sidebar />

            <ContentWrapper>
                <div className="conteudo__principal">
                    <h3>Primeiros passos para ter seu aquario</h3>

                    <p>&emsp;&emsp;Ainda que você siga as instruções com dicas rápidas e práticas para a montagem do aquário perfeito, isso não irá funcionar. Isso porque, embora dicas sejam úteis e necessárias, cada aquário é único. Aspectos como tamanho do aquário e condições de água variam muito de um aquário para outro. Por isso é necessário respeitar a singularidade do seu próprio aquário, busque se informar em relação as necessidades específicas dos peixes escolhidos por você.</p>

                    <p>&emsp;&emsp;Aclimate o seu peixe quando for por em seu aquário e jogue a água do saquinho fora, é muito importante que essa água não entre em contato com a água do aquário, isso porque você não sabe a procedência da água do lugar o qual você comprou, por isso opte sempre por lugares confiáveis e que prezem pela saúde do seu peixe. Se você não sabe aclimatar clique <a href="https://www.youtube.com/watch?v=DD3utMkz4TA">aqui</a> para acessar um tutorial.</p>

                    <p>&emsp;&emsp;Na hora de escolher os peixes de aquário, é necessário se certificar de que todos compartilhem a mesma faixa de temperatura e de pH. Também é importante que os peixes sejam sociáveis e se deem bem com as outras espécies presentes no aquário.</p>
                </div>
                <div className="conteudo__secundario">
                    <h3>O substrato muda tudo</h3>

                    <p>&emsp;&emsp;O substrato é determinante na montagem de seu aquário, afinal ele influência diretamente na água. Quando escolhemos um cascalho de origem calcárea é importante lembrar que nesse caso a água do aquário sempre será mineralizada e de PH alcalino, ou seja, não se pode colocar neste aquário peixes de água ácida. Quando estamos escolhendo o substrato, estamos sem perceber determinando qual tipo de ecossistema vamos reproduzir.</p>

                    <p>&emsp;&emsp;É importante lembrar que “substrato” engloba todos os outros elementos que vão interagir quimicamente no ambiente do aquário, como elementos decorativos e materiais filtrantes, por isso é necessário escolher com atenção todos os elementos que estarão presentes no aquário.</p>
                </div>
                <div className="conteudo__secundario">
                    <h3>O substrato muda tudo</h3>

                    <p>&emsp;&emsp;O substrato é determinante na montagem de seu aquário, afinal ele influência diretamente na água. Quando escolhemos um cascalho de origem calcárea é importante lembrar que nesse caso a água do aquário sempre será mineralizada e de PH alcalino, ou seja, não se pode colocar neste aquário peixes de água ácida. Quando estamos escolhendo o substrato, estamos sem perceber determinando qual tipo de ecossistema vamos reproduzir.</p>

                    <p>&emsp;&emsp;É importante lembrar que “substrato” engloba todos os outros elementos que vão interagir quimicamente no ambiente do aquário, como elementos decorativos e materiais filtrantes, por isso é necessário escolher com atenção todos os elementos que estarão presentes no aquário.</p>
                </div>
                <div className="conteudo__secundario">
                    
                </div>
            </ContentWrapper>

        </MainGrid>
    )
}
