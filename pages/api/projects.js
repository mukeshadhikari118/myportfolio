export default function handler(req, res) {
    res.status(200).json([
        {
            id:1,
            title:"Dokan",
            img:'/dokan3.png',
            desc:"Dokan is an ecommerce website made with MERN stack, Redux, Tailwind CSS"
        },
        {
            id:2,
            title:"Next School",
            img:'/school.png',
            desc:"It is a school website created using Next JS and MongoDB and uses NextAuth for authentication. Tailwind CSS is used in styling."
        },
        {
            id:3,
            title:"Weather App",
            img:'/deinzeit.png',
            desc:"This web app created using Next JS which shows the current weather details of a particular city."
        },
    ])
  }