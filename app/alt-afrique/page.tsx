import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alt Afrique - The Podcast of Young Founders and Innovators",
  description:
    "Hear the stories of young founders and innovators turning ideas into impact, building Africa from Africa.",
  keywords:
    "Alt Afrique, Alt Afrique, Business Podcast, Podcast Entrepreneuriat",
  openGraph: {
    title: "Alt Afrique - Business Podcast, Podcast Entrepreneuriat",
    description:
      "Hear the stories of young founders and innovators turning ideas into impact, building Africa from Africa.",
    url: "https://www.benmukanirwa.info/alt-afrique",
    siteName: "Alt Afrique",
    type: "website",
    locale: "en_US",
    images: ["/alt-afrique-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alt Afrique - Business Podcast, Podcast Entrepreneuriat",
    description:
      "Hear the stories of young founders and innovators turning ideas into impact, building Africa from Africa.",
    images: ["/alt-afrique-banner.jpg"],
    creator: "@benmukanirwa",
  },
};

const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow p-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold">
            Africa Creates.{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 text-transparent bg-clip-text">
              Africa Leads
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Hear the stories of young founders and innovators turning ideas into
            impact, building Africa from Africa.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <a
            href="https://forms.gle/mKtRXALmR8PDhZMy8"
            className="px-6 py-3 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg"
            target="_blank"
          >
            Be a Guest!
          </a>
          <a
            href="https://podcasts.apple.com/cd/podcast/alt-afrique/id1830653944"
            className="px-6 py-3 border border-gray-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors text-lg"
            target="_blank"
          >
            <Image
              src="/apple-podcast.png"
              alt="Apple Podcasts Logo"
              width={24}
              height={24}
              className="-mt-1"
            />
            Listen on Apple Podcasts
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PodcastPage;
