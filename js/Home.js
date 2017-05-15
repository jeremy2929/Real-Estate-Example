import React from 'react'
import $ from 'jquery'
import PageTwo from './PageTwo'
import ContactMe from './ContactMe'
import Services from './Services'
import AboutMe from './AboutMe'
import NavBar from './NavBar'

var height = window.screen.height
var width = window.screen.width

export default React.createClass({
  // DownClick(){
  //   var element = document.getElementById("contactPage")
  //   element.scrollIntoView({behavior: "smooth"})
  // },
  // <video id="player" className="video" src="/styles/movie.mp4" autoPlay loop></video>
  // <button id="downButton" ref="downButton" className="down_button" onClick={this.DownClick}>&#8595;</button>

  render(){
    if (height > 600 && width > 1020) {
      console.log("first");
      return (
          <div className="outer_container">
            <div className="inner_container">
              <div className="video_overlay">
                <h1 className="main_title">Agent Name</h1>
                <h2 className="main_subtitle">Finding your next home...</h2>
                <div className="mainPage_buttons">
                  <button className="left_button">Buy</button>
                  <button className="right_button">Sell</button>
                </div>
                <img className="connect_mlsidx" src="/styles/MLS_Search.jpg"/>
              </div>
              <img className="home_image_box" src="/styles/house4.jpg"/>
            </div>
            <NavBar/>
            <Services/>
            <AboutMe/>
            <ContactMe/>
          </div>
        )
    } else {
      console.log("second");
      return(
        <div className="entire_wrapper">
          <NavBar/>
          <div className="outer-container">
            <div className="inner-container">
              <div className="video-overlay">
                <h1 className="main_title">Agent Name</h1>
                <h2 className="main_subtitle">Finding your next home...</h2>
                <div className="mainPage_buttons">
                  <button className="left_button">Buy</button>
                  <button className="right_button">Sell</button>
                </div>
                <img className="connect_mlsidx" src="/styles/MLS_Search.jpg"/>
              </div>
              <img className="home_image_box" src="/styles/house4.jpg"/>
            </div>
          </div>
          <Services/>
          <AboutMe/>
          <ContactMe/>
        </div>
      )
    }
  }
})
