import "./ColorBox.css";



  
  function hexToRgb(hex:string) {
    var result:any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return  {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } 
  }
  
  

export default function ColorBox(props: any) {
    const colorRGB: any = hexToRgb(props.colorCode)
  return (
    <div className="color-box" style={{ background: props.colorCode }}>
      <p className="color-val">{props.colorCode}</p>
      <p className="color-val"> {'rgb(' + colorRGB.r +","+ colorRGB.g+"," + colorRGB.b +")"}</p>
      <p className="color-val">{props.colorCode}</p>
    </div>
  );
}
