import PropTypes from "prop-types";
import { GrUserManager } from "react-icons/gr";
import { IoFlagOutline } from "react-icons/io5";

const Players = ({player, handleSelectedPlayer}) => {
    const{role, name, image, country, batting_type, bidding_price, bowling_type} = player
    return (
        <div className="border p-4 rounded-2xl">
            <div className="flex flex-col gap-4">
                <img className="w-full h-52 rounded-2xl" src={image} alt="" />
                <div className="flex justify-start items-center gap-2 text-2xl font-semibold">
                <p><GrUserManager /></p>
                <h1>{name}</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-start items-center gap-2 text-lg font-semibold">
                    <IoFlagOutline />
                    <p>{country}</p>
                    </div>
                    <button>{role}</button>
                </div>
                <hr />
                <h2>Rating</h2>
                <div className="flex justify-between">
                    <p>{batting_type}</p>
                    <p>{bowling_type}</p>
                </div>
                <div className="flex justify-between">
                    <p>Price:${bidding_price}</p>
                    <button onClick={()=>handleSelectedPlayer(player)} className="btn">Choose Player</button>
                </div>
            </div>
            
        </div>
    );
};
Players.propTypes={
    player: PropTypes.object,
    handleSelectedPlayer: PropTypes.func  
}
export default Players;