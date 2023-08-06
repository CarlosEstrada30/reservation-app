import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function FormReservation(props) {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Date:", startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Typography variant="h6">Nombre</Typography>
        <TextField
          placeholder="First Name"
          onChange={(event) => props.setTitle(event.target.value)}
          value={props.title}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <Typography variant="h6">Telefono</Typography>
        <TextField
          placeholder="Last Name"
          onChange={(event) => props.setPhone(event.target.value)}
          value={props.phone}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div>
        <Typography variant="h6">Date</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </div>

      {props.token && (
        <Button color="secondary" onClick={() => props.handleDeleteEvent()}>
          Eliminar
        </Button>
      )}
      <Button color="secondary" onClick={() => props.setOpen(false)}>
        Cancelar
      </Button>
      <Button type="submit" variant="outlined">
        {props.token ? "Actualizar" : "Reservar"}
      </Button>
    </form>
  );
}

export default FormReservation;
