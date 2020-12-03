import  { useEffect, useState } from 'react';
import { projectStorge,projectFirestore } from "./config";


const useStorge = (file) => {
    const [progress, setprogress] = useState(0);
    const [error, seterror] = useState(null);
    const [url, seturl] = useState(null);
    
    useEffect(() => {
        const storgeRef = projectStorge.ref(file.name);
        const coloctionRef = projectFirestore.collection("images");

        storgeRef.put(file).on("state_change", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);
        }, (err) => {
                seterror(err)
        }, async () => {
                const url = await storgeRef.getDownloadURL();
                coloctionRef.add({url})
                seturl(url)
        })
    }, [file])

    return {progress,error,url}
}


export default useStorge;