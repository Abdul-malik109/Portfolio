export default function About() {
    const tools = [
        { name: 'Excel', icon: './assets/excel.png', },
        { name: 'Power BI', icon: './assets/power bi.png', },
        { name: 'SQL', icon: './assets/sql.png', },
        { name: 'Python', icon: './assets/python.png', },
        { name: 'Git', icon: './assets/git.png', },
        { name: 'GitHub', icon: './assets/github.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code.png',
            icon2: './assets/code.png',
            description: 'Python, SQL',
        },
        {
            name: 'Visualization',
            icon1: './assets/data-analysis.png',
            icon2: './assets/data-analysis.png',
            description: 'Excel, Power BI, Pandas, Numpy, Matplotlib, Seaborn',
        },
        {
            name: 'Database',
            icon1: './assets/databse.png',
            icon2: './assets/databse.png',
            description: 'MySQL',
        },
        {
            name: 'Tools',
            icon1: './assets/development-tool.png',
            icon2: './assets/development-tool.png',
            description: 'Git, Github, Jupyter Notebook',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I am a pre-final year B.Tech Computer Science student with a 
                        strong interest in data analytics. I enjoy working with data to uncover patterns, insights, and 
                        trends that support better business decision-making. <br /> <br />

                        I have hands-on experience with Python, SQL, Excel, and data visualization tools, 
                        and I am currently building real-world projects to strengthen my analytical and 
                        problem-solving skills. I am actively seeking data analyst internship opportunities 
                        where I can learn and contribute.
</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}