import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {StarIcon} from "@heroicons/react/solid";
import PageIntro from "./PageIntro";
import {useSelector} from "react-redux";

function Experience(props) {
    const mode = useSelector((state) => state.theme?.theme);
    const experienceItems = [
        {
            id: 1,
            date: 'Nov 2022 - Feb 2023',
            title: "Software Engineering Intern",
            current: false,
            desc: "\n" +
                "I collaborated with the frontend team to refine the Hamro Pay wallet's interface, enhancing user experience. By implementing utility payment services such as Internet, Electricity, TV, Mobile recharge, and Insurance, I streamlined payments and increased user engagement. Additionally, I integrated cash flow visualization using Apex Charts for improved financial management. My expertise in Svelte, React, gRPC, Ant Design, and Apex Charts advanced the Hamro Pay wallet technologically, introducing efficient and visually appealing features."
        },
        {
            id: 2,
            date: 'Feb 2023 - Present',
            title: "Associate Software Engineer",
            current: true,
            desc: "As a key contributor to the Hamro Pay project, I spearheaded the expansion of the Hamro Pay wallet, leveraging Svelte, gRPC, and TypeScript. This resulted in a rapid acquisition of 100,000 users within the first month. I enhanced user engagement by integrating new services like flight and bus ticketing, bluebook renewal, and traffic fine payment. Additionally, I developed and optimized the Hamro Pay Admin frontend using React JS, gRPC, TypeScript, Ant Design, and Tailwind CSS, streamlining KYC verification and ledger management. I engineered and maintained over 15 highly reusable components to ensure a scalable codebase. Moreover, I played a key role in successfully onboarding major merchants like Bhat Bhateni supermarket and Himalayan Java Coffee to the Hamro Pay Merchant platform, incorporating crucial features such as bank offload, user-to-user transfer, bulk transfer, and QR config. Lastly, I designed a static website for Hamro Pay using SvelteKit, facilitating enhanced marketing initiatives and showcasing merchant offers."
        }
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
                                <p className='font-semibold'>{item.title}</p>
                                {item?.current && (
                                    <span
                                        className="animate-pulse text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900">Present
                                </span>
                                )}
                            </div>

                            <time
                                className={`block mb-2 text-sm font-normal leading-none italic ${mode? "text-gray-100": "text-gray-400"} pt-3`}>{item?.date}
                            </time>
                            <p className={`${mode? "text-gray-200": "text-gray-500"} mb-4`}>
                                {item?.desc}</p>
                        </li>
                    ))}
                </ol>


            </div>
        </div>
    );
}

export default Experience;