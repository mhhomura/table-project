import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    background: #ffffff;
    height: calc(100vh - 100px);
    margin: 16px;
    border-radius: 12px;
    padding: 15px;
`;

export const TableDiv = styled.div`
    overflow-y: auto;
    width: 100%;
`;

export const ActionDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 16px;
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid #BDBDBD;
`;

export const EmptyDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #595C5F;
    flex-direction: column;
`;