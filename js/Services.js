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
    <section id="Services" className="services_page">
      <div>
        <br/>
        <br/>
        <h1  className="services_title">Services</h1>
        <div className="agent_image_name">
          <img className="agent_portrait" src="/styles/Agent_Portrait.jpg"/>
          <h1 className="agent_name">Agent Name</h1>
        </div>
        <div className="text">
          <p>From beginning to end, Agent Name makes the process of buying or selling you home seamless. He not only keeps his finger on the pulse of the market, but also possesses an expansive network of service people to assist his clients before, during, and after their sale or purchase.</p>
          <p>Selling is more than just listing a property on MLS. Agent throws a wide net of marketing and promotional tools to get your property SOLD. Combined with his promotional tools, professional and personal network, and his resources at Any City Real Estate, he’s prepared to engage every effort to find the perfect buyer for your home.</p>
          <p>Buying a home means finding the picture perfect dream home.  This requires an elite real estate agent with an extensive network who understands the importance of trust.</p>
        </div>
      </div>
    </section>
    )
  }
})
