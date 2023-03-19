import React from 'react'
import {Player} from '../'

function details() {
    return (
        <div className="details">
            <div className="details__background">
                <div className="details__background__shadow"></div>
                <img className="details__background__image" src="/images/films/drama/the-social-network/large.jpg"/>
                
            </div>

            <div className="details__area">
                <div className="details__area__container">
                    <div className="details__title">hey</div>
                    <div className="details__description">
                    Forever alone in a crowd, failed comedian Arthur Fleck
                    seeks connection as he walks the streets of Gotham City.
                    Arthur wears two masks -- the one he paints for his day
                    job as a clown, and the guise he projects in a futile 
                    attempt to feel like he's part of the world
                    around him.
                    </div>
                </div>
                <Player>
                    <Player.Button />
                    <Player.Video src={require("C:/Users/deepak/Videos/ps3 expolit/ps3.MP4").default} />
                </Player>
                
            </div>
        </div>
    )
}

export default details
