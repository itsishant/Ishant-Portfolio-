export const Contact = () => {
    return (
      <section id="contact" className=" py-20 px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 border-2 border-amber-50 rounded-2xl p-8 space-y-8">
          {/* Header */}
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-white text-center">
            I check emails regularly—feel free to reach out!
          </p>
  
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
              ></textarea>
            </div>
            <button
              type="submit" 
              className="w-full py-3  bg-slate-900 hover:bg-slate-500 text-white font-bold rounded-lg transition"
            >
              Send Message
            </button>
          </form>
  
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="mailto:modakmania@gmail.com"
              className="text-slate-400 hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/itsishant"
              target="_blank"
              rel="noopener"
              className="text-slate-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ishant-gupta-652585328"
              target="_blank"
              rel="noopener"
              className="text-slate-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
  );
  }
  