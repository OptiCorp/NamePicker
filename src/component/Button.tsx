import { Button } from '@mui/material';

type Props = {
    handleGetRandomName: (event: React.MouseEvent<HTMLButtonElement>) => void;

    active: boolean;
    winners: string[];
    handleReset: (event: React.MouseEvent<HTMLButtonElement>) => void;
    saveData: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const MainButton = ({
    handleGetRandomName,
    active,
    winners,
    handleReset,
    saveData,
}: Props) => {
    return (
        <>
            {winners.length >= 2 ? (
                <>
                    <Button variant="contained" onClick={handleReset}>
                        Another time
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'green' }}
                        onClick={saveData}
                    >
                        save
                    </Button>
                </>
            ) : (
                <Button variant="contained" onClick={handleGetRandomName} disabled={active}>
                    Click me
                </Button>
            )}{' '}
        </>
    );
};
