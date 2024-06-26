import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container p-10  flex flex-col gap-2 text-center justify-center items-center">
        <h2 className="title">Contact Me</h2>
        <p className="w-1/3">
          Have a project in mind or want to collaborate? Fill out the form below
          or reach me at
          <a className="text-[#5092d4]" href="mailto:quovein@gmail">
            quovein@gmail
          </a>
        </p>
        <form
          className="border flex flex-col gap-2 bg-white/90 p-4 w-1/2 rounded-lg"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="733cbd53-2431-4402-a03e-81bc22b2c276"
          />
          <div>
            <label className="text-gray-700 font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              aria-required="true"
              name="email"
            />
          </div>
          <div>
            <label className="text-gray-700 font-bold" htmlFor="subject">
              Subject
            </label>
            <input
              className="input"
              id="subject"
              type="text"
              aria-required="true"
              name="subject"
            />
          </div>
          <div>
            <label className="text-gray-700 font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="input resize-none min-h-48"
              id="message"
              aria-required="true"
              name="message"
            />
          </div>
          <button className="btn bg-[#5092d4]" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
