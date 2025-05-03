import { FaFacebook , FaYoutube  } from "react-icons/fa";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.disc}</p>
            <span><button><FaFacebook className="icons" /></button></span>
            <span><button><FaYoutube className="icons-youtube" /></button></span>
        </div>
    );
}

export default Card;