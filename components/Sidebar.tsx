import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";


const Sidebar = () => {

  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/rajeshmurugaiyan/linkinbio/master/rajesh/images/pic.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue">Rajesh </span>
        MOUROUGAYEN
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="rajesh_resume.pdf">
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full">
        <a href="https://github.com/rajeshmurugaiyan/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/rajesh-mourougayen-78094182/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/rajesh_mourougayen_/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Paris, France</span>
        </div>
        <p className="my-2">rajesh.sam94@gmail.com</p>
        <p className="my-2">1234567890</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-red-400 focus:outline-none" onClick={() => window.open('mailto:rajesh.sam94@gmail.com')}>
        Email Me
      </button>
    </div>
  );
};

export default Sidebar;
