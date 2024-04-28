import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Layout(){



    return(
    <div>
    
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> JobTech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/Jobs'}>Jobs</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/Profile'}>Profile</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/Contact'}>Contact</Link>
        </li>
      </ul>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-link  me-md-2" type="button">
        <Link className="nav-link link-light" to={'/Register'}>Register</Link>
        </button>
        <button className="btn btn-primary" type="button">
        <Link className="nav-link" to={'/SignIn'}>SignIn</Link>
        </button>
      </div>
    </div>
  </div>
</nav>
    </header>

    <main className="container">
        <Outlet/>

    </main>


  
    
    </div>
    )
}