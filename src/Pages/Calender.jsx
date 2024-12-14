import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { Calendar, momentLocalizer } from 'react-big-calendar'; 
import moment from 'moment'; 
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import { motion } from 'framer-motion';

const localizer = momentLocalizer(moment);

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([
        {
            title: 'Sample Event 😊',
            start: new Date(2024, 11, 12, 10, 0), 
            end: new Date(2024, 11, 12, 12, 0), 
            description: '😊',
        },
    ]);
    const [showModal, setShowModal] = useState(false); 
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        start: null,
        end: null,
    });

    const handleSelectEvent = (event) => {
        alert(`Event: ${event.title}\nDescription: ${event.description}`);
    };

    const handleSelectSlot = ({ start, end }) => {
        setNewEvent({ ...newEvent, start, end });
        setShowModal(true); // Show the modal when selecting a slot
    };

    const handleModalSubmit = () => {
        if (newEvent.title && newEvent.description) {
            setEvents([...events, newEvent]); // Add the new event to the calendar
            setShowModal(false); 
            setNewEvent({ title: '', description: '', start: null, end: null }); // Reset form
        } else {
            alert("Please fill in both the title and description.");
        }
    };

    const handleModalClose = () => {
        setShowModal(false); 
        setNewEvent({ title: '', description: '', start: null, end: null }); 
    };

    return (
        <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
            <Header title={"Calendar"} />

            < motion.div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8"
            initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}>

                <h1 className="text-4xl font-bold mb-6 text-center text-gray-100">Event Calendar</h1>

                <div className="w-full max-w-screen-xl bg-gray-800 p-6 rounded-lg shadow-xl ">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 600 }}
                        onSelectEvent={handleSelectEvent}
                        onSelectSlot={handleSelectSlot}
                        selectable
                        messages={{
                            today: 'Today',
                            previous: 'Previous',
                            next: 'Next',
                            month: 'Month',
                            week: 'Week',
                            day: 'Day',
                            agenda: 'Agenda',
                        }}
                        eventPropGetter={(event) => ({
                            className: 'bg-blue-600 text-white p-2 rounded-lg shadow-md hover:bg-blue-700',
                        })}
                    />
                </div>

                <div className="mt-6 text-center text-sm text-gray-300">
                    <p>Selected Date: {selectedDate.toDateString()}</p>
                </div>
            </motion.div>

            {/* Modal for Adding New Event */}
            {showModal && (
                < motion.div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60"
                initial={{ opacity: 0, y: 20 }}
			    animate={{ opacity: 1, y: 0 }}
			    transition={{ delay: 0.2 }}>
                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg transform transition-transform scale-110">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Create New Event</h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Event Title"
                                value={newEvent.title}
                                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Event Description"
                                value={newEvent.description}
                                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={handleModalSubmit}
                                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Save Event
                            </button>
                            <button
                                onClick={handleModalClose}
                                className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Calender;
