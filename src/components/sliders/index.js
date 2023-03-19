import React from 'react'
import './styles/slider.css';
import Card from '../card'
import Card2 from '../card2'
import Carousel from 'react-elastic-carousel';
import Details from '../details';

function slider() {

    const breakPoints = [
        {width:1, itemsToShow:1},
        {width:480, itemsToShow:2},
        {width:600, itemsToShow:5},
        {width:1200, itemsToShow:1},
    ]
    return (
            

        <div className ="slider">
            <h3>A Category</h3>

            <Carousel breakPoints = {breakPoints}>

                    
                    <Card />
                    
                    
                    
                    
                    
                
                
            </Carousel>
            <h3> Romance</h3>
            <Carousel breakPoints = {breakPoints}>

                    
                    <Card2 />
                    
                
                
            </Carousel>
            
        </div>
    )
}

export default slider
