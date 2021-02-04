import {NavLink} from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <NavLink className="navbar-brand" exact to="/">Vending Machine</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link" exact to ="/skittles">Skittles</NavLink> 
        <NavLink className="nav-link" exact to ="/hersheys">Hershey's</NavLink>
        <NavLink className="nav-link" exact to ="/starbursts">Starbursts</NavLink>
      </div>
    </div>
  </div>
</nav>
    )
}
export default NavBar