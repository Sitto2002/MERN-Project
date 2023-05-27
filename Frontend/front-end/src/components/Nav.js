import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigate = useNavigate("user");
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
        <img alt="logo" className='logo nav-ul' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrHZXGU651AyBybQZHJi7ldp7Ta3NRlUPSg&usqp=CAU"></img>
             { auth ? <ul className='nav-ul'>
            <li><Link to="/products"> Products </Link></li>
                <li><Link to="/"> Profile </Link></li>
                <li><Link to="/add"> Add Product  </Link></li>
                <li><Link to="/update"> Update Product </Link></li>
                <li> <Link onClick={logout} to="/signup"> LogOut ({JSON.parse(auth).name}) </Link></li> 
                </ul>
                :
                <ul className='nav-ul nav-right' >
                <li><Link to="/signup"> SignUp </Link></li>
                <li><Link to="/login"> Login </Link></li>
                </ul>
             }
        </div>
    )
}

export default Nav;