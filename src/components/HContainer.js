import { useState } from 'react';
import { FaPaperPlane, FaCalendarAlt, FaUsers, FaShieldAlt, FaSearch, FaCommentDots, FaQuestionCircle } from 'react-icons/fa';
import '../Styles/HContainer.css';
function HContainer() {
    const [name, setName] = useState('');

    const announcements = [
        { text: "Exam registration deadline extended to **November 15th**.", icon: FaPaperPlane, color: "blue" },
        { text: "Guest Lecture by Dr. Sharma on AI: **November 8th, 10 AM, Auditorium**.", icon: FaCalendarAlt, color: "green" },
        { text: "New student club applications are now **open until Nov 20th**.", icon: FaUsers, color: "purple" },
        { text: "Reminder: Library will be closed for maintenance on **November 10th**.", icon: FaCalendarAlt, color: "orange" },
        { text: "Cultural Fest auditions open **November 1st**.", icon: FaUsers, color: "teal" }
    ];

    const getColors = (colorType) => {
        switch(colorType) {
            case "blue": return { bg: "bg-blue-100", text: "text-blue-800", icon: "text-blue-500" };
            case "green": return { bg: "bg-green-100", text: "text-green-800", icon: "text-green-500" };
            case "purple": return { bg: "bg-purple-100", text: "text-purple-800", icon: "text-purple-500" };
            case "orange": return { bg: "bg-orange-100", text: "text-orange-800", icon: "text-orange-500" };
            case "teal": return { bg: "bg-teal-100", text: "text-teal-800", icon: "text-teal-500" };
            default: return { bg: "bg-gray-100", text: "text-gray-800", icon: "text-gray-500" };
        }
    };

    return (
        <main>
\        <section className="relative bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl p-6 md:p-10 mb-8 custom-shadow overflow-hidden">
                <div className="p-6 text-white">
                    <h1 className="text-4xl font-bold">Hello, Alex!</h1>
                    <p className="text-lg mt-2">
                        Welcome to your college hub. What's on your mind today?
                    </p>
                    <br />
                    <div className="flex space-x-4">
                        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
                            View My Profile
                        </button>
                        <button className="text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                            Report Emergency
                        </button>
                    </div>
                </div>
            </section>
            <br />
            <div className="flex flex-col md:flex-row gap-6 px-6">
                <section className="bg-white py-6 px-6 rounded shadow-lg flex-1">
                    <h2 className="text-2xl font-extrabold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">
                        Important Announcements
                    </h2>
                    <div className="announcements-display-area relative overflow-hidden h-48">
                        <div className="announcements-scroller">
                            {announcements.map((announcement, index) => {
                                const IconComponent = announcement.icon;
                                const colors = getColors(announcement.color);
                                return (
                                    <div key={`item-1-${index}`} className={`announcement-item ${colors.bg} ${colors.text} p-3 rounded-lg mb-3 text-lg flex items-start space-x-3`}>
                                        <IconComponent className={`text-xl flex-shrink-0 mt-0.5 ${colors.icon}`} />
                                        <p dangerouslySetInnerHTML={{ __html: announcement.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                                    </div>
                                );
                            })}
                            {announcements.map((announcement, index) => {
                                const IconComponent = announcement.icon;
                                const colors = getColors(announcement.color);
                                return (
                                    <div key={`item-2-${index}`} className={`announcement-item ${colors.bg} ${colors.text} p-3 rounded-lg mb-3 text-lg flex items-start space-x-3`}>
                                        <IconComponent className={`text-xl flex-shrink-0 mt-0.5 ${colors.icon}`} />
                                        <p dangerouslySetInnerHTML={{ __html: announcement.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-6 px-6 rounded shadow-lg md:w-1/3">
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
                        Quick Links
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                            <FaShieldAlt className="text-red-500 text-3xl mb-2" />
                            <span className="text-gray-700 text-sm font-medium">Anti-Ragging</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                            <FaSearch className="text-orange-500 text-3xl mb-2" />
                            <span className="text-gray-700 text-sm font-medium">Lost & Found</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                            <FaCommentDots className="text-purple-500 text-3xl mb-2" />
                            <span className="text-gray-700 text-sm font-medium">Feedback</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                            <FaQuestionCircle className="text-red-500 text-3xl mb-2" />
                            <span className="text-gray-700 text-sm font-medium">Emergency</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HContainer;