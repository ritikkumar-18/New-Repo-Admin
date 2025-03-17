// import React, { useState } from "react";
// import Header from "../components/Common/Header";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { motion } from "framer-motion";
// import { toast } from "react-hot-toast";
// import { ChromePicker } from "react-color";
// import { FiBell, FiX } from "react-icons/fi";

// const Calendar = () => {
//     const [events, setEvents] = useState([
//         {
//             id: 1,
//             title: "Sample Event 😊",
//             start: "2025-06-02T10:00:00",
//             end: "2025-06-02T12:00:00",
//             description: "This is a sample event.",
//             color: "#3b82f6",
//             category: "Work",
//             reminder: false,
//         },
//     ]);
//     const [showModal, setShowModal] = useState(false);
//     const [editingEvent, setEditingEvent] = useState(null);
//     const [newEvent, setNewEvent] = useState({
//         title: "",
//         description: "",
//         start: "",
//         end: "",
//         color: "#3b82f6",
//         category: "Work",
//         reminder: false,
//     });

//     const categories = ["Work", "Meeting", "Personal", "Appointment"];

//     const handleDateClick = (info) => {
//         setNewEvent({ ...newEvent, start: info.dateStr, end: info.dateStr });
//         setEditingEvent(null);
//         setShowModal(true);
//     };

//     const handleModalSubmit = () => {
//         if (newEvent.title && newEvent.start && newEvent.end) {
//             if (editingEvent) {
//                 setEvents(events.map(event => event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event));
//                 toast.success("Event Updated!");
//             } else {
//                 setEvents([...events, { id: Date.now(), ...newEvent }]);
//                 toast.success("Event Added Successfully!");
//             }
//             setShowModal(false);
//             resetNewEvent();
//         } else {
//             toast.error("Please fill in all fields!");
//         }
//     };

//     const resetNewEvent = () => {
//         setNewEvent({
//             title: "",
//             description: "",
//             start: "",
//             end: "",
//             color: "#3b82f6",
//             category: "Work",
//             reminder: false,
//         });
//     };

//     const handleEventClick = (info) => {
//         const selectedEvent = events.find(event => event.id === parseInt(info.event.id));
//         if (selectedEvent) {
//             setNewEvent(selectedEvent);
//             setEditingEvent(selectedEvent);
//             setShowModal(true);
//         }
//     };

//     const handleDeleteEvent = () => {
//         setEvents(events.filter((event) => event.id !== editingEvent.id));
//         setShowModal(false);
//         toast.success("Event Deleted!");
//     };

//     return (
//         <div className="flex-1 overflow-auto bg-gray-900 min-h-screen">
//             <Header title="Calendar" />
//             <div className="flex flex-col items-center p-4 sm:p-8">
//                 <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-100">Event Calendar</h1>
//                 <div className="w-full max-w-screen-lg bg-gray-800 p-6 rounded-lg shadow-xl overflow-x-auto">
//                     <FullCalendar
//                         plugins={[dayGridPlugin, interactionPlugin]}
//                         initialView="dayGridMonth"
//                         headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay" }}
//                         events={events}
//                         dateClick={handleDateClick}
//                         eventClick={handleEventClick}
//                         selectable={true}
//                         height={600}
//                         eventContent={(eventInfo) => (
//                             <div style={{ backgroundColor: eventInfo.event.extendedProps.color }} className="p-1 rounded text-white text-center">
//                                 {eventInfo.event.title}
//                             </div>
//                         )}
//                     />
//                 </div>
//             </div>

//             {showModal && (
//                 <motion.div 
//                     className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60 p-4"
//                     initial={{ opacity: 0, y: 20 }} 
//                     animate={{ opacity: 1, y: 0 }}
//                 >
//                     <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl w-full 
//                         sm:max-w-full md:max-w-md lg:max-w-lg max-h-[90vh] overflow-y-auto">
//                         <div className="flex justify-between mb-4">
//                             <h2 className="text-2xl font-semibold text-gray-100">
//                                 {editingEvent ? "Edit Event" : "Create New Event"}
//                             </h2>
//                             <FiX className="text-gray-400 hover:text-white cursor-pointer text-2xl" onClick={() => setShowModal(false)} />
//                         </div>

//                         <input type="text" placeholder="Event Title" value={newEvent.title} 
//                             onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
//                             className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
//                         />
//                         <textarea placeholder="Event Description" value={newEvent.description} 
//                             onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
//                             className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md" rows="3"
//                         />

                    
//                         <div className="flex space-x-4 mb-4">
//                             <input type="datetime-local" value={newEvent.start} 
//                                 onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} 
//                                 className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-md"
//                             />
//                             <input type="datetime-local" value={newEvent.end} 
//                                 onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} 
//                                 className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-md"
//                             />
//                         </div>

