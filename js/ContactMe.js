import React from "react"
import ReactDOM from "react-dom"
import $ from 'jquery'
import { Link } from "react-router"
import NavBar from './NavBar'

export default React.createClass({
  componentDidUpdate() {
     window.scrollTo(100, 0)
  },
  render(){
  return (
    <div id="contactPage">
      <section  className="contact_page">
        <div className="contact_left">
          <table className="contact_info">
            <tbody >
              <tr>
                <th className="contact_detail">main:</th>
                <td className="contact_detail">NNN-NNN-NNNN</td>
              </tr>
              <tr>
                <th className="contact_detail">email:</th>
                <td className="contact_detail">
                  <a href="mailto:jeremy2929@twc.com" data-rel="external">mailto:agentName@gmail.com</a>
                </td>
              </tr>
              <tr>
                <th className="contact_detail">address:</th>
                <td className="contact_detail">
                  123 Real Estate Highway
                  <br />
                  Anytown, ST ZIPNN
                </td>
              </tr>
              <tr>
                <th className="contact_detail">state license #  </th>
                <td className="contact_detail">NNNNNN</td>
              </tr>
            </tbody>
          </table>
          <section className="agent_image_name">
            <img className="agent_portrait" src="/styles/Agent_Portrait.jpg"/>
            <h1 className="contact_agent_name">Agent Name</h1>
          </section>
        </div>
        <div className="contact_right">
          <img className="contact_image" src="/styles/house3.jpg"/>
          <div className="contact_input_area">
            <h1 className="contact_title">Or, simply enter your information and we will contact you:</h1>
            <div className="contact_buttons">
              <input placeholder="name" className="contact_input"></input>
              <input placeholder="phone number" className="contact_input"></input>
              <button className="contact_submit">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
})
