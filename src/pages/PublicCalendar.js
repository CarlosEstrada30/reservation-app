import React from 'react'
import Calendar from '../components/calendar/Calendar'
import ResponsiveCalendar from '../components/calendar/ResponsiveCalendar';
import { Container, Typography, Divider } from "@mui/material";
import CustomAppBar from '../components/appBar/AppBar'


const PublicCalendar = () => (
        <>
        <CustomAppBar />
        <ResponsiveCalendar/>
        </>
)

export default PublicCalendar