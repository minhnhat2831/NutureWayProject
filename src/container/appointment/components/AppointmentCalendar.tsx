export default function AppointmentCalendar() {
    const days = [
        { day: '11', week: 'Mon' },
        { day: '12', week: 'Tue' },
        { day: '13', week: 'Wed' },
        { day: '14', week: 'Thu' },
        { day: '15', week: 'Fri' },
    ];

    return (
        <div className="w-95 rounded-4xl bg-white p-6">
            <div className="flex gap-4 overflow-x-auto pb-3">
                {days.map((item, index) => {
                    const active = index === 0;

                    return (
                        <div
                            key={item.day}
                            className="flex flex-col items-center min-w-16">
                            <button
                                className={`
                    w-16 h-16 rounded-full border transition-all duration-300
                    flex items-center justify-center text-lg font-semibold
                    ${active
                                        ? 'bg-violet-700 text-white border-violet-700 shadow-lg'
                                        : 'bg-white text-black border-gray-300 hover:border-violet-500'
                                    }`}>
                                {item.day}
                            </button>

                            <span
                                className={`mt-2 text-sm ${active ? 'text-violet-700 font-medium' : 'text-gray-500'
                                    }`}>
                                {item.week}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
                <button className="text-3xl text-gray-700 hover:scale-110 transition">
                    ‹
                </button>

                <div className="px-6 py-3 rounded-full border border-gray-200 shadow-sm text-gray-700 font-medium">
                    11 May 2026
                </div>

                <button className="text-3xl text-gray-700 hover:scale-110 transition">
                    ›
                </button>
            </div>
        </div>
    );
}
