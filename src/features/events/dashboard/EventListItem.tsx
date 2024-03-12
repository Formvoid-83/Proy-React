import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";
import { AppEvent } from "../../../app/types/event";

type Props = {
  event: AppEvent
  selectEvent: (event: AppEvent) => void
  deleteEvent: (eventId : string) => void
}

export default function EventListItem({event, selectEvent, deleteEvent} : Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL || '/user.png'}/>
            <ItemContent>
              <ItemHeader>{event.title}</ItemHeader>
              <ItemDescription>Hosted by {event.hostedBy}</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}

        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee:any) =>(
            <EventListAtendee key={attendee.id} attendee={attendee}/>
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>Description of event</span>
        <Button color="red" floated="right" content="Delete" onClick={()=> deleteEvent(event.id)}/>
        <Button color="teal" floated="right" content="View" onClick={()=> selectEvent(event)}/>
      </Segment>
    </SegmentGroup>
  )
}
