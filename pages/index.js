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

                    <p>
                        &emsp;&emsp;O substrato é determinante na montagem de seu aquário, afinal ele influência diretamente na água. Quando escolhemos um cascalho de origem calcárea é importante lembrar que nesse caso a água do aquário sempre será mineralizada e de PH alcalino, ou seja, não se pode colocar neste aquário peixes de água ácida. Quando estamos escolhendo o substrato, estamos sem perceber determinando qual tipo de ecossistema vamos reproduzir.
                    </p>

                    <p>
                        &emsp;&emsp;É importante lembrar que “substrato” engloba todos os outros elementos que vão interagir quimicamente no ambiente do aquário, como elementos decorativos e materiais filtrantes, por isso é necessário escolher com atenção todos os elementos que estarão presentes no aquário.
                    </p>
                </div>
                <div className="conteudo__secundario">
                    <h3>Iluminação</h3>

                    <p>
                        &emsp;&emsp;Seguindo a mesma lógica da escolha do substrato, nós devemos adequar a iluminação ao sistema que gostaríamos de ter. O objetivo principal do aquário é tentar reproduzir ao máximo o habitat natural dos peixes, por isso devemos compará-los com os ambientes naturais que queremos reproduzir. Por exemplo, um recife de corais multicoloridos próximos à superfície do mar. Obviamente este é um ambiente bastante ensolarado, neste caso a nossa escolha seria por um forte sistema de iluminação para este aquário.
                    </p>
                </div>
                <div className="conteudo__secundario">
                    <h3>Temperatura</h3>

                    <p>
                        &emsp;&emsp;A temperatura adequada para o aquário é aquela que busca reproduzir as mesmas condições do habitat que você quer retratar. O objetivo é sempre tentar copiar a natureza. Mas a pergunta que permanece é: “como controlar a temperatura?”, como na maioria das vezes o problema maior se resume ao aquecimento, basta manter um aquecedor com termostato adequado ao tamanho do aquário (em geral na proporção de 1 Watt por litro). Este aparelho fará o controle da temperatura, só aquecendo quando necessário e se mantendo desligado nos outros períodos, já em relação ao resfriamento da água você pode fazer uso de um resfriador com termostato, que se parece com um pequeno ar condicionado ou utilizar um cooler, que é um pequeno ventilador que resfria o aquário.
                    </p>
                </div>
                <div className="conteudo__secundario">
                    <h3>Movimentação da água</h3>

                    <p>
                        &emsp;&emsp;Em aquários menos complexos, uma simples bomba de circulação ou um pequeno filtro são suficientes para a reprodução do movimento da água presente no habitat natural do peixe em seu aquário. Aquários mais complexos podem exigir uso de aparelhos que simulam a movimentação das ondas do mar, mas é válido lembrar que tudo é uma questão de adequação ao ambiente criado. É importante prestar atenção aos excessos de decorações e objetos dentro do aquário, pois estes diminuem a movimentação de água.
                    </p>
                </div>
                <div className="conteudo__secundario">
                    <h3>Sistemas de filtragem</h3>

                    <p>
                        &emsp;&emsp;O aquário é um sistema fechado e, por isso, tudo o que colocamos lá dentro fica por lá, ou seja, é um sistema que tende à acumulação, por isso a utilização de um sistema de filtragem adequado é muito importante! Para manter o equilíbrio do sistema aquático, além dos sistemas de filtragem em funcionamento (seja mecânico ou químico), é fundamental que se complemente a manutenção dos ecossistemas com trocas parciais da água, promovendo a renovação do ambiente e um aquário saudável e equilibrado.
                    </p>
                </div>
                <div className="conteudo__secundario">
                    <h3>Os cuidados com a água</h3>

                    <p>
                        &emsp;&emsp;Não basta despejar água da torneira direto para o aquário, é necessário ter certos cuidados.  Seja na hora de fazer trocas parciais ou no primeiro momento de encher o aquário, é essencial realizar testes hidrológicos e preparar a água para que ela atinja os níveis adequados. Em se tratando de água da torneira, um dos preparos mais importantes é fazer o uso de condicionadores anticloro, já que o cloro presente na água encanada é tóxico para os peixes.
                    </p>
                </div>
        

            </ContentWrapper>

        </MainGrid>
    )
}
