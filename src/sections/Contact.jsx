import React from "react";

function Contact() {
  return (
    <section className="bg-blue">
      <div className="w-full max-w-md mx-auto py-8">
        <h2 className="mb-16 text-xl font-bold text-center">Contact Me</h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="733cbd53-2431-4402-a03e-81bc22b2c276"
          />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              aria-required="true"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Let me know how I can help you"
              aria-required="true"
              name="subject"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="resize-none min-h-48 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message..."
              aria-required="true"
              name="message"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-btn hover:bg-btnDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
