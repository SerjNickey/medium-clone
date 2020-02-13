import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/currentUser'


const TopBar = () => {
  const [currentUserState, dispatch] = useContext(CurrentUserContext) 


  const logout = () => {    
    localStorage.setItem('token', '')    
    dispatch({type: 'SET_UNAUTHORIZED'})     
  } // Unsafe
  

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Medium</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">Home</NavLink>
          </li>

          {currentUserState.isLoggedIn === false && (
            <>
              <li className="nav-item">
                <NavLink exact to="/login" className="nav-link">Sign In</NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact to="/register" className="nav-link">Sign Up</NavLink>
              </li>
            </>
          )} 

          {currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; New Post
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <i className="ion-gear-a"></i>
                  &nbsp; Settings
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={`/profiles/${currentUserState.currentUser.username}`} className="nav-link">
                  <img className="user-pic" src={currentUserState.currentUser.image} alt="" />
                  &nbsp; {currentUserState.currentUser.username}
                </NavLink>
              </li>  

              <li className="nav-item">
                <Link to="/" onClick={logout} className="nav-link">Logout</Link>
              </li>                 
            </>
          )}         
        </ul>        
      </div>      
    </nav>
  )
}


export default TopBar