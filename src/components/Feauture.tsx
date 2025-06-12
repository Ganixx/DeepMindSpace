function Feauture() {
  return (
    <main className='bg-gray-100'>
      <img src='/images/Wavy.png' className='w-full'/>
      <div className='flex justify-center items-center h-8'>
        <h1 className='text-5xl font-semibold text-black border-b border-black/40 pb-1'>
          From Uncertainty to Clarity
        </h1>
      </div>
      <section className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl px-10 py-10 mx-auto mt-10 place-items-center gap-15">
        <svg className="hidden md:block z-10 absolute top-2 h-full w-full max-w-6xl left-30" 
        xmlns="http://www.w3.org/2000/svg" viewBox="-28.2 -6.2 28.4 61.4" stroke-dasharray="0.1 0.1 0.1 0.1" >
            <path d="M 0 -6 C -1 6 -6 6 -13 7 Q -43 24 -13 41 C -2 44 -2 44 0 55" stroke="#000000" stroke-width="0.5" fill="none"/>
        </svg>
        <div className="w-2/3 "> 
          <h1 className="text-3xl font-bold">Not Sure if You Need <span className="border-b-4 border-black">Therapy?</span> Jsut Talk</h1>
          <p className="mt-6 font-medium text-xl">Start with our 24/7 CBT-tuned chatbot - no pressure, just a safe space to reflect</p>
        </div>
        <div className="w-2/3 h-3/4 z-20">
          <img src='/images/feautureImage1.png' className='contain-content'/>
        </div>
        <div className="w-2/3 h-3/4 z-20">
          <img src='/images/feautureImage2.png' className='contain-content'/>
        </div>
        <div className="w-2/3  "> 
          <h1 className="text-3xl font-bold"><span className="border-b-4 border-black">Get </span> Matched, Your Way</h1>
          <p className="mt-6 font-medium text-xl">When ready, choose or get matched with a therapist - pay with cash or insurance</p>
        </div>
        <div className="w-2/3 "> 
          <h1 className="text-3xl font-bold"><span className="border-b-4 border-black">Therapy,</span> Simplified</h1>
          <p className="mt-6 font-medium text-xl">Join sessions on our platform, We handle reminders,notes, and follow-ups - automatically</p>
        </div>
        <div className="w-2/3 h-3/4 z-20">
          <img src='/images/feautureImage3.png' className='contain-content'/>
        </div>
      </section>
    </main>
  )
}

export default Feauture