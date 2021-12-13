import {AiFillGithub} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img 
                src="https://raw.githubusercontent.com/rajeshmurugaiyan/linkinbio/master/rajesh/images/pic.jpg" 
                alt="user avatar"
            />
            <h3>
                <span>
                Rajesh 
                </span>
                MOUROUGAYEN
            </h3>
            <p>Web Developer</p>
            <p><GiTie className="w-6 h-6"/>Download Resume</p>
            <div>
                <div>
                    <GoLocation/>
                    <span>
                        Paris, France
                    </span>
                </div>
                <p>rajesh.sam94@gmail.com</p>
                <p>1234567890</p>
            </div>
            <button>Email Me</button>
            <button>Toggle Theme</button>
        </div>
    )
}

export default Sidebar
