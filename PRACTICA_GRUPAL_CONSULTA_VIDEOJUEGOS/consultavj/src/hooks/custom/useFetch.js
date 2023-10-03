import { useState, useEffect } from 'react'; 
 
export const useFetch = (url) => { 
 
    const [state, setState] = useState({ 
        info: null, 
        loading: true, 
        error: null 
    }); 
 
    useEffect(() => { 
        fetch(url) 
            .then((respuesta) => { 
                return respuesta.json() 
            }) 
            .then((info) => { 
                setState({ 
                    loading: false, 
                    error: null, 
                    info 
                }); 
            }); 
 
        return () => { 
            setState({ 
                loading: true, 
                error: null, 
                info: null 
            }); 
        } 
 
    }, [url]); 
 
    return state; 
}