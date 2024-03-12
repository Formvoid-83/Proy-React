import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/event";
import { createId } from "@paralleldrive/cuid2";

type Props={
    setFormOpen: (value: boolean) => void;
    addEvent: (event:AppEvent) => void;
    selectedEvent : AppEvent | null;
    updateEvent: (event: AppEvent) => void;
}

export default function EventForm({setFormOpen, addEvent,selectedEvent, updateEvent}:Props) {
    //Double ?? serves to imply: If selectedEvent is null then I use the next things:
    const  initialValues = selectedEvent ?? {
        title: '',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
    const [values, setValues] = useState(initialValues);

    function onSubmit(){
        selectedEvent
         ? updateEvent({...selectedEvent, ...values})
         : addEvent({...values, id:createId(), hostedBy:'bob', attendees:[], hostPhotoURL:''});
        setFormOpen(false);
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target;
        setValues({...values, [name] : value})

    }
  return (
    <Segment clearing>
        <Header content={selectedEvent? 'Update Event' : 'Create Event'}> //There is an event? If yes then Update, if not then Create
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder="Event Title"
                    value={values.title}
                    name= 'title'
                    onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder="Category"
                    value={values.category}
                    name= 'category'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder="Description"
                    value={values.description}
                    name= 'description'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text"
                     placeholder="City"
                     value={values.city}
                    name= 'city'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text"
                     placeholder="Venue"
                     value={values.venue}
                    name= 'venue'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="date"
                     placeholder="Date"
                     value={values.date}
                    name= 'date'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Button  floated="right" positive content='Submit' onClick={()=>onSubmit()}/>
                <Button onClick={()=>setFormOpen(false)} style={{marginRight: 'submit'}} floated="right" content='Cancel'/>

            </Form>
        </Header>
    </Segment>
  )
}
