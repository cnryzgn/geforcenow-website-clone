import React, { useState, useEffect } from 'react'
import { MainContext } from './contexts/Context'
import axios from 'axios'

// ---------- Components ----------
import Navbar from './components/Navbar'
import Games from './components/Games'

export default function App() {
    const [input, setInput] = useState('')
    const [loading, setLoading]   = useState(false)
    const [gameData, setGameData] = useState()

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:8000/api/games')
            .then(res => {
                setGameData(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    const data = {
        gameData,
        loading,
        input
    }

    return (
        <MainContext.Provider value={data}>
            <Navbar 
                setInput={setInput}
            />
            <Games />
        </MainContext.Provider>
    )
}