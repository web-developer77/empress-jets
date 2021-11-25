import { useState, useEffect } from "react"
import { Modal, Form, Button } from "react-bootstrap"
export const Timeline = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div id="timeline">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>User Collect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action="mailto:info@empress.club"
            method="POST"
            encType="text/plain"
          >
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ marginBottom: "2rem" }}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ marginBottom: "2rem" }}
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ marginBottom: "2rem" }}
            >
              <Form.Label>Phonenumber</Form.Label>
              <Form.Control type="text" placeholder="phonenumber" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                style={{ background: "#c29365", borderColor: "#c29365" }}
              >
                Send
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <div className="custom">
        <div className="section-title text-center" style={{ marginTop: "15%" }}>
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
