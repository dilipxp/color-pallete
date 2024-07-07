import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <a className="active" href="#">
          <i className="fa fa-fw fa-home"></i> Home
        </a>
      </div>
    </header>
  );
}
