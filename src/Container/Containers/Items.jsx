import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Players from './Players';
import Selected from './Selected';



const Items = ({ handleIsActiveState, isActive, handleDecreaseValue }) => {

    const [players, setPlayers] = useState([]);
    console.log(players)
    useEffect(() => {
        fetch('./Player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    const [selectedPlayer, setSelectedPlayer] = useState([]);
    handleDecreaseValue(selectedPlayer)
   

    const handleDelete = (player) => {
        const remainingPlayer = selectedPlayer.filter((p)=>p.player_id != player.player_id)
        setSelectedPlayer(remainingPlayer)
    }

    const handleSelectedPlayer = (player) => {
        const newSelect = selectedPlayer.find((oldPlayer)=> oldPlayer.player_id == player.player_id);
        if (newSelect){
            alert('The Player had been Selected')
        }else{
           
            const newPlayer= [...selectedPlayer, player]
            setSelectedPlayer(newPlayer)
        }
        
    }


    return (
        <div className='flex flex-col gap-10'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">{`${isActive.available ? 'Available Players' :'Selected Players 0/6'}`}</h1>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => handleIsActiveState("available")} className={`${isActive.available ? "btn bg-yellow-300" : "btn"}`}>Available</button>
                    <button onClick={() => handleIsActiveState("selected")} className={`${isActive.available ? "btn" : "btn bg-yellow-300"}`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>

          <div className={`${isActive.available ? "grid grid-cols-3 gap-6" : "hidden"}`}>
            {
                players.map((player, index) =><Players key={index} handleSelectedPlayer={handleSelectedPlayer} player={player}></Players>)
            }
          </div>
            <div className={`${isActive.available ? "hidden" : "grid grid-cols-1 gap-6"}`}>
                {
                    selectedPlayer.map((player, index) =><Selected key={index} handleDelete={handleDelete} player={player}></Selected>)
                }
            </div>

        </div>
    );
};
Items.propTypes = {
    handleIsActiveState: PropTypes.func,
    isActive: PropTypes.object
}
export default Items;