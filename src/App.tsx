import { Box, Container } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import erlendbox from './assets/erlendbox.webp';
import { NamePicker } from './component/NamePicker/NamePicker';
import { db } from './firebase_setup/firebase';
import { Title } from './styles/styles';

function App() {
    const [data, setData] = useState<string[]>([]);
    const nameRef = collection(db, 'names');
    getDocs(nameRef);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(nameRef);

            querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
                const nameList = doc.data().nameList;
                setData(nameList);
            });
        };

        fetchData();
    }, []);

    return (
        <>
            {data.map((name) => (
                <p>{name}</p>
            ))}
            <Container
                maxWidth="md"
                sx={{
                    backgroundImage: `url('${erlendbox}');`,
                    border: '10px solid grey',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '30px',
                    height: '900px',
                    width: '100%',
                    margin: '0 auto',
                }}
            >
                {' '}
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
