export default function Home() {
  return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
            <img className="object-cover object-center rounded-lg" alt="hero" src="/online-education.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Online Education
              <br />Let&apos;s make it success
            </h1>
            <p className="mb-8 leading-relaxed text-sm">Online learning is fundamentally student-centered, due to the easy implementation of student discussion boards and peer grading systems.
            Online learning provides fantastic flexibility, among other benefits, and aids in making the task of arranging development opportunities far easier.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex bg-[#18164d] text-white border-2 hover:bg-gray-200 hover:text-[#18164d] font-semibold hover:border-[#18164d] hover:border-2 py-2 px-6 focus:outline-none rounded text-lg">Get Started</button>
            </div>
          </div>
        </div>
      </section>
  )
}
