import React, { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    },[query, onQuery]);

    const handleQueryFormat = (queryReceived: string) => {
        const queryToLowerCase = queryReceived.toLowerCase();
        return queryToLowerCase.trim();
    }

    const handleSearch = () => {
        if (query === '') {
            console.log('Por favor ingrese una búsqueda válida.');
        } else {
            const queryFormatted = handleQueryFormat(query);
            onQuery(queryFormatted);
            setQuery('');
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && query !== '') {
            handleSearch();
        } else {
            console.log('Por favor ingrese una búsqueda válida.');
        }
    }
    
    return (
        <div className="search-container">
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder={ placeholder } 
                value={ query }
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
