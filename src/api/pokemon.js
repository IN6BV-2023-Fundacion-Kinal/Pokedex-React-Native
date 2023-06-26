//En este archivo usamos fetch para consumir nuestra API
import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async( endPointURL ) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(  endPointURL || url );
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export const getPokemonDetailsByUrlApi = async( url ) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export const getPokemonDetailsApi = async( id ) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;   
    }
}