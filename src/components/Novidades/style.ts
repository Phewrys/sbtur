import styled from 'styled-components'

export const Container = styled.section`
    margin-top: 200px;
    padding-bottom: 30px;
    background-color: ${props => props.theme.colorBlack};
    color: ${props => props.theme.colorWhite};

    .row > div {
        display: flex;
        align-items: flex-end;
    }

    .novidades-text {
        font-size: 20px;
        font-weight: 600;
        width: 315px;
        height: 82px;
        margin-bottom: 20px;

        span {
            color: ${props => props.theme.colorRed};
            display: contents;
        }
    }

    .novidades-quadrado {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colorRed};
        width: 408px;
        height: 329px;
        margin: -80px 0 80px 0;
        font-weight: 700;
        font-size: 62px;
        text-align: center;

        @media screen and (max-width: 576px) {
            width: 250px;
            height: 150px;
        }

        @media screen and (max-width: 768px) {
            width: 300px;
            height: 250px;
        }

        @media screen and (max-width: 992px) {
            font-size: max(35px, 6vw);
        }
    }

    label {
        font-weight: 500;
        margin-bottom: 7px;
    }

    .form-group {
        width: 80%;
        max-width: 369px;
    }

    input {
        height: 61px;
        border-radius: 0px;

        ::placeholder {
            color: ${props => props.theme.colorGrey};
        }
    }

    button {
        width: 20%;
        min-width: 70px;
        max-width: 120px;
        height: 61px;
        background: ${props => props.theme.colorRed};
        font-size: 14px;
        margin-top: -5px;
        border: 0;
        border-radius: 0;
        transition: 0.3s ease-in-out;
        font-weight: 600;
        
        a {
            text-decoration: none;
            color: ${props => props.theme.colorWhite};
        }

        :hover {
            background: #ce1820;
            transform: scale(1.1);
        }
    }

    form {
        margin-bottom: 80px;
        display: flex;
        align-items: flex-end;
        max-width: 490px;
    }
`