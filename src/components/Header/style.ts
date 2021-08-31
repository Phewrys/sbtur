import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 0px;
    position: sticky;
    height: 105px;
    top: 0;
    left: 0;
    z-index: 1000;
    background: ${props => props.theme.colorBlack};

    .navbar {
        margin-top: auto;
        height: 105px;
    }

    ul {
        background: ${props => props.theme.colorBlack};
    }
    
    a {
        color: ${props => props.theme.colorWhite} !important;
        font-weight: 600;
        font-size: 18px;
        transition: 0.3s ease-in-out;

        :hover {
            transform: scale(1.04);
            color: ${props => props.theme.colorRed} !important;
        }
    }

    button {
        margin-right: 35px;
    }
    
    #idContainer {
        position: fixed;
        top: 20px;
        right: 10px;
        left: 10px;
        margin-top: 12px;
    }

    #idLogo {
        position: fixed;
        top: 20px;
        left: 20px;
    }
`