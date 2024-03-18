import { Button } from '@mui/material';

type Props = {
    handleGetRandomName: (event: React.MouseEvent<HTMLButtonElement>) => void;
    active: boolean;
    setActive: (active: boolean) => void;
};
export const MainButton = ({ handleGetRandomName, active, setActive }: Props) => {
    return (
        <>
            <Button variant="contained" onClick={handleGetRandomName} disabled={active}>
                Click me
            </Button>
        </>
    );
};
