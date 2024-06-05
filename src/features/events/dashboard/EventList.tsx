import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
  events : AppEvent[]
}

/*export default function EventList({events}: Props) {
  return (
    <>
    {events.map((event: any)=>(
       <EventListItem 
        key={event.id} 
        event={event.event} />
    ))}
    </>
   
  )
}*/
const EventList: React.FC<Props> = ({ events = [] }) => {
  if (!Array.isArray(events)) {
    console.error('Expected events to be an array but received:', events);
    return null;
  }

  return (
    <>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};

export default EventList;