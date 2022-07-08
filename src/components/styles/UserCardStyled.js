import styled from "styled-components";

export const UserCardStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.dark}};
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    max-width: 400px;

    h1{
        font-weight: ${({ theme }) => theme.font.medium}};
    }
    
`;
