import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router"
import NavBar from './NavBar'

export default React.createClass({
  componentDidUpdate() {
     window.scrollTo(0, 0)
  },
  render(){
  return (
    <div id="aboutMe" className="aboutMe_page">
      <br/>
      <br/>
      <section className="agent_image_name">
        <img className="agent_portrait" src="/styles/Agent_Portrait.jpg"/>
        <h1 className="agent_name">Agent Name</h1>
      </section>
      <section  className="text">
        <p>As a successful Real Estate Entrepreneur, my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
        <p>With that said, not all real estate agents are created equal.</p>
        <p>I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
      </section>

    </div>
    )
  }
})
