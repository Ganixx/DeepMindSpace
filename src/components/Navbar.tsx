import { ChevronDown } from "lucide-react";


function Navbar() {
  return (
    <nav className="w-full grid grid-cols-2 h-24 bg-teal-50 justify-center">
      {/* logo and name */}
      <div className="flex justify-center items-center gap-2 justify-self-start ml-8 ">
        <img src='/images/brain.png' className="w-10 h-10"/>
        <h1 className="text-4xl text-teal-800 font-semibold cursor-pointer">DeepMindScape</h1>
      </div>
      {/* links */}
      <div className="justify-self-end mr-8 self-center">
        <ul className="hidden md:flex justify-center items-center gap-4 ">
          <li className="font-semibold text-xl border-0 hover:border-b-4 border-b-teal-800 cursor-pointer">Home</li>
          <li className="font-semibold text-xl  border-0 hover:border-b-4 border-b-teal-800 cursor-pointer">Find Provider</li>
          <li className="font-semibold text-xl  border-0 hover:border-b-4 border-b-teal-800 cursor-pointer">For Providers</li>
          <li className="font-semibold text-xl  border-0 hover:border-b-4 border-b-teal-800 cursor-pointer">About Us</li>
          <div className="flex justify-center items-center gap-1">
            <li className="font-semibold text-xl  border-0 hover:border-b-4 border-b-teal-800 cursor-pointer">Resources</li>
            <ChevronDown className="text-xl font-semibold text-gray-600" />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar