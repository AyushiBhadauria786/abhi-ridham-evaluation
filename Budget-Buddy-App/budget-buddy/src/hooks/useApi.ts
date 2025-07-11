import { useState, useEffect, useCallback } from "react";
import axios from "axios";


const API_URL = 'http://localhost:3001';

interface UseApiResponse<T>{
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}


const useApi = <T>(endpoint: string): UseApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [trigger, setTrigger] = useState(0);

    const refetch = useCallback(() => {
        setTrigger(prev => prev + 1);
    },[])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<T>(`${API_URL}${endpoint}`);
                console.log(response.data);
                setData(response.data);
            } catch (err: any) {
                console.error(`Failed to fetch from ${endpoint}:`,err);
                const errMessage = err.response?.data?.message || err.message || 'An unknown error occured';
                setError(errMessage)
                setData(null);
            } finally{
                setLoading(false);
            }
        };
        if(endpoint){
            fetchData();
        }
    },[endpoint, trigger]);
    
    
    return { data, loading, error, refetch };
}

export default useApi;