export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="/assets/profile pic.jpeg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Abdul Malik B
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Aspiring Data Analyst.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I am a pre-final year B.Tech Computer Science student at SRM IST Trichy, 
                passionate about data analytics, with hands-on skills in Python, SQL, Excel, and data visualization. 
                I enjoy transforming raw data into meaningful insights.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                
                <a href="Abdul_Malik_Data_Analyst_Resume.pdf" download
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    Resume <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>
                <a href="https://github.com/Abdul-malik109"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    Github <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>
                <a href="https://www.linkedin.com/in/abdulml87/"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    LinkedIN<img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>
            </div>
        </div>
    )
}