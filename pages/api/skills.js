export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "HTML",
      percent: 80
    },
    {
        id: 2,
        title: "CSS",
        percent: 60
      },
      {
        id: 3,
        title: "Javascript",
        percent: 70
      },
      {
        id: 4,
        title: "React",
        percent: 70
      },
      {
        id: 5,
        title: "Next JS ",
        percent: 70
      },
      {
        id: 6,
        title: "Tailwind CSS",
        percent: 80
      },
      {
        id: 7,
        title: "Node JS",
        percent: 50
      },
      {
        id: 8,
        title: "MongoDB",
        percent: 50
      },
      {
        id: 9,
        title: "Python",
        percent: 50
      },
      {
        id: 10,
        title: "Ruby",
        percent: 50
      },
  ]);
}
