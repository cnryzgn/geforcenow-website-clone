import GameCard from "./GameCard"
import { MainContext, useContext } from "../contexts/Context"

export default function Games() {
    const { gameData } = useContext(MainContext)

    return (
        <div className="container">
            <div className="top-side">
                <div className="left">
                    <p>{ gameData?.length ? gameData.length : '0' } / 1330 games</p>
                    <p>My Library <i className="fa-solid fa-x"></i></p>   
                </div>

                <div className="right">
                    <div className="queue">
                    <i className="fa-solid fa-arrow-down-wide-short"></i>
                        <p>A to Z</p>
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                    <div className="filter">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>

            <GameCard />



        </div>
    )
}