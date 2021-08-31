import { Container } from './style'
import imgCapa from './../../content/img/imgCapa.jpg'

const Capa = () => {

    return (
        <>
            <Container>
                <div>
                    <img src={imgCapa} alt="Imagem da Capa." />  
                    <figcaption>
                        <p>CONHEÇA NOSSOS PERSONAGENS</p>
                    </figcaption>
                </div>
            </Container>
        </>
    )
}
 export default Capa