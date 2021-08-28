import styled from 'styled-components'

export const Container = styled.section`
    margin-top: 200px;
    padding-bottom: 30px;
    color: #FFFFFF;
    background-color: black;
    color: white;

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
            color: #ED1B24;
            display: contents;
        }
    }

    .novidades-quadrado {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ED1B24;
        width: 408px;
        height: 329px;
        margin: -80px 0 80px 0;
        font-weight: 700;
        font-size: 62px;
        text-align: center;

        @media screen and (max-width: 420px) {
            font-size: max(25px, 6vw);
            width: 250px;
            height: 150px;
        }
    }

    label {
        font-weight: 500;
        margin-bottom: 7px;
    }

    input {
        width: 369px;
        max-width: 369px;
        height: 61px;
        border-radius: 0px;

        ::placeholder {
            color: #9B9B9B;
        }
    }

    button {
        width: 120px;
        height: 61px;
        color: #FFFFFF;
        background: #ED1B24;
        font-size: 14px;
        margin-top: -5px;
        border: 0;
        border-radius: 0;
    }

    form {
        margin-bottom: 80px;
        display: flex;
        align-items: flex-end;
        max-width: 490px;
    }
`