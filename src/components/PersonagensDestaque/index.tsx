import { useState, useEffect } from 'react'
import { Container } from './style'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imgSpiderMan from './../../content/img/spider_man.jpg'
import imgBlackWidow from './../../content/img/black_widow.jpg'
import imgHulk from './../../content/img/hulk.jpg'
import imgThor from './../../content/img/thor.jpg'
import imgBlackPanther from './../../content/img/black_panther.jpg'
import imgThanos from './../../content/img/thanos.jpg'
import imgIronMan from './../../content/img/iron_man.jpg'

const PersonagensDestaque = () => {
    const [widthScreen, setWidthScreen] = useState(window.screen.width)
    const [slidesToShow, setSlidesToShow] = useState(Number)

    useEffect(() => {
        if (widthScreen <= 576){
            setSlidesToShow(1)
        } else if (widthScreen <= 768) {
            setSlidesToShow(2)
        } else if (widthScreen <= 1024) {
            setSlidesToShow(3)
        } else {
            setSlidesToShow(4)
        }
    }, []);

    return (
        <>
            <Container>
                <div className="container" id="idMastercard">
                    <div className="row justify-content-center">
                        <div className="col-12 Personagens-destaque-titulo">PERSONAGENS EM DESTAQUE</div>
                        <Slider infinite={true} centerMode={true} slidesToScroll={1} slidesToShow={slidesToShow} >
                            <div className="content-img"><img src={imgSpiderMan} alt="Imagem do Homem Aranha." /><p>Homem Aranha</p></div>
                            <div className="content-img"><img src={imgBlackWidow} alt="Imagem da Viúva Negra." /><p>Viúva Negra</p></div>
                            <div className="content-img"><img src={imgHulk} alt="Imagem do Hulk." /><p>Hulk</p></div>
                            <div className="content-img"><img src={imgThor} alt="Imagem do Thor." /><p>Thor</p></div>
                            <div className="content-img"><img src={imgBlackPanther} alt="Imagem do Pantera Negra." /><p>Pantera Negra</p></div>
                            <div className="content-img"><img src={imgThanos} alt="Imagem do Thanos." /><p>Thanos</p></div>
                            <div className="content-img"><img src={imgIronMan} alt="Imagem do Homem de Ferro." /><p>Homem de Ferro</p></div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default PersonagensDestaque