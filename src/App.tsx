import { Box, Container } from '@mui/material';
import { NamePicker } from './component/NamePicker/NamePicker';
import { Title } from './styles/styles';

function App() {
    return (
        <>
            <Container
                sx={{
                    margin: '0 auto',
                    display: 'grid',
                    columnGap: '100px',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'baseline',
                }}
            >
                <Title>Name Picker</Title>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p={3}
                    margin="0 auto"
                >
                    <NamePicker />{' '}
                </Box>
            </Container>
        </>
    );
}

export default App;
