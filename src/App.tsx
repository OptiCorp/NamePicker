import { Box, Container } from '@mui/material';
import erlendbox from './assets/erlendbox.webp';
import { NamePicker } from './component/NamePicker/NamePicker';
import { Title } from './styles/styles';

function App() {
    return (
        <>
            <Container
                maxWidth="md"
                sx={{
                    backgroundImage: `url('${erlendbox}');`,
                    border: '10px solid yellow',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '30px',
                    height: '900px',
                    width: '100%',
                    margin: '0 auto',
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    p={3}
                    sx={{
                        border: '2px solid grey',
                        margin: '120px auto',
                        minWidth: '150px',
                        maxWidth: '500px',
                    }}
                >
                    <Title>Name Picker</Title>
                </Box>
                <NamePicker />
            </Container>
        </>
    );
}

export default App;
