import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

export default function EventDetailedPage() {
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailHeader/>
        <EventDetailedInfo/>
        <EventDetailedChat/>

      </GridColumn>
      <GridColumn width={6}>
        <EventDetailedSidebar/>
      </GridColumn>
    </Grid>
  )
}
