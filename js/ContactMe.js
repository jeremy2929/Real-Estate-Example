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
    <div>
      <NavBar/>
      <section className="contact_page">
        <table className="contact_info">
          <tbody >
            <tr>
              <th className="contact_detail">main:</th>
              <td className="contact_detail">NNN-NNN-NNNN</td>
            </tr>
            <tr>
              <th className="contact_detail">email:</th>
              <td className="contact_detail">
                <a href="mailto:jrramirez65@gmail.com" data-rel="external">mailto:agentName@gmail.com</a>
              </td>
            </tr>
            <tr>
              <th className="contact_detail" style={{verticalAlign: "top"}}>address:</th>
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
          <img className="contact_image_right" src="/styles/house3.jpg"/>
        </table>
        <img className="contact_agent_portrait" src="/styles/Agent_Portrait.jpg"/>
      </section>
    </div>
    )
  }
})
