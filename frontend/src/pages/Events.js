import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';


const Events = () => {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);

    //     useEffect(() => {
    //         // Use the axios.get method inside the useEffect to fetch data
    //         axios.get('https://example.com/api/data')
    //             .then((response) => {
    //                 // Update the state with the fetched data
    //                 setData(response.data);
    //                 setLoading(false); // Set loading to false once data is received
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching data:', error);
    //                 setLoading(false); // Set loading to false in case of an error
    //             });
    //     }, []); // The empty dependency array [] ensures that this effect runs once when the component mounts


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