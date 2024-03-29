import "./Calendar.css";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalForm from '../modal/modal';
import { calendarService } from "./Calendar.service";
function Calendar() {
  const [initailEvents, setInitialEvents] = useState([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [phone, setPhone] = useState(null);
  const [start, setstart] = useState(null);
  const [token, setToken] = useState(null);

  const addOrReplace = (arr, newObj) => [
    ...arr.filter((o) => o.id !== newObj.id),
    { ...newObj },
  ];

  function removeObjectWithId(arr, id) {
    return arr.filter((obj) => obj.id !== id);
  }

  useEffect(() => {
    calendarService.getEvents().then((eventList) => {
      const Events = eventList.map((event) => ({
        id: event.token,
        title: event.title,
        start: event.start,
        extendedProps: {
          phone: event.phone,
        },
      }));
      setInitialEvents(Events);
    });
  }, []);

  const handleDateSelect = (selectInfo) => {
    setstart(selectInfo.startStr);
    setOpen(true);
  };

  const resetData = () => {
    setTitle(null);
    setPhone(null);
    setstart(null);
    setToken(null);
  };

  const handleDeleteEvent = () => {
    let newEvents = removeObjectWithId(initailEvents, token);
    calendarService.del(token).then((response) => {
      console.log(response);
      setInitialEvents(newEvents);
      resetData();
      setOpen(false);
    });
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();

    let data = {
      token: token,
      title: title,
      phone: phone,
      start: start,
      end: start,
    };
    calendarService.update_or_create(data).then((response) => {
      let event = {
        id: response.token,
        title: response.title,
        start: response.start,
        extendedProps: {
          phone: response.phone,
        },
      };
      let newData = addOrReplace(initailEvents, event);
      setInitialEvents(newData);
    });
    resetData();
    setOpen(false);
  };

  const handleEventClick = (clickInfo) => {
    setToken(clickInfo.event.id);
    setstart(clickInfo.event.startStr);
    setTitle(clickInfo.event.title);
    setPhone(clickInfo.event.extendedProps.phone);
    setOpen(true);
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };
  const handleEventChange = (eventChange) => {
    let data = {
      token: eventChange.event.id,
      title: eventChange.event.title,
      phone: eventChange.event.extendedProps.phone,
      start: eventChange.event.startStr,
      end: eventChange.event.startStr,
    };
    calendarService
      .update_or_create(data)
      .then((response) => console.log("Post Success:", response));
    resetData();
  };
  return (<>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                contentHeight="auto"
                themeSystem="Darkly"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "timeGridWeek,timeGridDay",
                }}
                initialView="timeGridDay"
                slotMinTime="08:00:00"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                events={initailEvents} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventClick={handleEventClick}
                eventsSet={handleEvents}
                // eventAdd={function(){}}
                eventChange={handleEventChange}
                // eventRemove={function(){}}
                eventLongPressDelay={100}
              />
              <ModalForm 
                  open={open}
                  setOpen={setOpen}
                  handleEventSubmit={handleEventSubmit}
                  title={title}
                  setTitle={setTitle}
                  phone={phone}
                  setPhone={setPhone}
                  start={start}
                  token={token}
                  handleDeleteEvent={handleDeleteEvent}
                />
        </>
  );
}

export default Calendar;
