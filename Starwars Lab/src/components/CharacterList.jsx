import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'

const CharacterList = () => {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const getCharacters = async () => {
            const response = await axios.get(`${BASE_URL}people`)
            setCharacters(response.data.results)
        }
        getCharacters()
    },[])
    console.log('characters', characters)



    return (
        <div className="CharacterList">
            <h1>Character List</h1>
            {
                characters.map((character)=> (
                    <div key ={character.name} className ="charactercard">
                        <h3>{character.name}</h3>
                        </div>
                ))
            }
        </div>
    )
} 
export default CharacterList 