export default function Services() {
    const services = [
        {
            name: 'Airbnb Data Analysis',
            icon: './assets/airbnb.png',
            description: 'Analyzed Airbnb listings data to identify pricing trends, availability patterns, and key factors influencing rental prices using Python, SQL, and Excel.',
            link: 'https://github.com/Abdul-malik109/Airbnb-Hotel-Booking-Analysis',
        },
        {
            name: 'Zepto Sales Analysis',
            icon: './assets/zepto.png',
            description: 'Performed exploratory data analysis on Zepto sales data to understand customer demand, product performance, and order trends to support business decision-making.',
            link: 'https://github.com/Abdul-malik109/Zepto-SQL-Data-Analysis',
        },
        {
            name: 'Call Center Performance Analysis',
            icon: './assets/customer-service.png',
            description: 'Analyzed call center data to evaluate agent performance, call resolution time, and customer satisfaction metrics using Excel and Power BI.',
            link: 'https://github.com/Abdul-malik109/Call-Center-Performance-Analysis',
        },
        {
            name: 'Customer Behaviour Analysis',
            icon: './assets/customer-review.png',
            description: 'Studied customer behavior data to identify purchasing patterns, retention trends, and insights that help improve customer engagement strategies.',
            link: 'https://github.com/Abdul-malik109/Customer-Behavior-Analysis',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Work</h4>
            <h2 className="text-center text-5xl font-Ovo">Data Analytics Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Here are some of the data analytics projects I have worked on, 
                focusing on data cleaning, analysis, and deriving actionable business insights.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}