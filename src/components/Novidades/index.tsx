import { Container } from './style'

const Novidades = () => {

    return (
        <>
            <Container>
                <div className="container" id="idNovidades">
                    <div className="row">
                        <div className="col-12 col-md-6 justify-content-center">
                            <div className="novidades-quadrado">RECEBA AS NOVIDADES DA MARVEL</div>
                        </div>
                        <div className="row col-12 col-md-6 m-auto">
                            <div className="novidades-text">Cadastre-se para receber nossas notícias em primeira mão<span>!</span></div>
                            <form>
                                <div className="form-group col-auto">
                                    <label htmlFor="id-novidades-input">SEU MELHOR E-MAIL</label>
                                    <input type="email" className="form-control" id="id-novidades-input" placeholder="Informe seu melhor e-mail" />
                                </div>
                                <button type="submit" className="btn"><a href="#idNovidades">ENVIAR</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Novidades