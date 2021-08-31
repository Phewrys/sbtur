import { Container } from './style'
import { useState, useEffect } from 'react'
import apiMarvel from '../../services/apiMarvel'

interface IMarvel {
    id: string;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

const ListaPersonagens = () => {
    const [marvels, setMarvel] = useState<IMarvel[]>([])
    const [offset, setOffset] = useState(0)

    const ts = '16185185779'
    const apikey = '2957821abda27dfb743a50c555ea8679'
    const hash = '21403ecf02718ff8a11d54b48a94d55e'

    useEffect(() => {
        apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
            setMarvel(response.data.data.results)
        })
    }, []);

    const paginationPrevious = () => {
        if (offset > 0) {
            setOffset(offset - 30)

            apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
                setMarvel(response.data.data.results)
            })
        } else {
            apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
                setMarvel(response.data.data.results)
            })
        }
    }

    const paginationNext = () => {
        setOffset(offset + 30)

        apiMarvel.get(`public/characters?limit=30&offset=${offset}&ts=${ts}&apikey=${apikey}&hash=${hash}`).then(response => {
            setMarvel(response.data.data.results)
        })
    }

    return (
        <>
            <Container>
                <div className="container" id="idListaPersonagens">
                    <div className="row justify-content-center">
                        <div className="col-12 personagem-titulo">LISTA DE PERSONAGENS DA MARVEL</div>
                        {marvels.map((marvel) => {
                            return (
                                <div key={`${marvel.id}`} className="col-2 personagem-card">
                                    <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={`Imagem do personagem ${marvel.name}.`} />
                                    <div className="personagem-nome">{marvel.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    <nav>
                        <ul className="pagination pagination-lg justify-content-center my-5">
                            <li>
                                <a className="page-link" onClick={() => paginationPrevious()}><i className="fas fa-angle-left fa-3x"></i></a>
                            </li>
                            <li>
                                <a className="page-link" onClick={() => paginationNext()}><i className="fas fa-angle-right fa-3x"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </>
    )
}
export default ListaPersonagens