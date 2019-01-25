import React from 'react';
/*This React Component contains a list of all the different tile sets players can choose in place of X/O. A tile set in this case
is just a pair of images. These images may be stored on the front or back end -- tbd. In the future, the list will be populated
with smaller versions of the tile images, for now just contains text describing the images.*/
class TileMenu extends React.Component{
    render(){
        return(
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Tile Menu
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li>Catto and Doggo</li>
            </ul>
            </div>
        );
    }
}

export default TileMenu;