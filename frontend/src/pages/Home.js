import React, { useEffect } from "react";
const Home = () => {


  return (
    <>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Events Portal  
              <br class="hidden lg:inline-block" />KWC region
            </h1>
            <p class="mb-8 leading-relaxed">Welcome to EventHub, your one-stop solution for event planning and organization. Whether you're hosting a corporate conference, a wedding, a birthday party, or any special occasion, EventHub is here to simplify the entire process for you. Our platform connects you with expert event planners, venues, vendors, and resources to make your event a memorable success.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Event Cards</button>
              
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="./homeBanner.jpg" />
          </div>
        </div>

      </section>
    </>
  )
}

export default Home;