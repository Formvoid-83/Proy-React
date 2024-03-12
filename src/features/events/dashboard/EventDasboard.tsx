import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from '../../../app/api/sampleData';
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";

type Props= {
  formOpen : boolean;
  setFormOpen: (value:boolean) => void;
  //addEvent: (event:AppEvent) => void;
  selectEvent: (event : AppEvent | null) => void;
  selectedEvent: AppEvent | null;  
}

export default function EventDasboard({formOpen, setFormOpen, selectEvent, selectedEvent} : Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  //The | part is used to describe an alternative

  useEffect(()=>{
    setEvents(sampleData);
  },[])

  function addEvent(event: AppEvent){
    setEvents(prevState => {
      return [...prevState,event]
    })
  }
  function updateEvent(updatedEvent: AppEvent){
    setEvents(events.map(evt => evt.id == updatedEvent.id ? updatedEvent : evt));
    selectEvent(null);
    setFormOpen(false);
  }
  function deleteEvent(eventId: string){
    setEvents(events.filter(evt => evt.id !== eventId));

  }
  return (
    <Grid>
      <GridColumn width={10}>
        <h2>Left Column</h2>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
      </GridColumn>
      <GridColumn width={6}>
      {formOpen && 
        <EventForm
        setFormOpen= {setFormOpen}
        updateEvent = {updateEvent} 
        addEvent={addEvent}
        selectedEvent={selectedEvent}
        key={selectedEvent ? selectedEvent.id : 'create'} //? is used as an IF (if you have this, do that) This part makes the form change when one clicks the View button
        />}
      </GridColumn>
    </Grid>
  )
}