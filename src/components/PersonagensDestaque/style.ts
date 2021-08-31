import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.colorBlack};
    padding-top: 200px;
    padding-bottom: 100px;

    .Personagens-destaque-titulo {
        color: ${props => props.theme.colorWhite};
        letter-spacing: 0px;
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 35px;
        
        @media screen and (max-width: 768px) {
            font-size: max(25px, 6vw);
        }
    }

    .content-img {
        width: 239px;
        height: 272px;

        p {
            width: 239px;
            font-size: 20px;
            margin-top: -50px;
            text-align: center;
            color: ${props => props.theme.colorWhite};
        }
    }

    img {
        width: 239px;
        height: 272px;
        border-bottom: 4px solid ${props => props.theme.colorRed};
    }
`