//                         {/* Category Selection */}
//                         <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
//                             className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
//                         >
//                             {categories.map((cat, idx) => (
//                                 <option key={idx} value={cat}>{cat}</option>
//                             ))}
//                         </select>

                    
//                         <div className="flex items-center space-x-2 mb-4">
//                             <input type="checkbox" checked={newEvent.reminder} 
//                                 onChange={() => setNewEvent({ ...newEvent, reminder: !newEvent.reminder })} 
//                             />
//                             <FiBell className="text-gray-400" />
//                             <span className="text-gray-300">Set Reminder</span>
//                         </div>

                
//                         <div className="flex justify-between">
//                             <button onClick={handleModalSubmit} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
//                                 {editingEvent ? "Update" : "Save"}
//                             </button>
//                             {editingEvent && <button onClick={handleDeleteEvent} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Delete</button>}
//                             <button onClick={() => setShowModal(false)} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Close</button>
//                         </div>
//                     </div>
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export default Calendar;
import React, { useState } from "react";
import Header from "../components/Common/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { FiBell, FiX } from "react-icons/fi";

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [eventType, setEventType] = useState("Appointment");

    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
        color: "#3b82f6",
        category: "Work",
        reminder: false,
    });

    const categories = ["Appointment", "Meeting", "Work", "Interview"];

    const handleDateClick = (info) => {
        setNewEvent({ ...newEvent, start: info.dateStr, end: info.dateStr });
        setEditingEvent(null);
        setShowModal(true);
    };

    const handleModalSubmit = () => {
        if (newEvent.title && newEvent.start && newEvent.end) {
            if (editingEvent) {
                setEvents(events.map(event => 
                    event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event
                ));
                toast.success("Event Updated!");
            } else {
                setEvents([...events, { id: Date.now(), ...newEvent }]);
                toast.success("Event Added Successfully!");
            }
            setShowModal(false);
            resetNewEvent();
        } else {
            toast.error("Please fill in all fields!");
        }
    };

    const resetNewEvent = () => {
        setNewEvent({
            title: "",
            description: "",
            start: "",
            end: "",
            color: "#3b82f6",
            category: "Work",
            reminder: false,
        });
    };

    const handleEventClick = (info) => {
        const selectedEvent = events.find(event => event.id === parseInt(info.event.id));
        if (selectedEvent) {
            setNewEvent(selectedEvent);
            setEditingEvent(selectedEvent);
            setShowModal(true);
        }
    };

    const handleDeleteEvent = () => {
        setEvents(events.filter((event) => event.id !== editingEvent.id));
        setShowModal(false);
        toast.success("Event Deleted!");
    };

    return (
        <div className="flex-1 overflow-auto bg-gray-900 min-h-screen">
            <Header title="Calendar" />
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="flex flex-col items-center md:p-2 sm:p-8">
                
                <div className="w-full max-w-screen-lg bg-gray-800 p-6 rounded-lg shadow-xl overflow-x-auto">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{ 
                            left: "prev,next today", 
                            center: "title", 
                            right: "dayGridMonth,timeGridWeek,timeGridDay" 
                        }}
                        events={events}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        selectable={true}
                        height={600}
                        eventContent={(eventInfo) => (
                            <div 
                                style={{ backgroundColor: eventInfo.event.extendedProps.color }} 
                                className="p-1 rounded text-white text-center"
                            >
                                {eventInfo.event.title}
                            </div>
                        )}
                    />
                </div>
            </div>

            {showModal && (
                <motion.div 
                    className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60 p-4"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl w-full 
                        sm:max-w-full md:max-w-md lg:max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-2xl font-semibold text-gray-100">
                                {editingEvent ? "Edit Event" : "Create New Event"}
                            </h2>
                            <FiX className="text-gray-400 hover:text-white cursor-pointer text-2xl" 
                                onClick={() => setShowModal(false)} 
                            />
                        </div>

                        {/* Event Type Selection */}
                        <select 
                            value={eventType} 
                            onChange={(e) => setEventType(e.target.value)}
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                        >
                            {categories.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>

                        {/* Event Title */}
                        <input 
                            type="text" 
                            placeholder={`${eventType} Title`}
                            value={newEvent.title} 
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md"
                        />

                        {/* Event Description */}
                        <textarea 
                            placeholder={`${eventType} Description`}
                            value={newEvent.description} 
                            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
                            className="w-full p-3 mb-4 bg-gray-700 text-gray-100 rounded-md" 
                            rows="3"
                        />

                        {/* Date & Time Inputs */}
                        <div className="flex space-x-4 mb-4">
                            <input 
                                type="datetime-local" 
                                value={newEvent.start} 
                                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                                className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-md"
                            />
                            <input 
                                type="datetime-local" 
                                value={newEvent.end} 
                                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                                className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-md"
                            />
                        </div>

                        {/* Reminder Option */}
                        <div className="flex items-center space-x-2 mb-4">
                            <input 
                                type="checkbox" 
                                checked={newEvent.reminder} 
                                onChange={() => setNewEvent({ ...newEvent, reminder: !newEvent.reminder })}
                            />
                            <FiBell className="text-gray-400" />
                            <span className="text-gray-300">Set Reminder</span>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button 
                                onClick={handleModalSubmit} 
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            >
                                {editingEvent ? "Update" : "Save"}
                            </button>
                            {editingEvent && (
                                <button 
                                    onClick={handleDeleteEvent} 
                                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            )}
                            <button 
                                onClick={() => setShowModal(false)} 
                                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
            </motion.div>
        </div>
    );
};

export default Calendar;
