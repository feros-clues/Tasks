import "./UserCard.css";
import '../buttonStyle/index.css';
const UserCard = ({name,mobNumber,email,addr})=>{
    return(
        <div id='usercard'>

            <h1>{name}</h1>
            <p>{mobNumber}</p>
            <p>{email}</p>
            <p>{addr}</p>
            <button type="button">readmore!</button>
        </div>
    );
};

export default UserCard;