import { Container } from './style'
import imgLogoMarvel from './../../content/img/logoHeader.jpg'

const Header = () => {

    return (
        <>
            <Container>
                <div className="container">
                    <div className="row">
                        <nav className="navbar fixed-top navbar-expand-lg navbar-dark animate" data-anime="top">
                            <div className="container" id="idContainer">
                                <div id="idLogo">
                                    <a href="#">
                                        <img src={imgLogoMarvel} width="138" height="62" alt="Logo da Marvel." />
                                    </a>
                                </div>
                                <div></div>
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa fa-navicon"></i></span>
                                </button>
                                <div className="navbar-collapse menu collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#FILMES">FILMES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#QUADRINHOS">QUADRINHOS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#PROGRAMASDETV">PROGRAMAS DE TV</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#JOGOS">JOGOS</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Header