export default function handler(req, res) {
    res.status(200).json([
        {
            id:1,
            title:"Dokan",
            img:'/dokan3.png',
            desc:"Dokan is an ecommerce website of clothes where a user can view, compare and buy clothes easily.",
            tools: ["MongoDB", "Express JS", "Node JS", "React", "Tailwind CSS", "redux","JWT", "stripe"],
            livelink: ""

        },
        {
            id:2,
            title:"Next School",
            img:'/school.png',
            desc:"It is a school website which shows all the details of a school. User can view news, school photos and register new student.",
            tools: ["MongoDB", "Next JS", "Tailwind CSS", "NextAuth"],
            livelink: "https://sankalpa-school.vercel.app/"
        },
        {
            id:3,
            title:"Weather App",
            img:'/deinzeit.png',
            desc:"This web app which shows the time and current weather details of a particular city.",
            tools: ["Next JS", "Tailwind CSS"],
            livelink: "https://dein-zeit.vercel.app/"
        },
    ])
  }