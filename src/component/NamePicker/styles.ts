import styled from 'styled-components';

export const StyledList = styled.ul`
    display: flex;

    gap: 20px;
    height: 160px;
    max-width: 500px;
    list-style: none;
    text-decoration: none;
    padding: 2rem;
    background-color: #ffffff73;
    border-radius: 20px;
    margin: 10px 0;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
`;
export const Wrapper = styled.div`
    min-width: 100px;
    margin: 40px 0;
    min-height: 50px;
    width: 90%;
    border-radius: 20px;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    background-color: white;
`;
export const StyledWinnerList = styled.ul`
    display: flex;
    gap: 50px;
    flex-direction: row;
    background-color: white;

    list-style: none;
    align-items: center;
    text-decoration: none;
`;

export const StyledLi = styled.li`
    margin: 0 auto;
`;
