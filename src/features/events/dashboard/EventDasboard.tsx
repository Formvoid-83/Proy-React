import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { useAppSelector } from "../../../app/store/store";

export default function EventDasboard() {
  //const [events, setEvents] = useState<AppEvent[]>([])
  const {events} = useAppSelector(state => state.events)

  //The | part is used to describe an alternative

  /*useEffect(()=>{
    setEvents(sampleData);
  },[])*/

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