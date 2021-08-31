import { Container } from './style'
import imgFooter from './../../content/img/img.jpg'
import logoM from './../../content/img/logoM.jpg'

const Footer = () => {

    return (
        <>
            <Container>
                <div className="container" id="idFooter">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="row">
                                <div className="col-12 col-md-2">
                                    <img className="logoM" src={logoM} alt="Logo M."/>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h5>A Marvel</h5>
                                    <p><a href="#idFooter">Sobre a Marvel</a></p>
                                    <p><a href="#idFooter">Ajuda</a></p>
                                    <p><a href="#idFooter">Carreiras</a></p>
                                </div>
                                <div className="col-12 col-md-auto">
                                    <h5>Mídia</h5>
                                    <p><a href="#idFooter">Filmes</a></p>
                                    <p><a href="#idFooter">Quadrinhos</a></p>
                                    <p><a href="#idFooter">Programas de TV</a></p>
                                    <p><a href="#idFooter">Jogos</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <h5>Última do blog</h5>
                                    <div className="column-center">
                                        <img src={imgFooter} alt="Imagem do Blog."/>
                                        <p><a href="#idFooter">
                                            Captain Marvel Challenge invadiu o tapete vermelho do Oscar</a></p>
                                    </div>
                                    <p><a href="#idFooter" className="continuar-lendo">Continuar lendo</a></p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <h5>Siga a Marvel</h5>
                                    <i className="fab fa-facebook-square fa-2x"></i>
                                    <i className="fab fa-spotify fa-2x"></i>
                                    <i className="fab fa-instagram fa-2x"></i>
                                    <i className="fab fa-youtube fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Footer