import PropTypes from "prop-types";
import { RiDeleteBin5Line } from "react-icons/ri";

const Selected = ({player, handleDelete}) => {
    const{role, name, image,} = player
    return (
        <div className="border rounded-2xl p-5 gap-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-start items-center">
                    <img className="w-20 h-20 rounded-2xl" src={image} alt="" />
                    <div>
                        <h1 className="text-2xl font-semibold">{name}</h1>
                        <p className="text-lg font-semibold">{role}</p>

                    </div>
                </div>
                <button onClick={()=>handleDelete(player)} className="text-2xl text-orange-500"><RiDeleteBin5Line /></button>
            </div>
            
        </div>
    );
};
Selected.propTypes={
    player: PropTypes.object,
    handleDelete: PropTypes.func
}
export default Selected;