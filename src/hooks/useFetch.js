
import { useEffect, useState, useRef } from 'react';

export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setState({
            data:null,
            loading: true,
            error: null
        })

        // setTimeout(() => {
            fetch( url )
                .then( resp => resp.json() )
                .then( data => {

                    if( isMounted.current ){
                        setState({
                            data,
                            loading: false,
                            error: null
                        })
                    }else{
                        console.warn('Set state not call');
                    }
                })    
        // }, 4000 );

        

    }, [url])

    return state;
    
}
