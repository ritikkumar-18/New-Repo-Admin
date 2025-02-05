import React, { useState } from "react";
import Header from "../components/Common/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { ChromePicker } from "react-color"; // For color selection

const Calendar = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Sample Event 😊",
            start: "2025-06-02T10:00:00",
            end: "2025-06-02T12:00:00",
            description: "This is a sample event.",
            color: "#3b82f6",
        },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
        color: "#3b82f6",
    });

    
    const handleDateClick = (info) => {
        setNewEvent({ ...newEvent, start: info.dateStr, end: info.dateStr });
        setEditingEvent(null);
        setShowModal(true);
    };

    // Add or update event
    const handleModalSubmit = () => {
        if (newEvent.title && newEvent.start && newEvent.end) {
            if (editingEvent) {
                // Update existing event
                setEvents(events.map(event => event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event));
                toast.success("Event Updated!");
            } else {
                // Add new event
                setEvents([...events, { id: Date.now(), ...newEvent }]);
                toast.success("Event Added Successfully!");
            }
            setShowModal(false);
            setNewEvent({ title: "", description: "", start: "", end: "", color: "#3b82f6" });
        } else {
            toast.error("Please fill in all fields!");
        }
    };

    // Open modal for editing an event
    const handleEventClick = (info) => {
        const selectedEvent = events.find(event => event.id === parseInt(info.event.id));
        if (selectedEvent) {
            setNewEvent(selectedEvent);
            setEditingEvent(selectedEvent);
            setShowModal(true);
        }
    };

    // Delete an event
    const handleDeleteEvent = () => {
        setEvents(events.filter((event) => event.id !== editingEvent.id));
        setShowModal(false);
        toast.success("Event Deleted!");
    };

    return (
        <div className="flex-1 overflow-auto bg-gray-900 min-h-screen">
            <Header title="Calendar" />

            {/* Search Bar */}
            <div className="flex justify-center my-4">
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md p-2 bg-gray-800 text-white rounded-md"
                />
            </div>

            <motion.div
                className="flex flex-col items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-100">
                    Event Calendar
                </h1>

                <div className="w-full max-w-screen-lg bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        events={events.filter(event =>
                            event.title.toLowerCase().includes(searchTerm.toLowerCase())
                        )}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        selectable={true}
                        height={600}
                        eventBackgroundColor="#3b82f6"
                        eventTextColor="white"
                        eventContent={(eventInfo) => (
                            <div style={{ backgroundColor: eventInfo.event.extendedProps.color }}>
                                {eventInfo.event.title}
                            </div>
                        )}
                    />
                </div>
            </motion.div>

            {/* Event Modal */}
            {showModal && (
                <motion.div
                    className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                            {editingEvent ? "Edit Event" : "Create New Event"}
                        </h2>
                        <input
                            type="text"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                        />
                        <textarea
                            placeholder="Event Description"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                            rows="3"
                        />
                        <input
                            type="datetime-local"
                            value={newEvent.start}
                            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                        />
                        <input
                            type="datetime-local"
                            value={newEvent.end}
                            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                        />

                        {/* Color Picker */}
                        <ChromePicker
                            color={newEvent.color}
                            onChange={(color) => setNewEvent({ ...newEvent, color: color.hex })}
                        />

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handleModalSubmit}
                                className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
                            >
                                {editingEvent ? "Update Event" : "Save Event"}
                            </button>
                            {editingEvent && (
                                <button
                                    onClick={handleDeleteEvent}
                                    className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            )}
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700"
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

export default Calendar;
