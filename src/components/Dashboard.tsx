

function Dashboard() {
  return (
    <main className="px-5 py-5 mb-1">
      {/* main text image and links */}
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col w-[80dvh] justify-self-center h-[60dvh] justify-evenly'>
          <h1 className='font-bold text-5xl text-wrap'>
            Your Journey to mental Wellness Begins Here
          </h1>
          <p className='font-light text-xl'>
            DeepMindScape combines <span className="font-black">AI-powered support</span> 
            with proffesional therapy to provide comprhensive mental health care tailored to 
            your needs.
          </p>
          <div>
            <button className='font-bold px-6 py-3 border-3 border-teal-500 w-auto rounded-lg'>
              Get Started
            </button>
          </div>
        </div>
        <div className='size-[70dvh] hidden md:block  justify-self-center mt-4'>
          <img src='/images/mainLogo.png' className='contain-content'/>
        </div>
      </div>
      {/* cards */}
      <div className='flex flex-col md:flex-row gap-4 w-full justify-evenly '>
        <div className='w-1/4 h-[30dvh]  bg-gray-200  rounded-3xl px-6 py-3 flex flex-col justify-evenly'>
          <h1 className='text-2xl font-bold'>24/7 Access to AI Conversation Support</h1>
          <p className='font-medium'>24/7 Access to Ai Conversation Support for emotional support, guidance, and mental health resources</p>
        </div>

        <div className='w-1/4 h-[30dvh] bg-teal-200  rounded-3xl px-6 py-3 flex flex-col justify-evenly'>
          <h1 className='text-2xl font-bold'>MentAI, connect me to a therapist</h1>
          <p className='font-medium'>24/7 Access to Ai Conversation Support for emotional support, guidance, and mental health resources</p>
        </div>

        <div className='w-1/4 h-[30dvh] bg-gray-200  rounded-3xl px-6 py-3 flex flex-col justify-evenly'>
          <h1 className='text-2xl font-bold'>Track Progress of Mental Health Jourey</h1>
          <p className='font-medium'>24/7 Access to Ai Conversation Support for emotional support, guidance, and mental health resources</p>
        </div>
      </div>
    </main>
  )
}

export default Dashboard