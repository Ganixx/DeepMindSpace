import { Linkedin, Instagram, Twitter, Facebook, MessageSquare, Volume2 } from "lucide-react"


const socialIcons = [
  { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
]

export default function Footer() {
  return (
    <div className="relative bg-gray-100 flex flex-col justify-between mt-80">
      <div className="absolute flex justify-center bg-gray-100 top-0 left-1/2 -translate-y-4/5 -translate-x-1/2 z-20 w-2/3 rounded-2xl">
        <div className="w-full md:w-3/4  px-6 md:px-12 py-12 flex flex-col items-center gap-6">
          <h1 className="text-xl md:text-4xl font-bold text-center">
            Begin Your Wellness Journey Today
          </h1>
          <p className="text-center text-base hidden md:block">
            Take the first step toward improved mental health with DeepMindScape&apos;s comprehensive support system.
          </p>
          <button className="mt-4 px-8 py-3 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-semibold shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute right-4 bottom-65  flex-col gap-4 z-40 md:right-8 hidden md:flex">
        <button aria-label="Open chat support" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-lg text-white hover:bg-teal-700 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
          <MessageSquare size={28} />
        </button>
        <button aria-label="Enable audio support" className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 shadow-lg text-white hover:bg-teal-700 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">
          <Volume2 size={28} />
        </button>
      </div>

      {/* Footer */}
      <footer className="relative w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute  -top-60 h-full w-full z-10"
        >
          <path
            d="M 0 34 Q 13 18 58 22 C 99 31 98 32 138 8 L 139 39 L 0 40 Z"
            fill="#005f5a"
          />
        </svg>
        <div className="relative bg-teal-800 pt-20 pb-8 px-6 md:px-16 z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
            <div>
              <h2 className="font-bold text-xl mb-4">DeepMindSpace</h2>
              <p className="text-gray-100 text-sm mb-4 ">
                Empowering mental wellness through AI support and professional therapy.
              </p>
              <div className="flex gap-3">
                {socialIcons.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-xl">Services</h3>
              <ul className="space-y-1 text-gray-100 text-md">
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">AI Chat Support</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Find a Therapist</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Mental Health Resources</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Blogs</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-xl">Company</h3>
              <ul className="space-y-1 text-gray-100 text-md">
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">About Us</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Contact</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Careers</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Terms of Service</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold mb-4 text-xl">Create Account</span>
              <button className="border-white border-2 px-2 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-800 transition cursor-pointer w-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Sign Up
              </button>
              <span className="text-md text-gray-200 mt-4">&copy; 2025 DeepMindScape.<br />All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
