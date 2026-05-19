export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <div className="content-center">
            <h1>Buscador de Gifs</h1>
            <p>Descubre y comparte el gif perfecto</p>
        </div>

        {/* Search */}
        <div className="search-container">
          <input type="text" name="" id="" placeholder="Buscar gifs" />
          <button>Buscar</button>
        </div>

        {/* Past searches */}
        <div className="previous-searches">
          <h2>Búsquedas previas</h2>
          <ul className="previous-searches-list">
            <li>Goku</li>
            <li>Saitama</li>
            <li>Elden Ring</li>
          </ul>
        </div>

        {/* Gifs */}
        <div className="gifs-container">
          
        </div>
    </>
  )
}
