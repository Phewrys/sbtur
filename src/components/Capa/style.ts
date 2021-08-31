import styled from 'styled-components'

export const Container = styled.section`

    top: 105px;
    max-height: 613px;
    width: 100vw;

    div {
        display: inline-block;
        position: relative;

        figcaption {
            position: absolute;
            left: 150px;
            bottom: -75px;
            font-size: 100px;
            
            @media screen and (max-width: 992px) {
                left: 100px;
            }
            
            @media screen and (max-width: 768px) {
                bottom: -65px;
                left: 75px;
            }

            @media screen and (max-width: 576px) {
                bottom: -40px;
                left: 40px;
            }
        }
    }

    img {
            max-height: 613px;
            width: 100vw;
            filter: brightness(50%);
        }

    p {
        font-size: 85px;
        font-weight: 700;
        font-family: fantasy;
        width: 592px;
        height: 418px;
        letter-spacing: 0px;
        transform: scale(1.1);
        color: ${props => props.theme.colorWhite};
        display: flex;
        align-items: flex-end;

        @media screen and (max-width: 992px) {
            font-size: 75px;
            width: 492px;
            height: 318px;
        }
        
        @media screen and (max-width: 768px) {
            font-size: 60px;
            width: 392px;
            height: 218px;
        }
        
        @media screen and (max-width: 576px) {
            font-size: 30px;
            width: 202px;
            height: 118px;
        }
    }

`