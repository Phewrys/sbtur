import { Main } from './style'

import Header from '../../components/Header'
import Capa from '../../components/Capa'
import PersonagensDestaque from '../../components/PersonagensDestaque'
import ListaPersonagens from '../../components/ListaPersonagens'
import Mastercard from '../../components/Mastercard'
import Novidades from '../../components/Novidades'
import Footer from '../../components/Footer'

const Home = () => {

    return (
        <>
            <Main>
                <Header/>
                <Capa/>
                <PersonagensDestaque/>
                <ListaPersonagens/>
                <Mastercard/>
                <Novidades/>
                <Footer/>
            </Main>
        </>
    )
}
export default Home