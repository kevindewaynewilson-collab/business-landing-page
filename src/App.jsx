import "./index.css";

function App() {
  return (
    <main className="bg-white text-slate-900">
      <header className="px-6 py-5 max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Kingdom Tech Solutions</h1>
        <a href="#contact" className="bg-slate-900 text-white px-4 py-2 rounded-lg">
          Get Started
        </a>
      </header>

      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            Websites. Automation. Business Tools.
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Helping businesses build better systems with technology.
          </h2>

          <p className="text-slate-600 mt-5 text-lg">
            We help small businesses create clean websites, organize workflows,
            and automate repetitive tasks so they can save time.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 font-semibold"
          >
            Request a Consultation
          </a>
        </div>

        <div className="bg-slate-100 rounded-2xl p-8">
          <h3 className="font-bold text-2xl mb-4">What We Build</h3>
          <ul className="space-y-3 text-slate-700">
            <li>✓ Business websites</li>
            <li>✓ Landing pages</li>
            <li>✓ Workflow dashboards</li>
            <li>✓ Internal business tools</li>
            <li>✓ Automation planning</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Services</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3">Business Websites</h4>
              <p className="text-slate-600">
                Professional websites for small businesses and service providers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3">Automation Tools</h4>
              <p className="text-slate-600">
                Tools that reduce repetitive work and save time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-3">Custom Dashboards</h4>
              <p className="text-slate-600">
                Dashboards to track tickets, clients, tasks, and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to improve your business systems?</h3>
          <p className="text-slate-300 mb-6">
            Contact us for websites, dashboards, or automation planning.
          </p>
          <p>Email: kevindewaynewilson@gmail.com</p>
        </div>
      </section>
    </main>
  );
}

export default App;