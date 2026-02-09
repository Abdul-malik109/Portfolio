export default function Work() {
    const work = [
        {
            name: 'Intro to Data Analysis with Python',
            icon: '',
            description: 'Code Signal',
            link: 'https://github.com/Abdul-malik109/Certifications/blob/main/Intro%20to%20Data%20Analysis.png',
        },
        {
            name: 'Excel for Data Analysis',
            icon: '',
            description: 'Chegg',
            link: 'https://github.com/Abdul-malik109/Certifications/blob/main/Excel%20Certification%20.jpeg',
        },
        {
            name: 'Power BI Certification',
            icon: '',
            description: 'Udemy',
            link: 'https://github.com/Abdul-malik109/Certifications/blob/main/Udemy%20Power%20BI%20Certification.jpg',
        },
        {
            name: 'Statistical Python',
            icon: '',
            description: 'Code Signal',
            link: 'https://github.com/Abdul-malik109/Certifications/blob/main/Statistical%20python%20for%20DS.png',
        },
        {
            name: 'Visualization for Data Analysis',
            icon: '',
            description: 'Code Signal',
            link: 'https://github.com/Abdul-malik109/Certifications/blob/main/Visualisation%20for%20Data%20Analysis.png',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">My Certifications</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Certifications that strengthen my foundation in data analysis,
                visualization, and analytical tools.</p>

            <div className="grid grid-cols-auto my-10 gap-1 dark:text-black">
                {work.map((work) => (
                    <a key={work.name} href={work.link} target="_blank" rel="noopener noreferrer" className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 h-32 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold line-clamp-2">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <a href="https://github.com/Abdul-malik109/Certifications" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}