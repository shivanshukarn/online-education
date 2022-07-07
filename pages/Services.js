import React from 'react'

const Services = () => {
  return (
    <section className="text-gray-600 body-font" id='Services'>
      <div className="container px-5 py-14 mx-auto">
        <div className="text-center mb-14">
          <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900 mb-4 tracking-widest">EXCELLENT SERVICES</h1>
          <p className="text-sm leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">We are dedicated to provide you the best of our service &amp; quality to give education online...</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#18164d] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Web Development</h2>
              <p className="leading-relaxed text-base">Well organized and easy to understand Web building tutorials with lots of examples, it refers to the building, creating, and maintaining of websites.</p>
              <a className="mt-3 text-[#18164d] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Software Development</h2>
              <p className="leading-relaxed text-base">Process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.</p>
              <a className="mt-3 text-[#18164d] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mobile App Development</h2>
              <p className="leading-relaxed text-base">Process of creating software applications that run on a mobile device, and a typical mobile application to work with remote computing resources.</p>
              <a className="mt-3 text-[#18164d] inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services