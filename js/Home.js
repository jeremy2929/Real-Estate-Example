import React from 'react'
import $ from 'jquery'
import Page_Two from './Page_Two'

$(document).ready(function() {
  //Calculate the height of <header>
  //Use outerHeight() instead of height() if have padding
  var aboveHeight = $('header').outerHeight();
  var aboveHeight = 623
  //when scroll
  $(window).scroll(function(){
    //if scrolled down more than the header’s height
    if ($(window).scrollTop() > aboveHeight){
      // if yes, add “fixed” class to the <nav>
      // add padding top to the #content  (value is same as the height of the nav)
      $(".nav_wrapper").addClass('fixed')
      $('.nav_placeholder').addClass('nav_placeholder_grow')
      $('.page2_wrapper_content').css('margin-top','10em')
    } else {
      // when scroll up or less than aboveHeight,    remove the “fixed” class, and the padding-top
      $(".nav_wrapper").removeClass('fixed')
      $('.nav_placeholder').removeClass('nav_placeholder_grow')
      $('.page2_wrapper_content').css('margin-top','5em')
    }
  })
})

export default React.createClass({
  DownClick(){
    var element = document.getElementById("Page2")
    // var alignWithTop = true
    element.scrollIntoView({behavior: "smooth"})
  },
  render(){
  return (
    <div>
      <div className="outer-container">
        <div className="inner-container">
          <div className="video-overlay">
            <h1 className="main_title">Agent Name</h1>
            <h2 className="main_subtitle">Finding your next home...</h2>
            <button className="left_button">Buy</button>
            <button className="right_button">Sell</button>
            <img className="connect_mlsidx" src="/styles/MLS_Search.jpg"/>
            <button className="down_button" onClick={this.DownClick}>&#8595;</button>
          </div>
          <video id="player" src="/styles/movie.mp4" autoPlay loop></video>
        </div>
      </div>
      <Page_Two/>
    </div>
    )
  }
})
