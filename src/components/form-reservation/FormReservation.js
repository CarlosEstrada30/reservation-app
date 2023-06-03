import React, { useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Label,
} from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

function FormReservation(props) {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Date:", startDate);
  };

  return (
    <Form as={Form} onSubmit={handleSubmit}>
      <Form.Field>
        <label>Nombre</label>
        <input
          placeholder="First Name"
          onChange={(event) => props.setTitle(event.target.value)}
          value={props.title}
        />
      </Form.Field>
      <Form.Field>
        <label>Telefono</label>
        <input
          placeholder="Last Name"
          onChange={(event) => props.setPhone(event.target.value)}
          value={props.phone}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <SemanticDatepicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          Format="yyyy-MM-dd"
          placeholderText="Select a date"
        />
      </Form.Field>

      {props.token && (
        <Button color="red" onClick={() => props.handleDeleteEvent()}>
          Eliminar
        </Button>
      )}
      <Button color="black" onClick={() => props.setOpen(false)}>
        Cerrar
      </Button>
      <Button
        type="submit"
        content={props.token ? "Actualizar" : "Reservar"}
        labelPosition="right"
        icon="checkmark"
        positive
      />
    </Form>
  );
}

export default FormReservation;
