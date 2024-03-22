import styled from 'styled-components';
import erlendbox from '../assets/erlendbox.webp';

export const BodyWrapper = styled.div`
    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: baseline;
        flex-direction: column;
        flex-wrap: wrap;
        background-repeat: no-repeat;
        background-size: cover;

        background-position: center;
        background-image: url('${erlendbox}');
        width: 100%;
    }

    display: flex;
    background-repeat: no-repeat;

    min-height: 100vh;
    justify-content: flex-end;
    background-size: contain;
    flex-direction: column;
    background-position: left;
    background-image: url('${erlendbox}');
    width: 100%;
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    width: 100%;

    letter-spacing: 1rem;
    font-weight: 600;

    color: white;
    margin: 0 auto;
`;
