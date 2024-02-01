import 'semantic-ui-css/semantic.min.css'
import EventDasboard from '../../features/events/dashboard/EventDasboard'
import NavBar from './nav/NavBar'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'


function App() {
  const [formOpen, setFormOpen] = useState(false);


  return (
    <>
      <NavBar setFormOpen = {setFormOpen}/>
      <Container className='main'>
      <EventDasboard formOpen = {formOpen} setFormOpen = {setFormOpen}/>
      </Container>
    </>
   
  )
}

export default App
