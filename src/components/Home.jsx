import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaClipboardList, FaUsers, FaFlask } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram,FaBookOpen  } from 'react-icons/fa';
function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

    return (  
   <div>  
      <div className="relative ">
        <img
         src="../public/bgimage.png"
         alt="Background"  className='h-71 w-full'
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

<div className="bg-gray-50 p-8 font-sans">
  
      <div className="flex justify-center gap-8 mb-6 ml-28 mr-28">
        <div onClick={() => handleClick('/expert-tutors')} className="flex flex-col items-center rounded-2xl px-8 py-10 text-center shadow-md min-w-[200px] cursor-pointer  bg-white text-black hover:bg-blue-600 hover:text-white hover:shadow-lg">
          <FaGraduationCap className="text-4xl mb-4" />
          <div className="text-xl font-bold">Expert Tutors</div>
        </div>
        <div onClick={() => handleClick('/study-materials')} className="flex flex-col items-center rounded-2xl px-8 py-10 text-center shadow-md min-w-[200px] cursor-pointer bg-white text-black hover:bg-blue-600 hover:text-white">
          <FaClipboardList className="text-4xl mb-4" />
          <div className="text-xl font-bold">Comprehensive</div>
          <div className="text-base mt-1">Study Materials</div>
        </div>
        <div onClick={() => handleClick('/read_write')} className="flex flex-col items-center rounded-2xl px-8 py-10 text-center shadow-md min-w-[200px] cursor-pointer bg-white text-black hover:bg-blue-600 hover:text-white">
          <FaBookOpen className="text-4xl mb-4" />
          <div className="text-xl font-bold">Reading/Writing</div>
          <div className="text-base mt-1">with AI</div>
        </div>
        <div onClick={() => handleClick('/mock-tests-feedback')} className="flex flex-col items-center rounded-2xl px-8 py-10 text-center shadow-md min-w-[200px] cursor-pointer bg-white text-black hover:bg-blue-600 hover:text-white">
          <FaFlask className="text-4xl mb-4" />
          <div className="text-xl font-bold">Mock Tests &</div>
          <div className="text-base mt-1">Feedback</div>
        </div>
         <div onClick={() => handleClick('/test')} className="flex flex-col items-center rounded-2xl px-8 py-10 text-center shadow-md min-w-[200px] cursor-pointer bg-white text-black hover:bg-blue-600 hover:text-white">
          <FaUsers className="text-4xl mb-4" />
          <div className="text-xl font-bold">Book IELTS test &</div>
          <a  href="#">Book test now</a>
        </div>
      </div>

      <div className="flex rounded-2xl ml-28 mr-28 text-white">
        <div className=" ">
          <img
            src="../public/3.png"
            alt="Student"
            className="rounded-l-lg max-w-xs"
          />
        </div>

        <div className="flex-2 pl-8  bg-blue-600 rounded-r-lg">
          <p className="text-3xl font-bold mb-2">
            “Great tutors helped me improve my score by 2 bands!”
          </p>
          <p className="text-sm opacity-80 mb-4">
          </p>

          <div className="flex -space-x-4 mb-4">
            <img
              src="../public/avatar1.webp"
              alt="Avatar 1"
              className="w-12 h-12 rounded-full border-4 border-white"
            />
            <img
              src="../public/avatar2.webp"
              alt="Avatar 2"
              className="w-12 h-12 rounded-full border-4 border-white"
            />
            <img
              src="../public/avatar3.webp"
              alt="Avatar 3"
              className="w-12 h-12 rounded-full border-4 border-white"
            />
          </div>

          <div className="flex gap-6">
            <span className="bg-blue-700 rounded-full px-4 py-1 font-semibold">
              Lucifer
            </span>
            <span className="bg-blue-700 rounded-full px-4 py-1 font-semibold">
              Amanda
            </span>
            <a className="bg-blue-700 rounded-full px-4 py-1 font-semibold" href="#">&gt;&gt;</a>
          </div>
        </div>
      </div>
    </div>

  <footer className="bg-gray-900 text-gray-300 p-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
          <h5 className="text-gray-400 uppercase mb-3">ABOUT</h5>
          <nav className="flex flex-col space-y-1 font-semibold">
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">IELTS Stories</a>
            <a href="#" className="hover:underline">Press</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </nav>
        </div>

        <div>
          <h5 className="text-gray-400 uppercase mb-3">GROUP COMPANIES</h5>
          <nav className="flex flex-col space-y-1">
            <a href="#" className="hover:underline">Client1</a>
            <a href="#" className="hover:underline">Client2</a>
            <a href="#" className="hover:underline">Client3</a>
          </nav>
        </div>
 
        <div>
          <h5 className="text-gray-400 uppercase mb-3">HELP</h5>
          <nav className="flex flex-col space-y-1 font-semibold">
            <a href="#" className="hover:underline">Payments</a>
            <a href="#" className="hover:underline">Shipping</a>
            <a href="#" className="hover:underline">Cancellation & Returns</a>
            <a href="#" className="hover:underline">FAQ</a>
          </nav>
        </div>

        <div>
          <h5 className="text-gray-400 uppercase mb-3">CONSUMER POLICY</h5>
          <nav className="flex flex-col space-y-1 font-semibold">
            <a href="#" className="hover:underline">Cancellation & Returns</a>
            <a href="#" className="hover:underline">Terms Of Use</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Grievance Redressal</a>
            <a href="#" className="hover:underline">EPR Compliance</a>
          </nav>
        </div>

        <div>
          <h5 className="text-gray-400 uppercase mb-3">Mail Us:</h5>
          <address className="not-italic font-semibold mb-3">
            IELTS Institute Private Limited,<br />
            123 Oxford Street, Cambridge,<br />
            CB1 1AA, United Kingdom
          </address>

          <h5 className="text-gray-400 uppercase mb-3">Registered Office Address:</h5>
          <address className="not-italic font-semibold">
            IELTS Institute Private Limited,<br />
            123 Oxford Street, Cambridge,<br />
            CB1 1AA, United Kingdom<br />
            CIN : U12345UK2024PTC000001<br />
            Telephone: +44 20 7946 0958
          </address>

          <div className="flex space-x-4 mt-4 text-xl text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2024 IELTS Institute
      </div>
    </footer>

         </div>
   
     )
}
export default Home;
