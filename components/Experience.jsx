import React from 'react';
import PageIntro from "./PageIntro";
import {useSelector} from "react-redux";

function Experience(props) {
    const mode = useSelector((state) => state.theme?.theme);
    const experienceItems = [
        {
            id: 2,
            date: 'Feb 2023 - Present',
            title: "Associate Software Engineer",
            current: true,
            points: ["Spearheaded expansion of Hamro Pay wallet, resulting in acquisition of 100,000 users within the first month.",
                "Enhanced user engagement by integrating new services including flight and bus ticketing, bluebook renewal, and traffic fine payment.",
                "Developed and optimized Hamro Pay Admin frontend using React JS, streamlining KYC verification and ledger management.",
                "Engineered and maintained over 15 highly reusable components to ensure a scalable codebase.",
                "Incorporated crucial features such as bank offload, user-to-user transfer, bulk transfer, and QR config for merchant platform.",
                "Played a key role in successfully onboarding major merchants like Bhat Bhateni supermarket and Himalayan Java Coffee to the Hamro Pay Merchant platform.",
                "Designed a static website for Hamro Pay to facilitate enhanced marketing initiatives and showcase merchant offers."

            ]
        },
        {
            id: 1,
            date: 'Nov 2022 - Feb 2023',
            title: "Software Engineering Intern",
            current: false,
            points: ["Collaborated with frontend team to refine Hamro Pay wallet's interface, enhancing user experience.",
                "Implemented utility payment services such as Internet, Electricity, TV, Mobile recharge, and Insurance to streamline payments and increase user engagement.\n",
                "Integrated cash flow visualization using Apex Charts for improved financial management.",
                "Introduced efficient and visually appealing features to the wallet."
            ]
        },
    ]
    return (
        <div id='experience'>
            <PageIntro
                title="experience"
                description="This section highlights my professional work history, including previous job positions or internship works that I have undertaken"
            />
            <div className=' max-w-5xl mx-auto px-7 pb-5 selection:bg-yellow-400'>

                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {experienceItems.map((item)=>(
                        <li key={item?.id} className="mb-10 ms-6">
        <span
            className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
                            <div className='flex items-center space-x-3'>
                                <h2 className='font-semibold'>{item.title}</h2>
                                {item?.current && (
                                    <span
                                        className="animate-pulse text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900">Current
                                </span>
                                )}
                            </div>

                            <time
                                className={`block mb-2 text-sm font-normal leading-none italic ${mode? "text-gray-100": "text-gray-400"} pt-3`}>{item?.date}
                            </time>
                            <ul className='list-disc space-y-2'>
                                {item?.points.map((point)=>(
                                    <React.Fragment key={point}>
                                        <li className={`${mode? "text-gray-200": "text-gray-500 "}`}>
                                            {point}</li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>


            </div>
        </div>
    );
}

export default Experience;