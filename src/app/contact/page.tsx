// pages/contact.js

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h1>
        <p className="text-gray-600 text-center mb-4">
          If you’d like to connect or have any questions, please feel free to reach out. I'd love to hear from you!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
