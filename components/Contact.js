import React from "react";
import { useSelector } from "react-redux";
import PageIntro from "./PageIntro";

function Contact() {
  const mode = useSelector((state) => state.theme?.theme);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main
      id="contact"
      className={`bg-gradient-to-b ${
        mode ? "to-gray-900 from-gray-800" : "to-gray-100 from-gray-200"
      } pt-2  pb-20`}
    >
      <PageIntro
        title="contact"
        description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
      />
      <form
        onSubmit={handleSubmit}
        className={` ${
          mode ? "bg-black/60" : "bg-white"
        } md:w-1/2 md:mx-auto mx-6 px-6 md:px-10 py-6 md:py-10 rounded-md shadow-xl flex flex-col space-y-5 md:space-y-10`}
      >
        <div className="flex flex-col space-y-3">
          <label
            className={`tracking-widest text-xs ${
              mode ? "text-gray-300" : "text-gray-700"
            } text-gray-700 font-semibold`}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={` ${
              mode ? "bg-gray-800 border-none" : "bg-gray-100"
            } border py-4 px-3 outline-none text-sm rounded-md`}
            type="text"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className={`tracking-widest text-xs ${
              mode ? "text-gray-300" : "text-gray-700"
            } text-gray-700 font-semibold`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={` ${
              mode ? "bg-gray-800 border-none" : "bg-gray-100"
            } border py-4 px-3 outline-none text-sm rounded-md`}
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className={`tracking-widest text-xs ${
              mode ? "text-gray-300" : "text-gray-700"
            } text-gray-700 font-semibold`}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={` ${
              mode ? "bg-gray-800 border-none" : "bg-gray-100"
            } border py-4 px-3 outline-none text-sm rounded-md resize-none`}
            name="message"
            placeholder="Enter Your Message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:-translate-y-1 md:max-w-fit md:ml-auto shadow-xl tracking-wider text-sm uppercase font-bold text-gray-800 py-3 md:py-5 px-16 transition-all duration-500 rounded-lg"
        >
          submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
