import styled from 'styled-components';
import erlendbox from '../assets/erlendbox.webp';

export const BodyWrapper = styled.div`
    background-color: lightgray;
    display: flex;
    justify-content: baseline;
    flex-direction: column;
    flex-wrap: wrap;
    background-repeat: no-repeat;
    background-size: contain;

    background-position: center;
    /* background-image: url('${erlendbox}'); */
    width: 100%;

    min-height: 100vh;
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1rem;
    font-weight: 600;

    color: white;
    margin: 0 auto;
`;
