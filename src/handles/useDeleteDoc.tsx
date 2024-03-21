import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_setup/firebase';

export const useDeleteDoc = () => {
    const docRef = doc(db, 'names', 'nameId');

    const removeName = async (nameToRemove: string) => {
        try {
            await updateDoc(docRef, {
                nameList: arrayRemove(nameToRemove),
            });
        } catch (e) {
            console.log(e);
        }
    };

    return { removeName };
};
