import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const CreateType = ({show, onHide}) => {
  return (    
          <Modal
          show={show}
          onHide={onHide}            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый тип
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <Form>
                <Form.Control
                placeholder={'введите название типа'}
                >

                </Form.Control>
             </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={onHide}>Close</Button>
              <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
export default CreateType;