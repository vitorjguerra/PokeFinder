
const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");

    interface pokeData {
        count: number
        next: string
        previous: boolean
        results: results[]
    }

    type results = {
        name: string
        url: string
    }
    const data: pokeData = await response.json();
    return data.results;

}

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json();
    return data
}