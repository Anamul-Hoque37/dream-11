import { BsCoin } from "react-icons/bs";
import PropTypes from "prop-types";

const Navbar = ({initialValue}) => {
    
    return (
        <div className="flex justify-between items-center py-5 sticky top-0 bg-opacity-30 bg-lime-50">
            <div><img src="https://i.ibb.co.com/k3WsC8f/logo.png" alt="" /></div>
            <div className="flex justify-end gap-6 items-center">
                <ul className="flex justify-center gap-6 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className="flex justify-center items-center p-2 gap-2 px-6 border rounded-3xl">
                    <p>{initialValue} Coin</p> 
                    <BsCoin />
                </div>
            </div>
            
        </div>
    );
};
Navbar.propTypes={
    initialValue: PropTypes.number
}
export default Navbar;