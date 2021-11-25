import { useState, useEffect } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import emailjs from "emailjs-com"
export const Timeline = props => {
  const initialState = {
    name: "",
    email: "",
    phonenumber: "",
  }

  const [{ name, email, phonenumber }, setState] = useState(initialState)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const clearState = () => setState({ ...initialState })

  const handleChange = e => {
    console.log(e.target)
    const { name, value } = e.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    setShow(false)
    e.preventDefault()
    console.log(name, email, phonenumber)
    emailjs
      .sendForm("service_5iwd3f9", "template_pbsnz6s", e.target, "user_0XuB13AohlG2WeP7lrm4P")
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div id="timeline">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>User Collect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                name="phonenumber"
                className="form-control"
                placeholder="phone number"
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-custom btn-lg" onClick={() => handleClose()}>
              Send Message
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <div className="custom">
        <div
          className="section-title text-center"
          style={{ marginTop: "34vh" }}
        >
          <h2 style={{ color: "white" }}>Welcome to Empress Jets</h2>
        </div>

        <div>
          <h3>
            <b style={{ color: "white" }}>
              The World's First NFT Jet Charter Platform & Jet Club Membership
              on the Blockchain
            </b>
          </h3>
        </div>
        <div className="rsvp">
          <button
            onClick={() => handleShow()}
            className="btn btn-custom btn-lg"
          >
            Apply for Membership
          </button>
        </div>
      </div>
    </div>
  )
}
