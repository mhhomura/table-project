import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: #F1F1F1;
    overflow: auto;
    @media(min-width: 1920px){
        width: 1920px;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-grow: 1;
    }
`;
export const ContentSection = styled.div`
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
    
    @media(max-width: 1366px){
        padding-left: 0%;
        padding-right: 0%;
    }

    @media(max-width: 800px){
        width: 100vw;
        padding: 0;
    }
    

`;