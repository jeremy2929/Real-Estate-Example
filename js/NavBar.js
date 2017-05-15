import React from "react"
import { Link } from "react-router"
import $ from 'jquery'

var height = window.screen.height
var width = window.screen.width
if (height > 790 && width > 1270) {
  var navBar = $(".nav_bar")
  $(window).scroll(function() {
    if( $(this).scrollTop() > 636 ) {
      $(".nav_bar").addClass("nav_bar_scrolled");
      $('.services_page').css('margin-top','4em')
    } else {
      $(".nav_bar").removeClass("nav_bar_scrolled")
      $('.services_page').css('margin-top','0em')
    }
  });
}

if (height > 710 && height < 791 && width > 1150 && width < 1271) {
  var navBar = $(".nav_bar")
  $(window).scroll(function() {
    if( $(this).scrollTop() > 550 ) {
      $(".nav_bar").addClass("nav_bar_scrolled");
      $('.services_page').css('margin-top','4em')
    } else {
      $(".nav_bar").removeClass("nav_bar_scrolled")
      $('.services_page').css('margin-top','0em')
    }
  });
}

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
   Services(){
     if (window.scrollY < 700 || window.scrollY > 705) {
       $(".nav_bar").removeClass("nav_bar_scrolled");
       $('.services_page').css('margin-top','0em')
       var element = document.getElementById("Services")
       element.scrollIntoView({behavior: "smooth"})
     }
   },
   aboutMe(){
     if (window.scrollY < 1406 || window.scrollY > 1430) {
       var element = document.getElementById("aboutMe")
       element.scrollIntoView({behavior: "smooth"})
     }
   },
   contactMe(){
     var element = document.getElementById("contactPage")
     element.scrollIntoView({behavior: "smooth"})
   },
  render(){
    if (height > 600 && width > 1020) {
      return (
        <nav className="nav_bar">
          <article className="nav_left">
            <h1 className="nav_name_left">Agent Name</h1>
          </article>
          <article className="nav_middle">
              <a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
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
                  <p className="nav_options" onClick={this.Services}>SERVICES</p>
                </li>
                <li>
                  <p className="nav_options" onClick={this.aboutMe}>ABOUT</p>
                </li>
                <li>
                  <p className="nav_options" onClick={this.contactMe}>CONTACT</p>
                </li>
              </ul>
          </article>
        </nav>
      )
    } else {
      return (
        <nav className="nav_mobile_wrapper">
          <article className="nav_left">
            <ul className="nav_content_right">
              <li>
                <a className="nav_options" href="#">
                  HOME
                </a>
              </li>
              <li>
                <Link to="/Services" className="nav_options">SERVICES</Link>
              </li>
            </ul>
          </article>
          <article className="nav_middle">
              <a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
              <img className="facebook" ref="facebookImage" src={this.state.imgSrc}/>
            </a>
          </article>
          <article className="nav_right">
              <ul className="nav_content_right">
                <li>
                  <Link to="/AboutMe" className="nav_options">ABOUT</Link>
                </li>
                <li>
                  <Link to="/ContactMe" className="nav_options">CONTACT</Link>
                </li>
              </ul>
          </article>
        </nav>
      )
    }
  }
})
