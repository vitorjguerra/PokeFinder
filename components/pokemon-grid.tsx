'use client'
import { useState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PokemonCard } from './pokemon-card';

interface PokemonGridPrps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList }: PokemonGridPrps) {
    const [searchText, setSearchText] = useState("");
    console.log(pokemonList)
    return (
        <>
            <div>
                <h3 className='text-2xl py-6 text-center'>Search For Your Pokemon!</h3>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label htmlFor='pokemonName'>Pokemon Name</Label>
                    <Input
                        type='text'
                        value={searchText}
                        autoComplete='off'
                        id='pokemonName'
                        placeholder='Chalizard, Pikachu, etc.'
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Collection</h3>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {pokemonList.map((pokemon: any) => {

                })}
                <PokemonCard name='Pikachu' />
                <PokemonCard name='Pikachu' />
                <PokemonCard name='Pikachu' />
            </div>
        </>
    )
}