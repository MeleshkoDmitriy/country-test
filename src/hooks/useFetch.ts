import { useEffect, useState } from "react"

export const useFetch = (url:string) => {
    const [ data, setData ] = useState<Record<string, string | number>[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string>('');

    async function fetchData(url:string) {
        try {
            setIsLoading(true);
            setError('');
            setData([]);

            const response = await fetch(url);
            const res = await response.json();
            setData(res);
        } catch (error:unknown) {            
            if(typeof error === "string") {
                setError(error);
            }
            setIsLoading(false);        
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData(url);
    }, [url])

    return { data, isLoading, error }
}