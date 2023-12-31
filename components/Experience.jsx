import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {StarIcon} from "@heroicons/react/solid";
import PageIntro from "./PageIntro";
import {useSelector} from "react-redux";

function Experience(props) {
    const mode = useSelector((state) => state.theme?.theme);
    return (
        <div id='experience'>
            <PageIntro
                title="experience"
                description="This section highlights my professional work history, including previous job positions or internship works that I have undertaken"
            />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2022 - Feb 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    }
                >
                   <div className={`${mode ? "bg-gray-800":"bg-white"} text-white p-4`}>
                       <h3 className={`${mode ? "text-white":"text-black"} vertical-timeline-element-title font-bold`}>Software Engineering Intern</h3>
                       <p className={`${mode ? "text-white":"text-black"} font-light`}>Frontend Developer</p>
                       <h4 className="vertical-timeline-element-subtitle text-red-500 font-bold">Hamro Patro Inc.</h4>
                       <p className={` ${mode ? "text-white":"text-gray-900"} text-sm`}>
                           <span className='font-bold uppercase text-base mr-3'> Tech stack : </span>  Svelte, Tailwind CSS, TypeScript, gRPC
                       </p>
                       <p className={`${mode? "text-white":"text-gray-500"} text-sm`}>During this 3 months I was involved with the frontend team to make smooth user interface in Hamro Pay, a new payment wallet system in Nepal. I gained hands-on experience in svelte, GRPC Web and Typescript. </p>
                   </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 2023 - Current"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    }
                >
                    <div className={`${mode ? "bg-gray-800":"bg-white"} text-white p-4`}>
                        <h3 className={`${mode ? "text-white":"text-black"} vertical-timeline-element-title font-bold`}>Associate Software Engineer</h3>
                        <p className={`${mode ? "text-white":"text-black"} font-light`}>Frontend Developer</p>
                        <h4 className="vertical-timeline-element-subtitle text-red-500 font-bold">Hamro Patro Inc.</h4>
                        <p className={` ${mode ? "text-white":"text-gray-900"} text-sm`}>
                            <span className='font-bold uppercase text-base mr-3'>Tech stack : </span> Svelte, Tailwind CSS, TypeScript, gRPC, React.js, Ant Design, Apex charts
                        </p>
                        <p  className= {`${mode? "text-white":"text-gray-500"} text-sm`}>I enhanced and diversified Hamro Pay's wallet features, integrating utility and bank services, and overseeing the Hamro Pay Admin frontend. I streamlined KYC verification, developed key functionalities for Hamro Pay Merchant, and maintained a static website for marketing initiatives. Collaborating with the fintech team, I optimized code, created reusable components, and mentored interns to help them excel in their roles.

                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
}

export default Experience;