import { Container } from '@mui/material';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import styled from 'styled-components';
import { MainButton } from '../Button';
import { names as allNames } from './names';
('./nameList');
const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    background-color: wheat;
    max-width: 500px;
    list-style: none;
    text-decoration: none;
    padding: 2rem;

    margin: 10px;
`;
const StyledWinnerList = styled.ul`
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

const StyledLi = styled.li`
    margin: 0 auto;
`;

export const NamePicker = () => {
    const [names, setNames] = useState(allNames);
    const [winners, setWinners] = useState<string[]>([]);
    const [active, setActive] = useState(false);
    let randomName: string;
    const [isExploding, setIsExploding] = useState(false);
    const getRandomname = () => {
        return names[Math.floor(Math.random() * names.length)];
    };
    const handleGetRandomName = () => {
        setActive(true);
        setIsExploding(true);
        setTimeout(() => {
            const randomName = getRandomname();
            setWinners([...winners, randomName]);
            setNames(names.filter((name) => name !== randomName));
            setActive(false);

            setIsExploding(false);
            if (winners.length > 2) {
                setActive(true);
            }
        }, 2000);
    };

    return (
        <>
            {isExploding && <ConfettiExplosion duration={2000} width={2000} height={2000} />}
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <StyledList>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </StyledList>
                <StyledWinnerList>
                    {winners.map((winner, index) => (
                        <StyledLi key={index} color="black">
                            {winner}
                        </StyledLi>
                    ))}
                </StyledWinnerList>
                {winners.length < 2 && (
                    <MainButton
                        handleGetRandomName={handleGetRandomName}
                        active={active}
                        setActive={setActive}
                    />
                )}
            </Container>
        </>
    );
};
