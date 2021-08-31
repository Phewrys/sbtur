import styled from 'styled-components'

export const Container = styled.section`
    margin: 150px auto;

    .row {
        flex-direction: column;
        align-items: center;

        > div {
            text-align: center;
        }
    }

    .mastercard-titulo {
        color: ${props => props.theme.black};
        letter-spacing: 0px;
        font-weight: 700;
        font-size: 62px;
        
        @media screen and (max-width: 768px) {
            font-size: max(25px, 6vw);
        }
    }
    
    .mastercard-subtitulo {
        font-size: 20px;
        color: ${props => props.theme.colorGrey};
    }
    
    .mastercard-img {
        max-width: 1016px;
        margin: 20px 0px 20px 0px;
        transition: 0.7s ease-in-out;

        img {
            width: 100%;
        }

        :hover {
            transform: scale(1.1);
        }
    }
    
    .mastercard-btn {
        max-width: 324px;
        height: 61px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 0;
        background: ${props => props.theme.colorRed};
        transition: 0.3s ease-in-out;

        :hover {
            background: #ce1820;
            transform: scale(1.1);
        }

        a {
            text-decoration: none;
            color: ${props => props.theme.colorWhite};
        }
    }
    
    .mastercard-texto {
        height: 19px;
        color: ${props => props.theme.colorRed};
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
    }
`