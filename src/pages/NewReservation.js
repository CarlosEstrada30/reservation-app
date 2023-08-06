import React from "react";
import {Button, Typography, Divider} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Container } from "@mui/system";
import FormReservation from "../components/form-reservation/FormReservation";
import ResponsiveDialog from "../components/modal/modal";

const NewReservation = () => (
  <Container>
    <Typography gutterBottom variant="h4" align="center">
              Nueva Reservacion
            </Typography>
            <Divider />
  <FormReservation />
  <ResponsiveDialog />

  </Container>
);
export default NewReservation;
