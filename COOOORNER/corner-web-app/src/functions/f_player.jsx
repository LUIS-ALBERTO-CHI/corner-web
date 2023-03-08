import axios from 'axios'

const allPlayers = async (state) => {
    const peticion = await axios.get('http://localhost:3300/Player')
    state(peticion.data)
}

export {
    allPlayers
}

