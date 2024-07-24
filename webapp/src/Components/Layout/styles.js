import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    background: #F1F1F1;
    grid-template-columns: auto;
    grid-template-rows: auto;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    grid-template-areas:
    'MH MH'
    'CT CT';
    height: 100vh;
    width: 100vw ;
    
    @media(min-width: 1920px){
        height: 100vh;
        width: 1920px;
        grid-template-columns: auto;
        justify-content: center;
    }
`;