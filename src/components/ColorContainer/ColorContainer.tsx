import './ColorContainer.css'
import ColorBox from '../color_box/ColorBox'

export default function ColorContainer (props:any){
    console.log(props);
    
    return (
        <div className='color-container' >
            <ColorBox  colorCode = {props.colorCode}></ColorBox>
        </div>
    )
}