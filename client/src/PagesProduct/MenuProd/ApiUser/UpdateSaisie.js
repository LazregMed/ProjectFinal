import React, { useState,useEffect ,useSelector} from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  UpdateSaisie } from '../../../Redux/SaisieProductSlice';

const UpdateSaisis = ({Pro}) => {

  
 
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
 

  const [UpdateProSaisie,setUpdateProSaisie]=useState({
   id:Pro._id
  })

  const HandleChange= (e)=>{
    setUpdateProSaisie({...UpdateProSaisie,[e.target.name]:e.target.value})
     
  }
 
  
  const Updating=(e)=>{

    
    dispatch(UpdateSaisie({id:Pro._id,UpdateProSaisie}))
    handleClose()
   
  }

  
  

  
  return (
    <div>


<Button variant="primary" onClick={handleShow}>
        UPDATE
      </Button>



         
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
     
     
     <Form>
     <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Kitting</Form.Label>
        <Form.Control defaultValue={Pro.Kitting} name='Kitting' onChange={HandleChange} type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Coupe</Form.Label>
        <Form.Control defaultValue={Pro.Coupe} name='Coupe' onChange={HandleChange} type="number"  />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Montage</Form.Label>
        <Form.Control defaultValue={Pro.Montage} name='Montage' onChange={HandleChange} type="number"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Test</Form.Label>
        <Form.Control defaultValue={Pro.Test} name='Test' onChange={HandleChange} type="number" />
      </Form.Group> 
       </Form>
      
      
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Updating}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 

            
    </div>
  )
}

export default UpdateSaisis