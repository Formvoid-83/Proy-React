import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from '../../../app/api/sampleData';
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";

type Props= {
  formOpen : boolean;
  setFormOpen: (value:boolean) => void
}

export default function EventDasboard({formOpen, setFormOpen} : Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(()=>{
    setEvents(sampleData);
  },[])
  return (
    <Grid>
      <GridColumn width={10}>
        <h2>Left Column</h2>
        <EventList events={events}/>
      </GridColumn>
      <GridColumn width={6}>
      {formOpen && 
        <EventForm setFormOpen= {setFormOpen}/>}
      </GridColumn>
    </Grid>
  )
}