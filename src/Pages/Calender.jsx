import React, { useState } from "react";
import Header from "../components/Common/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Calender = () => {
    const [events, setEvents] = useState([
        {
            title: "Sample Event 😊",
            start: "2025-06-02T10:00:00",
            end: "2025-06-02T12:00:00",
            description: "This is a sample event.",
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
    });

    
    const handleDateClick = (info) => {
        setNewEvent({ ...newEvent, start: info.dateStr, end: info.dateStr });
        setShowModal(true);
    };

    
    const handleModalSubmit = () => {
        if (newEvent.title && newEvent.start && newEvent.end) {
            setEvents([...events, newEvent]);
            setShowModal(false);
            setNewEvent({ title: "", description: "", start: "", end: "" });
            toast.success("Event Added Successfully!");
        } else {
            toast.error("Please fill in all fields!");
        }
    };


    const handleEventClick = (info) => {
        if (window.confirm(`Delete event: ${info.event.title}?`)) {
            setEvents(events.filter((event) => event.title !== info.event.title));
            toast.success("Event Deleted!");
        }
    };

    return (
        <div className="flex-1 overflow-auto bg-gray-900 min-h-screen">
            <Header title="Calendar" />

            <motion.div
                className="flex flex-col items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-100">
                    Event Calendar
                </h1>

                <div className="w-full max-w-screen-lg bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        events={events}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        selectable={true}
                        height={600}
                        eventBackgroundColor="#3b82f6"
                        eventTextColor="white"/>
                </div>
            </motion.div>

            {/* Modern Event Modal */}
            {showModal && (
                <motion.div
                    className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}>
                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md transform transition-transform scale-105">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Create New Event</h2>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea
                            placeholder="Event Description"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"/>
                        <input
                            type="datetime-local"
                            value={newEvent.start}
                            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <input
                            type="datetime-local"
                            value={newEvent.end}
                            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <div className="flex justify-between">
                            <button
                                onClick={handleModalSubmit}
                                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300" >
                                Save Event
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300" >
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
