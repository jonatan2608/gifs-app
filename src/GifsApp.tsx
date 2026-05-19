import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Mis Gifs" description="Descubre y comparte el Gif" />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras..." />

      {/* Past searches */}
      <PreviousSearches />

      {/* Gifs */}
      <div className="gifs-container">
        {
          mockGifs.map((gif) => (
            <GifList gifs={gif}/>
          ))
        }
      </div>
    </>
  )
}
