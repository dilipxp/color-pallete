import './ColorPallete.css'
import ColorContainer from '../ColorContainer/ColorContainer'
import colorsJSON from '../../color-data/colors.json'

function putColors():any {
    const values = []
    for( let i = 0; i<colorsJSON.colors.length ; i++){
        values.push(<ColorContainer colorCode ={colorsJSON.colors[i].hex}></ColorContainer>)
    }
    return values
}

export default function ColorPallete(){
    return(
        <div className='color-pallete'>
            {putColors()}
        </div>
    )
}