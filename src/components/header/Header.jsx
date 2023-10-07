import '../../../style.css' 
import viniPhoto2 from '../../img/vini2.jpg'
export default function Header(){
    return(
        <>
                  <nav>
      <div className="contaizner1">
              <div id="header">
                  Portfólio
              </div>
              <div id="menu">
                  <ul>
                      <li><a href="#habilidades">Skills</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="#portfolioTitle">Portfólio</a></li>
                  </ul>
              </div>
          </div>   
      </nav>
      <div className="container1 header-geral">
        <div id="headerCta">
        <h1>
            Vinicius, 20 
            Desenvolvedor Front-End
        </h1>
        <p className="gray">
            Sou Desenvolvedor Web Junior, e gostaria de apresentar meu trabalho e um pouco mais sobre mim, através deste portfólio.
        </p>
        <br />
        <a className="button-contact" href="https://www.linkedin.com/in/viniciusaguiar-araujo/" target="_blank" data-aos="fade-up-right" data-aos-delay="700">Linkedin</a>
        <a className="button-contact" href="https://github.com/ViniAguiar1" target="_blank" data-aos="fade-up-right" data-aos-delay="700">Github</a>
        <a className="button-contact" href="https://www.instagram.com/viniaguiardev/" target="_blank" data-aos="fade-up-right" data-aos-delay="700">Instagram</a>
        </div>
        <div id="headerImg" data-aos="flip-up" data-aos-delay="600">
            <img src="" alt="user picture" />
        </div>
    </div>
        </>
    )
}