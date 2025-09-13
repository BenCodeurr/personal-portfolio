import { XIcon, Linkedin, InstagramIcon, YoutubeIcon } from "lucide-react";
import TypeWriter from "./components/TypeWriter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const socialIcons = [
  { Icon: XIcon, href: "https://x.com/benmukanirwa" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/benmukanirwa/" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/__ben.mk/" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/@benmukanirwa" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      <Navbar />
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-8 min-h-screen">
        <div className="max-w-6xl w-full flex flex-col items-center text-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 md:col-span-2">
              <div className="space-y-2">
                <span className="inline-block px-4 py-1 text-sm text-white border border-white/30 rounded-full">
                  Hi👋, I&apos;m
                </span>
                <h1 className="text-6xl font-bold">
                  <span className="text-white">Ben </span>
                  <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">
                    Mukanirwa
                  </span>
                </h1>
              </div>

              <h2 className="text-xl text-gray-400">
                <TypeWriter
                  words={[
                    "Entrepreneur.",
                    "Software Engineer.",
                    "Innovator.",
                    "Tech Leader.",
                  ]}
                  typingSpeed={200}
                  deletingSpeed={150}
                  delayBetweenWords={1500}
                />
              </h2>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A dedicated tech leader with a passion to apply technology to
                create business outcomes or impact lives positively. I&apos;m
                calling Bunia, DRC, home for now but I&apos;m always just a
                flight/drive or a dream away from anywhere in the world.
              </p>

              <div className="flex gap-4 justify-center">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              <div className="text-white w-full pt-24">
                <h2 className="text-4xl font-bold mb-8">What I have Built</h2>
                <div className="bg-gradient-to-br from-orange-600 to-orange-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-5xl font-extrabold text-white mb-4 leading-tight">
                      Pikelo
                    </h3>
                    <p className="text-orange-100 text-lg mb-4 max-w-xl">
                      I co-founded Pikelo, a startup transforming how
                      Francophone professionals learn English with AI-powered
                      avatars, alongside three amazing co-founders from Côte
                      d’Ivoire, Togo, and Cameroon. We raised{" "}
                      <span className="font-bold">
                        $100K in pre-seed funding
                      </span>{" "}
                      and achieved a{" "}
                      <span className="font-bold">$1M valuation</span>.
                    </p>
                    <a
                      href="https://pikelo.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                    >
                      Visit Pikelo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-white w-full pt-24">
                <h2 className="text-4xl font-bold mb-8">How can I help?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-orange-500 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                      Speaker
                    </h3>
                    <p className="text-gray-300">
                      I am fluent in AI, startups, generative AI, and software
                      development, equipping audiences with the knowledge to
                      innovate and lead in the digital world.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-orange-500 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                      Tech Leadership & Consulting
                    </h3>
                    <p className="text-gray-300">
                      Guiding teams and businesses in technology strategy and
                      implementation.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-orange-500 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                      Innovation & Strategy
                    </h3>
                    <p className="text-gray-300">
                      Helping companies innovate and define their product
                      roadmaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
