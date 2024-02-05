import axios from "axios";
import React, { useState } from "react";
import { VscCallOutgoing } from "react-icons/vsc";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");

  const token = "5850891292:AAEloOzyUHZkmtt6lytPkuOlsiVVH2l_Z6k";
  const chatId = "557596863";

  const onSubmit = (evt) => {
    evt.preventDefault();
    let fullText = `\u{2705} Name: ${fullName}%0A\u{2705} Phone Number: \u{FF0B}998${number}`;

    // --- Sent Message for Telegram
    axios
      .post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
      )
      .then(toast.success("Successfully toasted!"))
      .catch(toast.error("This didn't work."));
  };

  return (
    <section className="container !pt-[80px] sm:pt-[120px] ">
      <Toaster />
      <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
        <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
        Contact{" "}
        <span className="inline-block ml-2">
          <VscCallOutgoing className="text-lg sm:text-xl" />
        </span>
        <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
      </h2>
      <div className="flex items-center justify-center mt-8 sm:mt-12">
        <div className="w-full max-w-[340px] sm:max-w-[450px]">
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded-2xl px-4 sm:px-8 pt-[25px] sm:pt-[50px] pb-5 sm:pb-10"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Full name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                id="username"
                type="text"
                autoComplete="off"
                onChange={(e) => setFullName(e.target.value.trim())}
                placeholder="Full name..."
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="text"
              >
                Phone number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-700"
                id="password"
                type="text"
                autoComplete="off"
                onChange={(e) => setNumber(e.target.value.trim())}
                placeholder="+998 97 000 00 00"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="max-w-[150px] w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
