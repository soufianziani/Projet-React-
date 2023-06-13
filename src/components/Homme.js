import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const Homme = () => {
  return (
            <div>
                {/* <br/>  <br/>   <br/>
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                <div class="lg:col-span-3">
                <h1 class="mt-5 block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">B-Pastry</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">"B-Pastry" Café is located in the heart of the city, Laayoune, and is one of the best cafés. The café features a wide range of delicious and varied desserts that suit all tastes.
                B-Pastry Café offers a wide variety of oriental and western sweets, and is characterized by serving traditional sweets in a contemporary and distinctive style. The café also provides cakes, pastries, fancy cakes and children's items, in addition to drinks.</p>
            
                <div class="mt-3 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <Link to="/contact" class=" no-underline w-100 sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-9 dark:focus:ring-offset-gray-800" href="#">
                    CONTACT 
                    </Link >
                </div>
                <div class="mt-4 lg:mt-11">
                    <span class="text-2xs font-medium text-gray-800 dark:text-gray-200">
                    The café provides high-quality and distinctive service, as workers are trained to treat visitors in the manner.
                    </span>
                </div>
                
                </div>
                <div class="lg:col-span-4 mt-10 lg:mt-6">
                <img class="w-full rounded-xl" src="img/1.jpg" alt="Image Description"/>
                </div>
            
            </div>
            
            </div> */}
      
      <div className="flex flex-wrap md items-center h-screen">
  <div className="bg-white w-full md:w-1/2 h-screen">
    <div className="mx-32">
      <h1 className="text-6xl font-bold mt-16"> B-Pastry</h1>
     
     
      {/* description */}
      <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
      B-Pastry Café offers a wide variety of oriental and western sweets, and is characterized by serving traditional sweets in a contemporary and distinctive style. The café also provides cakes, pastries, fancy cakes and children's items, in addition to drinks.
      </div>
      <button className="uppercase mt-5 text-sm font-semibold hover:underline">
        read more
      </button>
    </div>
  </div>
  <div className="bg-red-600 w-full md:w-1/2 h-screen">
    <img
      src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
      className="h-screen w-full"
      alt=""
    />
  </div>
</div>

            </div>



  )
}

export default Homme