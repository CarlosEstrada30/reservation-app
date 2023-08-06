import React from 'react'
import Calendar from '../components/calendar/Calendar'
import { Container, Typography, Divider } from "@mui/material";


const PublicCalendar = () => (
    <Container>
        <Typography gutterBottom variant="h4" align="center">
            Calendario de Reservaciones
        </Typography>
        <Divider/>

        <Calendar/>

    </Container>
)

export default PublicCalendar