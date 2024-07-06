import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <a className="active" href="#">
          <i className="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#">
          <i className="fa fa-fw fa-search"></i> Search
        </a>
        <a href="#">
          <i className="fa fa-fw fa-envelope"></i> Contact
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-fw fa-user"></i> Login
        </a>
      </div>
    </header>
  );
}
