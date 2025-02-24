import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
// import { SiLinktree } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-black py-4 bg-gray-100 border-t-2 border-gray-200 ">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden sm:flex flex-col mb-4 md:mb-0 sm:w-1/2 sm:text-4xl md:text-5xl primary">
          <div className="sm:flex items-center mb-4 md:mb-0 sm:text-4xl md:text-5xl primary">
            <img src="/mlsamietlogo1.png" alt="Logo" className="h-44 mr-2" />
            <p className="text-primary">Be a Force <br /><span>for Good!</span></p>
          </div>
          <div>
            <p className="text-base ml-7 mb-4 md:mb-0 primary text-black">Follow us on our socials:</p>
            <div className="flex gap-5 my-5 ml-7">
            <a href='https://www.linkedin.com/company/mlsa-miet/' className='text-2xl text-primary'><FaLinkedin /></a>
            <a href='https://www.instagram.com/mlsamiet' className='text-2xl text-primary'><FaInstagram /></a>
            <a href='https://x.com/MlsaMiet' className='text-2xl text-primary'><FaXTwitter /></a>
            <a href='https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc' className='text-2xl text-primary'><FaWhatsappSquare /></a>
            <a href='https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology' className='text-2xl text-primary'>
              <img className='w-7' src="commudle.svg" alt="" />
            </a>
          </div>
          </div>
          
        </div>

        <div className="mb-4 md:mb-0 sm:w-1/3 font-semibold">
          <h3 className="font-semibold mb-4 primary text-primary">CONTACT US:</h3>
          <a href="pari.agarwal.cseds.2022@miet.ac.in" className="secondary">mlsa.community@miet.ac.in</a>
          <a href="kunj.agarwal.2022@miet.ac.in" className="secondary">mlsa.community@miet.ac.in</a>
          <a href="mailto:mlsa.community@miet.ac.in" className="secondary">mlsa.community@miet.ac.in</a>
        </div>

        <div className='sm:w-1/3 flex flex-col justify-end'>
          <h3 className="font-semibold mb-4 primary text-primary">VISIT US AT:</h3>
          <a href="https://www.google.com/maps/place/Meerut+Institute+of+Engineering+and+Technology/@28.973047,77.6410032,17z/data=!3m1!4b1!4m6!3m5!1s0x390c668fdea4d87f:0x8795def814a486e7!8m2!3d28.973047!4d77.6410032!16s%2Fm%2F07k4y4h?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" className="secondary">Meerut Institute of <br />Engineering & Technology <br />Meerut, India</a>
          {/* <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.483276503301!2d77.6410032!3d28.973046999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1728559964538!5m2!1sen!2sin" ></iframe> */}
        </div>
      </div>

      <div className="text-center mt-4 flex justify-evenly text-md text-primary font-semibold">
        <p className='flex gap-1 items-center primary'><FaCopyright /> MLSA MIET | DESIGNED BY MLSA MIET TEAM</p>
      </div>
    </footer>
  );
};

export default Footer;