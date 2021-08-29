import { Container } from './style'
import imgMastercard from './../../content/img/img-mastercard.jpg'

const Mastercard = () => {

    return (
        <>
            <Container>
                <div className="container" id="idMastercard">
                    <div className="row justify-content-center">
                        <div className="col-12 mastercard-titulo">MARVEL MASTERCARD</div>
                        <div className="col-12 mastercard-subtitulo">Desbloqueie seus super poderes</div>
                        <div className="col-12 mastercard-img">
                            <img src={imgMastercard} alt="Imagem do Blog."/>
                        </div>
                        <button className="col-12 mastercard-btn btn">
                            <a href="#idMastercard">CADASTRE-SE AGORA</a>
                        </button>
                        <div className="col-12 mastercard-texto">ENTENDA COMO FUNCIONA</div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Mastercard