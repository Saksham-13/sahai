// component for contact form
import fredricka from '../components/fonts/fredricka';
export default function Contact() {
    
    return(
        <div>
        <section className="text-gray-700 body-font relative">
        <form
        action="mailto: guglu000@gmail.com"
        encType="text/plain" method="POST"
        >
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-8">
            <h1 
          className={`text-6xl my-4 font-bold  ${fredricka.className} text-[#926D65]` }
          >
                Contact Us
              </h1>
              
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
               
                  <div className="relative">
                   
                    <label for="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button type="submit" className="flex mx-auto text-white bg-[#956E66] border-0 py-2 px-8 focus:outline-none hover:bg-[#E2BA9B] rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    Submit
                  </button>
                  
                </div>
                <div className="p-2 w-full pt-8 mt-8  text-center">
                 
                 
                </div>
              </div>
            </div>
          </div>      
        </form>
          
        </section>
      </div>
    )

    }