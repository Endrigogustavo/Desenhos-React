
import './navbar.css'


function Menu() {
  

    return (
      <>

<nav className="nav">
  <div className="container">
    <h1 className="logo"><a href="#"><i className="fa-solid fa-moon"></i> My Website</a></h1>
    <ul>
      <li><a href="#" className="current">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

      </>
    )
  }
  
  export default Menu
  