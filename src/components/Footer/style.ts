import styled from 'styled-components'

export const Container = styled.section`
    padding: 70px 0;
    color: ${props => props.theme.colorWhite};
    background: #222222;

    .logoM {
        margin-top: 15px;
        width: 44px;
        height: 67px;
    }

    a {
        color: ${props => props.theme.colorGrey};
        text-decoration: none;

        :hover {
            text-decoration: underline;
            color: white;
            opacity: 0.8;
        }
    }

    p {
        margin-bottom: 3px;
    }

    img {
        width: 60px;
        height: 60px;
    }

    i {
        color: #F2F2F2;
        opacity: 0.4;
        margin: 10px 15px 10px 0px;

        :hover {
            opacity: 0.7;
        }
    }

    .column-center {
        display: flex;
        align-items: center;
        padding: 5px 10px 10px 0px;

        p {
            font-size: 17px;
            letter-spacing: 0px;
            max-width: 270px;
            font-weight: 600;
            padding-left: 10px;
        }

        a {
            color: ${props => props.theme.colorWhite};
        }
    }

    .continuar-lendo {
        text-decoration: underline;
    }

    h5 {
        margin-top: 10px;
    }
`