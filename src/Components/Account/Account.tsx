import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormGroup from '../Form/Form';

function Account() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Account 
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Войдите в аккаунт</Offcanvas.Title>
        </Offcanvas.Header>
        <FormGroup/>
      </Offcanvas>
    </>
  );
}

export default Account;