//importiamo da react useState e useEffect
import { useState, useEffect } from 'react'

function MovieList() {

    //array di oggetti (film)
    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
    //state dell'array di oggetti di partenza
    const [movies, setMovies] = useState(films);

    //state dell'array filtrato
    const [filterMovies, setFilterMovies] = useState(films);

    //stato della selezione del genere
    const [selectGen, setSelectGen] = useState("");

    //utilizzo di useeffect per filtrare la select tramite condizioni
    useEffect(() => {

        //SE stringa vuota, si vedono tutti i film in pagina
        if (selectGen === "") {
            setFilterMovies(movies);
        } else {
            //ALTRIMENTI utilizziamo il .filter per filtrare l array in base al genere
            setFilterMovies(movies.filter((mov) => mov.genre === selectGen));
        }
    },
        //effect che dipende dallo stato dell'array di partenza e dal genere selezionato tramite select
        [selectGen, movies]);

    return (
        <>
            <div>

                {/* Tag select per scegliere il genere del film da selezionare*/}
                <select
                    value={selectGen}
                    onChange={(e) => setSelectGen(e.target.value)}>
                    {/* opzioni (generi) che l utente puo selezionare */}
                    <option value="">Tutti i generi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                </select>

                {/* Lista dei film filtrata tramite select e useeffect*/}
                <ul>
                    {filterMovies.map((movie, index) => (
                        <li key={index}>
                            {movie.title} {movie.genre}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MovieList