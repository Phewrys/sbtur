import styled from 'styled-components'

export const Container = styled.section`
    margin: 150px auto;

    .personagem-titulo {
        color: ${props => props.theme.black};
        letter-spacing: 0px;
        font-weight: 700;
        font-size: 62px;
        text-align: center;
        margin-bottom: 20px;
        
        @media screen and (max-width: 992px) {
            font-size: max(25px, 6vw);
        }
    }

    .personagem-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 170px;
        height: 272px;
        padding: 0px;
        margin: 16px;
        background-color: ${props => props.theme.colorBlack};
        border: solid 5px ${props => props.theme.colorBlack};
        border-radius: 0.25rem;
        transition: 0.3s ease-in-out;

        :hover {
            transform: scale(1.1);
        }
    }

    img {
        width: 100%;
        height: 193px;
        border-bottom: solid 4px ${props => props.theme.colorRed};
    }
    
    .personagem-nome {
        height: 79px;
        padding: 15px;
        padding-left: 20px;
        color: ${props => props.theme.colorWhite};
        font-size: 16px;
        letter-spacing: 0px;
    }

    li {
        margin: 5px;

        i {
            color: ${props => props.theme.colorBlack};
        }
    }
`