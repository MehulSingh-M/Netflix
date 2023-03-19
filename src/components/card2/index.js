import React from 'react'
import './styles/card.css'
import { Player } from "../";




//romance
import asibcard from '../img/romance/a-star-is-born/asibcard.jpg'
import bvcard from '../img/romance/blue-valentine/bvcard.jpg'


const romance = [asibcard, bvcard]

export default function Card2() {

    return (
        
        <div className = "cards">        
            
            <div className ="card2">
                
                <div className="cardImage">
                    {
                        romance.map
                        
                        (img => <img key={img} src={img} onClick />)
                    }
                </div> 

            </div>
        </div>    
            

        

        
    )
}





