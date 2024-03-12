import 'semantic-ui-css/semantic.min.css'
import EventDasboard from '../../features/events/dashboard/EventDasboard'
import NavBar from './nav/NavBar'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import { AppEvent } from '../types/event'


function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectedEvents(event:AppEvent | null){
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <>
      <NavBar setFormOpen = {handleCreateFormOpen}/>
      <Container className='main'>
      <EventDasboard
       formOpen = {formOpen}
       setFormOpen = {setFormOpen}
       selectedEvent ={selectedEvent}
       selectEvent = {handleSelectedEvents}
       />
      </Container>
    </>
   
  )
}

export default App
