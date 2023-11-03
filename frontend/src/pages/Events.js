import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';


const Events = () => {

    // const addNew = () => {
    //     console.log("hi");
    //     Navi
    //     <EventRegister />
    // }

    return (
        <>
            <section className="text-gray-600 body-font">
                <NavLink
                    to="EventRegister"
                    className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    Add new event
                </NavLink>
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events;