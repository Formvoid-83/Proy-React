import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDasboard from "../../features/events/dashboard/EventDasboard";
import EventDetailedPage from "../../features/events/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/events', element: <EventDasboard />},
            {path: '/events/:id', element: <EventDetailedPage />},
            {path: '/manage/:id', element: <EventForm />},
            {path: '/createEvent', element: <EventForm />}
        ]
    }
])
