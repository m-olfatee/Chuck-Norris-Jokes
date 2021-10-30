import React, { useState, useEffect } from 'react'

import MyContext from './MyContext'

import Chuck from '../assets/chuck.png'

const MyProvider = (props) => {

    const categoryURL = 'https://api.chucknorris.io/jokes/categories'

    const [select, setSelect] = useState('animal')

    const [category, setCategory] = useState([])

    const [joke, setJoke] = useState(null)

    const [display, setDisplay] = useState(null)

    const jokeURL = `https://api.chucknorris.io/jokes/random?category=${select}`

    useEffect(() => {
        fetch(categoryURL)
            .then(response => response.json())
            .then(data => setCategory(data.map((item, index) => (
                <option value={item} key={index}>{item[0].toUpperCase() + item.substr(1)}</option>
            ))))
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch(jokeURL)
            .then(response => response.json())
            .then((data) => setJoke(data.value))
            .catch((error) => console.log(error))
    }, [jokeURL, display])

    const handleShow = (event) => {
        event.preventDefault()
        setDisplay(<h4>{joke}</h4>)
    }

    return (
        <MyContext.Provider value={{ Chuck, select, category, display, handleShow, setSelect }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
