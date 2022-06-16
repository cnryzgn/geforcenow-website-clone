import { MainContext, useContext } from "../contexts/Context"
import Loading from './Loading'

export default function GameCard() {
    const { gameData, loading, input } = useContext(MainContext)
    return (
        <div className="game-card-container">
            { loading && <Loading /> }
            { !loading &&
                gameData
                    ?.filter(game => game.title.toLowerCase().includes(input))
                    .map(game => (
                        <div key={ game.id } className="card">
                            <img src={ game.thumbnail } alt={ game.title } />
                            <button>PLAY</button>
                            {/* Hover */}
                            <div className="card-details-btn">
                                <h4>
                                    { game.title } 
                                </h4>
                                <span><i className="fa-solid fa-sort-down"></i></span> 
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}