import React from "react"
import { Link } from "react-router"
import NavBar from './NavBar'

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
    <div id="Page2" className="page2_wrapper">
      <article className="nav_placeholder"></article>
      <NavBar/>
      <div className="page2_wrapper_content" ref="page2">
        <section className="page2_left_area">
          <h1 className="page2_name_title">Agent Name</h1>
          <p className="page2_text">As a successful Real Estate Entrepreneur, my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
          <p className="page2_text">With that said, not all real estate agents are created equal.</p>
          <p className="page2_text">I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
          <img className="page2_image_box" src="/styles/house1.jpg"/>
          <img className="page2_image_box" src="/styles/house5.jpg"/>
        </section>
        <aside className="page2_right_area">
          <h1 className="page2_name_title">Any City Real Estate</h1>
          <div>
            <table className="page2_contact_info">
              <tbody>
                <tr>
                  <th className="contact_detail">main:</th>
                  <td className="contact_detail">NNN-NNN-NNNN</td>
                </tr>
                <tr>
                  <th className="contact_detail">email:</th>
                  <td className="contact_detail">
                    <a href="mailto:jeremy2929@twc.com" data-rel="external">agentName@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <th className="contact_detail">address:</th>
                  <td className="contact_detail" style={{lineHeight: "1em"}}>
                    123 Real Estate Highway
                    <br />
                    Anytown, ST ZIPNN
                  </td>
                </tr>
                <tr>
                  <th className="contact_detail">state license #</th>
                  <td className="contact_detail">NNNNNN</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img className="page2_agent_right" src="/styles/agent.jpg"/>
          <div className="page2_contact_area">
            <h1 className="page2_contact_title">Or, simply enter your information and we will contact you:</h1>
            <div className="page2_contact_buttons">
              <input placeholder="name" className="page2_contact_input"></input>
              <input placeholder="phone number" className="page2_contact_input"></input>
              <button className="page2_contact_submit">Submit</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
})
