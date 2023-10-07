export default function Projects(){
    return(
        <>
            <section className="portfolio">
        <div id="portfolioTitle" className="conteiner">
             <div className="portText">
                 <h2 className="red">Conheça meu trabalho</h2>
                 <h1 className="black">Portfólio</h1>
             </div>
         </div>
    </section>
    <section className="haircuts">
        <div className="haircut" data-aos="fade-up" data-aos-delay="200">
            <img src={projectDevBarber} alt="Dev Barber"/>
            <div className="haircut-info">
                <strong>Dev Barber</strong>
                <p>
                    Projeto realizado junto com o "Sujeito Programador" utiizando HTML, CSS, e SASS.
                </p>
                <div className="button-project">
                    <button>
                        <a href="https://github.com/ViniAguiar1/dev-barber" target="_blank">ver repositório</a>
                    </button>
                    <button>
                        <a href="https://viniaguiar1.github.io/dev-barber/" target="_blank">Ver DEMO</a>
                    </button>
                </div>
            </div>
        </div>
        <div className="haircut" data-aos="fade-up" data-aos-delay="350">
            <img src={procuradorDePaises} alt="Procurador de País"/>
            <div className="haircut-info">
                <strong>Procurador de País</strong>
                <p>
                   Procurado de países, desenvolvido com HTML, BootStrap, JavaScript e também utilizei a API REST Countries 
                </p>
                <div className="button-project">
                    <button>
                        <a href="https://github.com/ViniAguiar1/api-procurar-paises" target="_blank">ver repositório</a>
                    </button>
                    <button>
                        <a href="https://viniaguiar1.github.io/api-procurar-paises/" target="_blank">Ver DEMO</a>
                    </button>
                </div>
            </div>
        </div>
        <div className="haircut" data-aos="fade-up" data-aos-delay="500">
            <img src={projectTheLastOfUs} alt="Landing Page - The last of Us"/>
            <div className="haircut-info">
                <strong>Landing Page - The Last of Us</strong>
                <p>
                    Projeto realizado junto com os irmãos do canal "Dev em Dobro", no projeto foi utilizado HTML5, CSS3, e JavaScript.
                </p> 
                <div className="button-project">
                    <button>
                        <a href="https://github.com/ViniAguiar1/projeto-the-last-of-us" target="_blank">ver repositório</a>
                    </button>
                    <button>
                        <a href="https://viniaguiar1.github.io/projeto-the-last-of-us/" target="_blank">Ver DEMO</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}