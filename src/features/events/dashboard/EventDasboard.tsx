import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from '../../../app/api/sampleData';
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";

export default function EventDasboard() {
  const [events, setEvents] = useState<AppEvent[]>([])

  //The | part is used to describe an alternative

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
        <h2>Filter</h2>
      </GridColumn>
    </Grid>
  )
}