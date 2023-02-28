import React from 'react'
import { Button, Header, Image, Modal,  Checkbox, Form, Label } from 'semantic-ui-react'

function ModalExampleModal(props) {
  
  return (
    <Modal
      as={Form}
      onSubmit={e => props.handleEventSubmit(e)}
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
    >
      <Modal.Header>Reservar<Label size='medium'>{props.start}</Label></Modal.Header>
      <Modal.Content>
                <Form.Field>
                <label>Nombre</label>
                <input placeholder='First Name' onChange={(event) => props.setTitle(event.target.value)} value={props.title} />
                </Form.Field>
                <Form.Field>
                <label>Telefono</label>
                <input placeholder='Last Name' onChange={(event) => props.setPhone(event.target.value)} value={props.phone}/>
                </Form.Field>
      </Modal.Content>
      <Modal.Actions>
      {props.token &&
      <Button color='red' onClick={() => props.handleDeleteEvent()}>
          Eliminar
        </Button>
        }
        <Button color='black' onClick={() => props.setOpen(false)}>
          Cerrar
        </Button>
        <Button
            type='submit'
          content={props.token ? "Actualizar": "Reservar"}
          labelPosition='right'
          icon='checkmark'
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal