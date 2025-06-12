export default function Feature() {
  return (
    <main className='bg-gray-100'>
      <img src='/images/Wavy.png' alt="Decorative wavy background" className='w-full' />
      <div className='flex justify-center items-center h-12 mb-4'>
        <h1 className='text-3xl md:text-5xl font-semibold text-black border-b border-black/40 pb-1 text-center'>
          From Uncertainty to Clarity
        </h1>
      </div>
      <section className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl
       px-4 md:px-10 py-5 mx-auto mt-10 place-items-center gap-8 md:gap-16">
        <svg className="hidden md:block z-10 absolute  h-full w-full max-w-6xl left-30" 
          xmlns="http://www.w3.org/2000/svg" viewBox="-28.2 -6.2 28.4 61.4" strokeDasharray="0.5 0.5 0.5 0.5" aria-hidden="true">
          <path d="M 0 -6 C -1 6 -6 6 -13 7 Q -43 24 -13 41 C -2 44 -2 44 0 55" stroke="#000000" strokeWidth="0.1" fill="none"/>
        </svg>
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold">Not Sure if You Need <span className="border-b-4 border-black">Therapy?</span> Just Talk</h2>
          <p className="mt-4 md:mt-6 font-medium text-lg md:text-xl">Start with our 24/7 CBT-tuned chatbot – no pressure, just a safe space to reflect.</p>
        </div>
        <div className="w-full max-w-sm h-auto z-20 flex justify-center">
          <img src='/images/feautureImage1.png' alt="Chatbot conversation illustration" className='w-full h-auto object-contain rounded-xl shadow' />
        </div>
        <div className="w-full max-w-sm h-auto z-20 flex justify-center">
          <img src='/images/feautureImage2.png' alt="Therapist matching illustration" className='w-full h-auto object-contain rounded-xl shadow' />
        </div>
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold"><span className="border-b-4 border-black">Get </span>Matched, Your Way</h2>
          <p className="mt-4 md:mt-6font-medium text-lg md:text-xl">When ready, choose or get matched with a therapist – pay with cash or insurance.</p>
        </div>
        <div className="w-full max-w-sm mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold"><span className="border-b-4 border-black">Therapy,</span> Simplified</h2>
          <p className="mt-4 md:mt-6 font-medium text-lg md:text-xl">Join sessions on our platform. We handle reminders, notes, and follow-ups – automatically.</p>
        </div>
        <div className="w-full max-w-sm h-auto z-20 flex justify-center">
          <img src='/images/feautureImage3.png' alt="Therapy session illustration" className='w-full h-auto object-contain rounded-xl shadow' />
        </div>
      </section>
    </main>
  )
}

