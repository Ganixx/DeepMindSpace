function Dashboard() {
  return (
    <main className="px-4 py-5 mb-1 max-w-6xl mx-auto">
      {/* main text image and links */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <section className='flex flex-col w-full max-w-xl mx-auto md:mx-0 h-auto md:h-[60dvh] justify-evenly'>
          <h1 className='font-bold text-3xl md:text-5xl text-wrap'>
            Your Journey to Mental Wellness Begins Here
          </h1>
          <p className='font-light text-lg md:text-xl mt-4'>
            DeepMindScape combines <span className="font-black">AI-powered support</span> 
            with professional therapy to provide comprehensive mental health care tailored to 
            your needs.
          </p>
          <div className="mt-6">
            <button className='font-bold px-6 py-3 border-3 border-teal-500 w-full md:w-auto rounded-lg 
             text-black text-xl hover:bg-teal-600 focus:outline focus:ring-2 focus:ring-teal-400 transition
             cursor-pointer'>
              Get Started
            </button>
          </div>
        </section>
        <div className='w-full flex justify-center md:justify-end'>
          <img src='/images/mainLogo.png' alt="DeepMindScape main logo" className='w-60 md:w-120 h-auto object-contain' />
        </div>
      </div>
      {/* cards */}
      <section className='flex flex-col md:flex-row gap-8 w-full justify-evenly mt-8'>
        <div className='flex-1 min-w-45 bg-gray-200 rounded-3xl px-6 py-5 flex flex-col justify-evenly mb-4 md:mb-0 gap-4'>
          <h2 className='text-xl md:text-2xl font-bold'>24/7 Access to AI Conversation Support</h2>
          <p className='font-medium mt-2'>24/7 access to AI Companion for emotional support, guidance, and mental health resources.</p>
        </div>

        <div className='flex-1 min-w-45 bg-teal-200 rounded-3xl px-6 py-5 flex flex-col justify-evenly mb-4 md:mb-0 gap-4'>
          <h2 className='text-xl md:text-2xl font-bold'>MentAI, Connect Me to a Therapist</h2>
          <p className='font-medium mt-2'>24/7 access to AI Companion for emotional support, guidance, and mental health resources.</p>
        </div>

        <div className='flex-1 min-w-45 bg-gray-200 rounded-3xl px-6 py-5 flex flex-col justify-evenly gap-4'>
          <h2 className='text-xl md:text-2xl font-bold'>Track Progress of Mental Health Journey</h2>
          <p className='font-medium mt-2'>24/7 access to AI Companion for emotional support, guidance, and mental health resources.</p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard