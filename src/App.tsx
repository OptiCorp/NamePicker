import { Box, Container } from '@mui/material';
import { NamePicker } from './component/NamePicker/NamePicker';
import { Title } from './styles/styles';

function App() {
    return (
        <>
            {' '}
            <Container maxWidth="sm">
                <Box
                    height="auto"
                    width="auto"
                    my={3}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={3}
                    sx={{ border: '2px solid grey', backgroundColor: 'lightpink' }}
                >
                    <Title>Name Picker</Title>
                </Box>
                <NamePicker />
            </Container>
        </>
    );
}

export default App;
