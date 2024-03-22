import { collection } from '@firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase_setup/firebase';

export const useNameData = () => {
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

    return { data };
};
