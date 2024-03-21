import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useNameData } from '../../handles/useNameData';
import { MainButton } from '../Button';
import { StyledLi, StyledList, StyledWinnerList } from './styles';
('./nameList');

export const NamePicker = () => {
    const { data } = useNameData();
    const [names, setNames] = useState<string[]>(data);
    const [winners, setWinners] = useState<string[]>([]);
    const [active, setActive] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        if (data) {
            setNames(data);
        }
    }, [data]);

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
    ///

    const handleReset = () => {
        setNames(data);
        setWinners([]);
        setActive(false);
    };

    return (
        <>
            {isExploding && <ConfettiExplosion duration={2000} width={2000} height={2000} />}
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <StyledList>
                    {data.map((name, index) => (
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

                <MainButton
                    handleGetRandomName={handleGetRandomName}
                    handleReset={handleReset}
                    active={active}
                    winners={winners}
                />
            </Container>
        </>
    );
};
