function Home() {
    return (  
      
    <div className="relative ">
       <img
         src="../public/bgimage.png"
         alt="Background"  
       />    
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
           Welcome to My Website
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6">
           Build modern websites with React & Tailwind CSS
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold shadow-lg transition">
           Get Started
          </button>
       </div>
   </div>
     )
}
export default Home;
