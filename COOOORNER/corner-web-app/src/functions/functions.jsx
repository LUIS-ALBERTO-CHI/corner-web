import axios from 'axios'

const allTeams = async (state) => {
    const peticion = await axios.get('http://localhost:3300/Team')
    state(peticion.data)
}

export {
    allTeams
}

