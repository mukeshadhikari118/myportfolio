export default function handler(req, res) {
    res.status(200).json([
        {
            id:1,
            title:"Dokan",
            img:'/dokan3.webp',
            desc:"Dokan is an all-inclusive ecommerce hub for clothing, featuring diverse categories for men, women, and sports apparel. With an intuitive interface, users effortlessly browse, compare, and purchase items. The platform ensures secure transactions via Stripe, offering a seamless shopping experience.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n",
            tools: ["MongoDB", "Express JS", "Node JS", "React", "Tailwind CSS", "redux","JWT", "stripe"],
            livelink: ""

        },
        {
            id:2,
            title:"Next School",
            img:'/school.webp',
            desc:"The school website provides essential school details, news, photos, and student registration. Recently, it introduced a blog section for students to create and share blogs, encouraging interactive learning and sharing experiences.",
            tools: ["MongoDB", "Next JS", "Tailwind CSS", "NextAuth"],
            livelink: "https://sankalpa-school.vercel.app/"
        },
        {
            id:3,
            title:"Weather App",
            img:'/deinzeit.webp',
            desc:"This Weather Tracker web application provides real-time information about the current time and weather details of any chosen city. With a sleek and intuitive interface, users can easily access essential weather data for their desired location, helping them plan their activities effectively.",
            tools: ["Next JS", "Tailwind CSS"],
            livelink: "https://dein-zeit.vercel.app/"
        },
    ])
  }