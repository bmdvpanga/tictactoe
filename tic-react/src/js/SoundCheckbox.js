import React from 'react';

/*A React component for turning the sound on and off. For an online game, turning off the sound on one client will not 
affect the other (obviously)*/
class SoundCheckbox extends React.Component{
    
    render(){
        return(
        <div>
            Sound: <input type="checkbox" name= "vehicle1" value= "Bike"/>
        </div>); 
    }

}

export default SoundCheckbox;