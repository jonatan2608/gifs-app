import { useState } from "react";
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
  
  const handleTermClicked = (term: string) => {
    console.log(term);
  }
  
  return (
    <>
      {/* Header */}
      <CustomHeader title="Mis Gifs" description="Descubre y comparte el Gif" />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras..." />

      {/* Past searches */}
      <PreviousSearches 
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={ mockGifs }/>
    </>
  )
}
