import { XIcon, Linkedin, InstagramIcon, YoutubeIcon } from 'lucide-react'
import TypeWriter from './components/TypeWriter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const socialIcons = [
  { Icon: XIcon, href: 'https://x.com/benmukanirwa' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/benmukanirwa/' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/__ben.mk/' },
  { Icon: YoutubeIcon, href: 'https://www.youtube.com/@benmukanirwa' }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      <Navbar />
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-8">
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
                  words={['Entrepreneur.', 'Software Engineer.', 'Innovator.', 'Tech Leader.']} 
                  typingSpeed={200}
                  deletingSpeed={150}
                  delayBetweenWords={1500}
                />
              </h2>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A dedicated tech leader with a passion to apply technology to create business outcomes or impact lives positively.
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
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}