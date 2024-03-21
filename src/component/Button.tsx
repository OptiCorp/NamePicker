import { Box, Button } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';

type Props = {
    handleGetRandomName: (event: React.MouseEvent<HTMLButtonElement>) => void;
    active: boolean;
    winners: string[];
    handleReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const MainButton = ({ handleGetRandomName, active, winners, handleReset }: Props) => {
    const [chosenNames, setchosenNames] = useLocalStorage<string[]>('chosen_names', []);

    return (
        <>
            {chosenNames.length >= 2 ? (
                <Box display="flex" alignItems="center" flexDirection="row" gap={5}>
                    <Button
                        variant="contained"
                        onClick={handleReset}
                        sx={{
                            backgroundColor: 'yellow',
                            color: 'black',
                            width: '100%',
                            ':hover': { backgroundColor: 'red' },
                        }}
                    >
                        Another time
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: 'green' }}>
                        save
                    </Button>
                </Box>
            ) : (
                <Button variant="contained" onClick={handleGetRandomName} disabled={active}>
                    Click me
                </Button>
            )}{' '}
        </>
    );
};