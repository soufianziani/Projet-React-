import React from 'react'

const Contact = () => {
  return (
    <div>
      <br /><br /><br />
      <div class="flex items-center justify-center p-12">
        <br /><br /><br />
        <h1>CONTACTEZ-NOUS:</h1>
        <div class="mx-auto w-full max-w-[550px]">
          <form action="https://formsubmit.co/bouthainahammia4@gmail.com" method="POST">
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="fName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="Full-Name"
                    id="fName"
                    placeholder="full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="lName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="Email"
                    id="lName"
                    placeholder="your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Comment pouvons-nous aider ?        </label>
              <input
                required
                type="text"
                name="Comment-pouvons-nous-aider"
                id="guest"
                placeholder="Message"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    name="Date"
                    id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="time"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    required
                    type="time"
                    name="Time"
                    id="time"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                How many guest are you bringing?
              </label>
              <input
                required
                type="number"
                name="How-many-guest-are-you-bringing"
                id="guest"
                placeholder="xxx-xxx-xxx x"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Do you want delivery service?
              </label>
              <div class="flex items-center space-x-6">
                <div class="flex items-center">
                  <input
                    required
                    type="radio"
                    name="Do-you-want-delivery-service"
                    id="radioButton1"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton1"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    required
                    type="radio"
                    name="Do-you-want-delivery-service"
                    id="radioButton2"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* foter */}


    

    </div>
  )
}

export default Contact