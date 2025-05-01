import { useAppContext }from '../../../contexts/Context'
import './MovesList.css'

const MovesList = () => {


    const { appState : {movesList} } = useAppContext();

    console.log('Current moves list:', movesList);

    return <div className='moves-list'>
        {movesList.map((move,i) => 
            <div key={i} data-number={Math.floor(i/2)+1}>{move}</div>
        )}
    </div>
}

export default MovesList