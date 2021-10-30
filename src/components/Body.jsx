import React, { useContext } from 'react'

import MyContext from '../context/MyContext'

const Body = () => {
    const context = useContext(MyContext)
    const { Chuck, select, setSelect, handleShow, display, category } = context
    return (
        <>
            <img src={Chuck} alt="chuck" />
            <h1>Chuck Norris</h1>
            <h2 className="frame-1">Jokes</h2>
            <h2 className="frame-2">
                <span>Select a Category, </span>
                <span>And, </span>
                <span>Press the BUTTON!</span>
            </h2>
            <form >
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                    {category}
                </select>
                <br />
                <button className="custom-btn btn-2" onClick={handleShow}><span>Have fun!</span><span>SHOW!</span></button>
                {display}
            </form>
        </>
    )
}

export default Body
