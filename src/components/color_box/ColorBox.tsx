import "./ColorBox.css";

export default function ColorBox(props: any) {
  return (
    <div className="color-box" style={{ background: props.colorCode }}>
      <input className="color-hex-code color-val" type="text" value={props.colorCode} />
    </div>
  );
}
