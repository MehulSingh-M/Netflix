import React from 'react'
import './styles/card.css'
import  Player  from "../player";


export default function Card() {

    return (
        
        <div className = "cards">        
            
            <div className ="card">
                
                <div className="socialnetwork">
                    <Player>
                        <img src="./images/films/drama/the-social-network/small.jpg"  /> 
                        
                            <Player.Button />

                        
                            <Player.Video src={require("F:/movies/The Social Network (2010)/The Social Network.mp4").default} />
                            
                    </Player>
                    
                  
                </div> 

                <div className="the-revenant">
                    <Player>
                        <img src="./images/films/drama/the-revenant/small.jpg" /> 
                        
                            <Player.Button />

                        
                            <Player.Video src={require("C:/Users/deepak/Videos/ps3 expolit/ps3.MP4").default} />
                            
                    </Player>
                    
                  
                </div>

                
                <img src="./images/films/drama/the-prestige/small.jpg" />
                <img src="./images/films/drama/kings-speech/small.jpg" />
                <img src="./images/films/drama/fight-club/small.jpg" />

            </div>
        </div>    
            

        

        
    )
}





