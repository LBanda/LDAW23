import { useState, useEffect, useRef } from 'react';

export const useFetch1 = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        info: null,
        loading: true, 
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ info:null, loading: true, error:null });

        fetch(url)
            .then((respuesta) => {
                return respuesta.json()
            })
            .then((info) => {  
                console.log(info);
                info = info.results.map( juego => {
                    return{
                        id: juego.id,
                        nombre: juego.name,
                        imagen: juego.background_image,
                        rating: juego.rating,
                        metacritic: juego.metacritic
                    }
                })
                console.log(info);
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        info:info
                    });
                }else{
                    console.log('setSate no se llamó porque el componente ya estaba desmontado');} 
                }
            )}, [url]);
            return state;
        }