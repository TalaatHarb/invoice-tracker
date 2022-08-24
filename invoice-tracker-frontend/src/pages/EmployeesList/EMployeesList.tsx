import React from "react";
import Navbar from "../../components/Navbar";
const EmployeesList=()=>{
    return(
       <div>
           <Navbar/>
<div className="flex flex-col min-h-screen  bg-lightGrey bg-opacity-20 items-center">

        <div className="flex flex-row justify-start w-full">
            <h2 className=" drop-shadow-xl mx-8 my-12 text-5xl text-blueCegedim font-bold">Team Members</h2>
        </div>
    <div>
        <div className="grid gap-10 grid-cols-2">
                
           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Developers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">123456789</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">ahmed@gmail.com</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Developers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">256852</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">abdo@gmail.com</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/6937837/pexels-photo-6937837.jpeg?cs=srgb&dl=pexels-diva-plavalaguna-6937837.jpg&fm=jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Testers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">25625582654</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">moatasem@gmail.com</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/6321241/pexels-photo-6321241.jpeg?cs=srgb&dl=pexels-cottonbro-6321241.jpg&fm=jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Developers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">123456789</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">ahmed@gmail.com</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Developers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">123456789</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">ahmed@gmail.com</p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
               <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="p-6 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Cegedim Member</h5>
                  <p className="text-gray-900 text-xl font-sm mb-2">Developers</p>
                  <p className="ttext-gray-900 text-xl font-sm mb-2">123456789</p>
                  <p className="text-gray-900 text-xl font-sm mb-2">ahmed@gmail.com</p>
              </div>
           </div>
           
           
        </div>
    </div>
</div>
</div>
    )
}
export default EmployeesList;