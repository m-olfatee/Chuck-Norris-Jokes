import { useState, useEffect } from "react";

const useFetch = (URL, initialState) => {
    const [data, setData] = useState(initialState)
    useEffect(()=>{
        fetch(URL)
        .then((response)=>response.json())
        .then((results)=>setData(results.data))
        .catch((error)=>console.log(error))
    },[URL])

    return data
}

export default useFetch