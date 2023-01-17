
function dashboard() {
  const
  return (
      <div className='w-screen h-screen mt-24 md:mt-40 bg-white'>

        <div className='container w-8/12 mx-auto'>

          <div className='flex w-full justify-center'>
            <p className='text-3xl font-semibold text-center md:text-4xl'>Welcome, please fill in your details</p>
          </div>

          {/* Four divs */}
          

          {/* Payment */}
          <div className='mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 justify-center items-center w-full'>
            <div className='space-y-12'>
              
              <div>
                <input className='border text-center border-blue-300 rounded-xl w-full p-4' type="text" placeholder="Firstname" />
              </div>
              
              <div>
                <input className='border text-center border-blue-300 rounded-xl w-full p-4' type="text" placeholder="Lastname" />
              </div>

              <button className='bg-teal-400 py-3 px-8 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Submit</button>
            </div>
          </div>

          {/* Car options */}
          <div className='mt-16 grid grid-cols-1 gap-5 md:grid-cols-3'>
            <div>
              <div className=''>
                <img className='object-cover rounded-t-xl' src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="border p-4">
                <p>
                A good car should be able to consistently perform well and not break down frequently.

                Fuel efficiency: For some people, a car's fuel efficiency (or how much fuel it consumes per mile driven) is an important factor.

                Safety: A good car should have feat
                </p>
                <div className='space-x-4 md:space-x-3 text-center'>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                </div>
              </div>
            </div>
            <div>
              <div className=''>
                <img className='object-cover rounded-t-xl' src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="border p-4">
                <p>
                A good car should be able to consistently perform well and not break down frequently.

                Fuel efficiency: For some people, a car's fuel efficiency (or how much fuel it consumes per mile driven) is an important factor.

                Safety: A good car should have feat
                </p>
                <div className='space-x-4 md:space-x-3 text-center'>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                </div>
              </div>
            </div>
            <div>
              <div className=''>
                <img className='object-cover rounded-t-xl' src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="border p-4">
                <p>
                A good car should be able to consistently perform well and not break down frequently.

                Fuel efficiency: For some people, a car's fuel efficiency (or how much fuel it consumes per mile driven) is an important factor.

                Safety: A good car should have feat
                </p>
                <div className='space-x-4 md:space-x-3 text-center'>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                  <button className='bg-teal-400 py-3 px-8 mt-4 rounded-xl hover:bg-teal-500 transition ease-linear duration-200'>Check In </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default dashboard