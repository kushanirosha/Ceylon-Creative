import React from 'react'

const affordableData = [
    { title: "Branding Collateral", desc: "Consistency is key in branding. We'll ensure that all your branding collateral.", bg: "bg-purple-100", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" },
    { title: "Cutting-Edge Technologies", desc: "Our team stays abreast of the latest technologies and trends.", bg: "bg-green-100", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3m-7.5 3a6 6 0 01-.75-3.5 9 9 0 0118 0A6 6 0 0118 17H6.75z" },
    { title: "Strategic Approach", desc: "We don't just focus on aesthetics; we take a strategic approach to Creative design.", bg: "bg-blue-100", icon: "M9 12l2 2 4-4m5.5-6a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "User-Centric Design", desc: "User experience is paramount in the digital realm.", bg: "bg-yellow-100", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Creative Expertise", desc: "Our team of talented graphic designers brings a wealth of creative expertise to every project.", bg: "bg-orange-100", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 114 0 2 2 0 01-4 0zM7 10a2 2 0 114 0 2 2 0 01-4 0z" },
    { title: "Comprehensive Support", desc: "Our commitment to your success extends beyond the launch of your Business.", bg: "bg-red-100", icon: "M17 20h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2-10a2 2 0 012-2h2a2 2 0 012 2m-4 4h8m-12-2v8" },
];

const AffordableData = () => {
    return (
        <div>
            <div className="bg-gray-50 py-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">Why we're affordable</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {affordableData.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className={`${item.bg} rounded-full p-4 w-16 h-16 flex items-center justify-center`}>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AffordableData
