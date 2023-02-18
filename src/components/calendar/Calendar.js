import './Calendar.css';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import ModalExampleModal from '../modal/modal';
import { Button } from 'semantic-ui-react';

function Calendar() {
  const [initailEvents, setInitialEvents] = useState([])
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState(true)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(null)
  const [phone, setPhone] = useState(null)
  const [start, setstart] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/event')
    .then((response) => response.json())
    .then(booksList => {
        const Events = booksList.map((event) => (
        {
        id: event.token,
        title: event.title,
        start: event.start,
        extendedProps: {
          phone: event.phone
        },
      })
      )
      console.log(Events)
      setInitialEvents(Events);
    });
}, [])


const handleDateSelect = (selectInfo) => {
  setstart(selectInfo.startStr)

  setOpen(true)
}


const handleEventSubmit = (e) => {
  console.log("submit")
  console.log(title)
  console.log(phone)
  e.preventDefault();

  let event = {
    id: createEventId(),
    title: title,
    start: start,
    extendedProps: {
      phone: phone
    },
  }
  var newData = [...initailEvents, event]

  let data = {
    title: title,
    phone: phone,
    start: start,
    end: start
  }
  fetch('http://127.0.0.1:5000/api/v1/event', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Post Error:', error))
  .then(response => console.log('Post Success:', response));

  setInitialEvents(newData)
  setTitle(null)
  setPhone(null)
  setstart(null)
  setOpen(false)
  // let title = null
  // let calendarApi = selectInfo.view.calendar

  // calendarApi.unselect() // clear date selection

  // if (title) {
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   })
  // }
}

const handleEventClick = (clickInfo) => {
  setOpen(true)
}

const handleEvents = (events) => {
  setCurrentEvents(events)
}
  return (
    <div className="Calendar">
      <div className="CalendarContainer">
      <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            events={initailEvents} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
            //eventContent={renderEventContent} // custom render function
             // alternatively, use the `events` setting to fetch from a feed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
      </div>
      <ModalExampleModal 
        open={open}
        setOpen={setOpen}
        handleEventSubmit={handleEventSubmit}
        title={title}
        setTitle={setTitle}
        phone={phone}
        setPhone={setPhone}
        start={start}/>
    </div>
  );
}

export default Calendar;


function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title} ({eventInfo.event.extendedProps.phone}) </i>
      <b>{eventInfo.timeText}</b>
    </>
  )
}