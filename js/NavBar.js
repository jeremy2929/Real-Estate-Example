import React from "react"
import { Link } from "react-router"

export default React.createClass({
  getInitialState(){
    return {
      imgSrc: '/styles/facebook.png'
    }
  },
   handleMouseOver() {
     this.setState({
       imgSrc: '/styles/facebook_name.png'
     })
   },
   handleMouseOut() {
     this.setState({
       imgSrc: '/styles/facebook.png'
     })
   },
  render(){
    return (
      <nav className="nav_wrapper">
        <article className="nav_left">
          <h1 className="nav_name_left">Agent Name</h1>
        </article>
        <article className="nav_middle">
            <a href="" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
            <img className="facebook" ref="facebookImage" src={this.state.imgSrc}/>
          </a>
        </article>
        <article className="nav_right">
            <ul className="nav_content_right">
              <li>
                <a className="nav_options" href="#">
                  HOME
                </a>
              </li>
              <li>
                <Link to="/Services" className="nav_options">SERVICES</Link>
              </li>
              <li>
                <Link to="/AboutMe" className="nav_options">ABOUT ME</Link>
              </li>
              <li>
                <Link to="/ContactMe" className="nav_options">CONTACT ME</Link>
              </li>
            </ul>
        </article>
      </nav>
    )
  }
})
