import icn_wrld from '../assets/img/icon-world.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className='navbar--image' src={icn_wrld} alt="" />
      <span className="navbar--title">my travel journal.</span>
    </nav>
  )
}

export default Navbar;