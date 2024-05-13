import React from "react";

function Contact() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-center">Contact Me</h2>
      <form
        className="flex flex-col gap-2 bg-white/90 p-4 w-1/2 rounded-lg mx-auto"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="733cbd53-2431-4402-a03e-81bc22b2c276"
        />
        <div className="">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Email"
            aria-required="true"
            name="email"
          />
        </div>
        <div className="">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="input"
            id="subject"
            type="text"
            placeholder="Let me know how I can help you"
            aria-required="true"
            name="subject"
          />
        </div>
        <div className="">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="input resize-none min-h-48"
            id="message"
            placeholder="Message..."
            aria-required="true"
            name="message"
          />
        </div>
        <button className="btn w-full flex justify-center" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
