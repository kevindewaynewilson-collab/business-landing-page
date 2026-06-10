import "./index.css";

const services = [
  {
    title: "One-Page Websites",
    description:
      "Clean, simple, professional websites for small businesses, ministries, consultants, and personal brands.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages designed to explain your service, build trust, and guide visitors toward taking action.",
  },
  {
    title: "Website Updates",
    description:
      "Basic content updates, section improvements, layout cleanup, and contact information changes.",
  },
  {
    title: "Business Workflow Tools",
    description:
      "Simple dashboards and trackers that help organize tasks, leads, support requests, and business processes.",
  },
];

const benefits = [
  "Clean and professional design",
  "Mobile-friendly page layout",
  "Clear service messaging",
  "Simple call-to-action sections",
  "Organized content structure",
  "Built with practical business needs in mind",
];

const packages = [
  {
    name: "Basic Update",
    price: "$50",
    description:
      "Best for simple website updates, content edits, contact changes, or basic section cleanup.",
    features: ["Text updates", "Basic layout cleanup", "Contact info update"],
  },
  {
    name: "Landing Page",
    price: "$150",
    description:
      "Best for a clean one-page landing page for a service, business, ministry, or personal brand.",
    features: ["Hero section", "Services section", "Contact section"],
  },
  {
    name: "Professional Page",
    price: "$300",
    description:
      "Best for a stronger one-page website with multiple sections, pricing, FAQ, and a polished structure.",
    features: ["Full page layout", "Pricing section", "FAQ section"],
  },
];

const faqs = [
  {
    question: "Do you build full websites?",
    answer:
      "This sample focuses on one-page websites and landing pages. Larger websites can be planned as a custom project.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "You can provide your own content, or I can help organize basic website text based on your business information.",
  },
  {
    question: "Can you update an existing website?",
    answer:
      "Yes. Basic website updates can include text changes, section cleanup, layout improvements, and contact information updates.",
  },
  {
    question: "Will the page work on mobile?",
    answer:
      "Yes. The layout is designed to be clean and responsive on desktop, tablet, and mobile screens.",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-xl font-bold">Wilson Web Solutions</h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold mb-3">
              Websites • Landing Pages • Business Tools
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Clean websites for small businesses, ministries, and
              professionals.
            </h2>

            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              I help businesses and organizations create simple, professional,
              mobile-friendly landing pages that make their message clear and
              easy to find online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                Request a Project
              </a>

              <a
                href="#pricing"
                className="border border-white/20 hover:border-blue-400 px-6 py-3 rounded-lg font-semibold text-center"
              >
                View Packages
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="bg-slate-900 rounded-xl p-5 border border-white/10">
              <p className="text-sm text-slate-400 mb-2">Sample Result</p>
              <h3 className="text-2xl font-bold mb-3">
                Professional Landing Page
              </h3>
              <p className="text-slate-300 mb-5">
                A clean layout with services, pricing, FAQ, and a clear call to
                action.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-400">Sections</p>
                  <p className="text-2xl font-bold">7</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-400">Mobile Ready</p>
                  <p className="text-2xl font-bold">Yes</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-400">CTA</p>
                  <p className="text-2xl font-bold">Clear</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-400">Layout</p>
                  <p className="text-2xl font-bold">Clean</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-blue-600 font-semibold mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Website and workflow support for growing businesses.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-100 text-slate-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2">
              Why This Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Your website should make your message clear.
            </h2>
            <p className="text-slate-600 text-lg">
              A good landing page does not need to be complicated. It needs to
              explain who you are, what you offer, why it matters, and how
              people can contact you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
              >
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-16 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Simple packages for simple website needs.
            </h2>
            <p className="text-slate-600 mt-3">
              These sample packages are designed for one-page website and
              landing page projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((item) => (
              <div
                key={item.name}
                className="border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col"
              >
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-4xl font-bold text-blue-600 mt-4">
                  {item.price}
                </p>
                <p className="text-slate-600 mt-4">{item.description}</p>

                <ul className="space-y-2 mt-6 flex-1">
                  {item.features.map((feature) => (
                    <li key={feature} className="text-slate-700">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 bg-slate-900 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-16 bg-slate-100 text-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-semibold mb-2">Ready to Improve Your Page?</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Let’s build a clean landing page for your business or brand.
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            This sample landing page shows the type of clean, organized layout I
            can create for small businesses, ministries, professionals, and
            service providers.
          </p>

          <div className="bg-white text-slate-900 rounded-2xl p-6 max-w-2xl mx-auto text-left">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Name</p>
                <p className="font-semibold">Kevin Wilson</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Service Area</p>
                <p className="font-semibold">Web & IT Solutions</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Services</p>
                <p className="font-semibold">
                  Websites, landing pages, updates
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Call to Action</p>
                <p className="font-semibold">Message me to get started</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6 bg-slate-950 border-t border-white/10 text-center text-slate-400">
        <p>
          © 2026 Wilson Web Solutions. Built as a React landing page portfolio
          project.
        </p>
      </footer>
    </main>
  );
}

export default App;