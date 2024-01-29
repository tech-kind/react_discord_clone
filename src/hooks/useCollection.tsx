import { DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

interface Channels {
    id: string;
    channel: DocumentData;
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<Channels[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, data));

    useEffect(() => {
        onSnapshot(collectionRef, (querySnapShot) => {
            const channelsResult: Channels[] = [];
            querySnapShot.docs.forEach((doc) => 
                channelsResult.push({
                    id: doc.id,
                    channel: doc.data(),
                })
            );
            setDocuments(channelsResult);
        });
    }, );

  return { documents };
}

export default useCollection;