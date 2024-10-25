import { BsCoin } from "react-icons/bs";
import PropTypes from "prop-types";

const Navbar = ({playerValue}) => {
    console.log(playerValue)
    return (
        <div className="flex justify-between items-center py-5 sticky top-0 bg-opacity-40 bg-lime-50">
            <div><img src="../../dist/assets/image/logo.png" alt="" /></div>
            <div className="flex justify-end gap-6 items-center">
                <ul className="flex justify-center gap-6 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className="flex justify-center items-center p-2 gap-2 px-6 border rounded-3xl">
                    <p>{playerValue} Coin</p> 
                    <BsCoin />
                </div>
            </div>
            
        </div>
    );
};
Navbar.propTypes={
    playerValue: PropTypes.number
}
export default Navbar;