import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Players from './Players';
import Selected from './Selected';
import { toast } from 'react-toastify';





const Items = ({ handleIsActiveState, isActive, handleDecreaseValue, handleIncreaseValue, initialValue}) => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('./Player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])


    const [selectedPlayer, setSelectedPlayer] = useState([]);
    
    const handleDelete = (player) => {
        const remainingPlayer = selectedPlayer.filter((p)=>p.player_id != player.player_id)
        setSelectedPlayer(remainingPlayer)
        handleIncreaseValue(player)
    }

    const handleSelectedPlayer = (player) => {
        const newSelect = selectedPlayer.find((oldPlayer)=> oldPlayer.player_id == player.player_id);
        const selectedLength = selectedPlayer.length
        const selectedPlayerValue = player.bidding_price
        console.log(initialValue)
        console.log(selectedPlayerValue)
        if (newSelect){
            toast('This player already Selected')
        }else if(initialValue<=selectedPlayerValue){
            toast('Please add Coin amount')
        }else if(selectedLength<=5){
            const newPlayer= [...selectedPlayer, player]
            setSelectedPlayer(newPlayer)
            handleDecreaseValue(player)
        }else{
            toast('Selected Length is over')
        }

    }


    return (
        <div className='flex flex-col'>
            <div className="flex justify-end items-center">
                <div className="flex gap-3">
                    <button onClick={() => handleIsActiveState("available")} className={`${isActive.available ? "btn bg-yellow-300" : "btn"}`}>Available</button>
                    <button onClick={() => handleIsActiveState("selected")} className={`${isActive.available ? "btn" : "btn bg-yellow-300"}`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>

            <div className={`${isActive.available ? "block" : "hidden"}`}>
                <div className="text-left text-3xl font-bold pb-7">
                    <h1>Available Players</h1>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                {
                    players.map((player, index) =><Players key={index} handleSelectedPlayer={handleSelectedPlayer} player={player}></Players>)
                }
                </div>
            
            </div>
            <div className={`${isActive.available ? "hidden" : "flex flex-col justify-start items-start gap-6"}`}>
                <div className="text-left text-3xl font-bold">
                    <h1>Selected Players ({selectedPlayer.length}/6)</h1>
                </div>
                <div className='grid grid-cols-1 w-full gap-6'>
                    {
                        selectedPlayer.map((player, index) =><Selected key={index} handleDelete={handleDelete} player={player}></Selected>)
                    }
                </div>
                <button onClick={() => handleIsActiveState("available")} className='btn text-left px-6 bg-amber-300'>Add More Players</button>
            </div>

        </div>
    );
};
Items.propTypes = {
    handleIsActiveState: PropTypes.func,
    isActive: PropTypes.object,
    handleDecreaseValue: PropTypes.func,
    handleIncreaseValue: PropTypes.func,
    initialValue: PropTypes.number
}
export default Items;