import React from 'react'
import Calendar from '../components/calendar/Calendar'
import Sidebar from '../components/sidebar/Sidebar'


const PublicCalendar = () => (
    <Sidebar title="Public Calendar">
        <Calendar/>
    </Sidebar>
)

export default PublicCalendar