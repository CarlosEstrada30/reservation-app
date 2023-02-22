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
  const [token, setToken] = useState(null)

  const addOrReplace = (arr, newObj) => [...arr.filter((o) => o.id !== newObj.id), {...newObj}];

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
  e.preventDefault();

  let data = {
    token: token,
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
  }).then(response => response.json())
  .catch(error => console.error('Post Error:', error))
  .then(response => {
    let event = {
      id: response.token,
      title: response.title,
      start: response.start,
      extendedProps: {
        phone: response.phone
      },
    }
  //   let newData = initailEvents.map(obj =>
  //     obj.id === event.id ? event : obj
  // );
  let newData = addOrReplace(initailEvents, event)
  setInitialEvents(newData)

  });

  
  setTitle(null)
  setPhone(null)
  setstart(null)
  setToken(null)
  setOpen(false)
}

const handleEventClick = (clickInfo) => {
  setToken(clickInfo.event.id)
  setstart(clickInfo.event.startStr)
  setTitle(clickInfo.event.title)
  setPhone(clickInfo.event.extendedProps.phone)
  setOpen(true)
}

const handleEvents = (events) => {
  setCurrentEvents(events)
}
const handleEventChange = (eventChange) => {
  console.log(eventChange.oldEvent.id)
  console.log(eventChange.oldEvent.title)
  console.log(eventChange.oldEvent.startStr)
  console.log(eventChange.event.startStr)

  let data = {
    token: eventChange.event.id,
    title: eventChange.event.title,
    phone: eventChange.event.extendedProps.phone,
    start: eventChange.event.startStr,
    end: eventChange.event.startStr
  }
  fetch('http://127.0.0.1:5000/api/v1/event', {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Post Success:', response));
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
            initialView='timeGridWeek'
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
            // eventAdd={function(){}}
            eventChange={handleEventChange}
            // eventRemove={function(){}}
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