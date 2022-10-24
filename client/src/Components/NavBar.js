import React from 'react'
import { useSelector } from 'react-redux'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import { LogOut } from '../Redux/UserSlice'
import {useDispatch} from 'react-redux'
const NavBar = () => {
  const isAuth = useSelector(state=> state.User.isAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logged = ()=>{
    dispatch(LogOut())
    navigate('/')}
  return (
    <div>

<Navbar bg="primary" variant="dark">
        <Container>
          
        <img  className='logo' height="80%" width="10%" src="https://www.sirailgroup.com/wp-content/uploads/2019/04/logo-Sirail-45K.png" alt="Sirail : l'expert du câblage ferroviaire"/>
          <Nav className="me-auto">
           <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
          {isAuth? <Button onClick={logged} variant="outline-secondary">LogOut</Button> :
            <>
           
            
            
            </>

               
                  }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar