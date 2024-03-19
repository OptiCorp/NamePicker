import styled from 'styled-components';

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    background-color: wheat;
    max-width: 500px;
    list-style: none;
    text-decoration: none;
    padding: 2rem;

    margin: 10px 0;
`;
export const StyledWinnerList = styled.ul`
    display: grid;
    grid-template-columns: 150px 150px;
    gap: 20px;
    background-color: #29f8ff;
    height: 50px;

    list-style: none;
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    margin: 10px;
`;

export const StyledLi = styled.li`
    margin: 0 auto;
`;
