import CheckIcon from '@mui/icons-material/Check';
import { Alert, Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useDeleteDoc } from '../../handles/useDeleteDoc';
import { useNameData } from '../../handles/useNameData';
import { MainButton } from '../Button';
import { StyledList, StyledWinnerList, Wrapper } from './styles';
('./nameList');
export const NamePicker = () => {
    const { data } = useNameData();
    const [names, setNames] = useState<string[]>(data);
    const [winners, setWinners] = useState<string[]>([]);
    const [active, setActive] = useState(false);
    const [alertOn, setAlertOn] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const { removeName } = useDeleteDoc();

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

    const saveData = () => {
        winners.forEach((winner) => {
            removeName(winner);

            setAlertOn(true);
        });
        setActive(false);
    };

    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    height: '550px',
                    margin: '0 ',
                }}
            >
                {isExploding && <ConfettiExplosion duration={2000} width={2000} height={2000} />}
                <CardMedia
                    sx={{ height: 140, padding: '30px' }}
                    image="https://i.imgur.com/HFQSsmg.gif"
                    title="erlendrawr"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {' '}
                        Prosjekt Kaffe v̶i̶c̶t̶i̶m̶s name list
                    </Typography>

                    <StyledList>
                        {names.map((name) => (
                            <Chip label={name} />
                        ))}
                    </StyledList>
                    {alertOn && (
                        <Alert
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                            onClose={() => {
                                setAlertOn(false);
                            }}
                        >
                            List has been updated! :D
                        </Alert>
                    )}
                </CardContent>
            </Card>
            <Wrapper>
                <StyledWinnerList>
                    <Typography gutterBottom variant="h5">
                        {' '}
                        Winners!
                    </Typography>
                    {winners.map((winner) => (
                        <Chip label={winner} />
                    ))}{' '}
                </StyledWinnerList>
            </Wrapper>
            <Box display="flex" alignItems="center" gap="30px" justifyContent="space-around" p={3}>
                <MainButton
                    handleGetRandomName={handleGetRandomName}
                    saveData={saveData}
                    handleReset={handleReset}
                    active={active}
                    winners={winners}
                />{' '}
            </Box>
        </>
    );
};
