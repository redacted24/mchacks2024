import '../styles/lobby.css'
import { Link } from 'react-router-dom'

const Lobby = () => {
    return (
        <div id="main-container">
            <div className='fix'>
                <Link className='nodec' to='/gamepage'>
                    <div className='options-container' id='multiplayer'>
                        <div className='option-image-container'>
                            <img className='icon multi' src='../src/assets/multiplayer.svg' alt='multiplayer'/>
                        </div>
                        <div className='option-text-container'>
                            <div className='opt-title'>Multiplayer</div>
                            <div className='desc'>Play with a Friend!</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='fix'>
                <Link className='nodec' to='/statistics'>
                    <div className='options-container' id='statistics'>
                        <div className='option-image-container'>
                            <img className='icon' src='../src/assets/statistics.svg' alt='statistics'/>
                        </div>
                        <div className='option-text-container'>
                            <div className='opt-title'>Statistics</div>
                            <div className='desc'>Check your stats</div>
                        </div>
                    </div>
                </Link>
            </div>
            
            <div className='fix'>
                <Link className='nodec' to='leaderboard'>
                    <div className='options-container nodec' id='leaderboard'>
                        <div className='option-image-container'>
                            <img className='icon leaderboard' src='../src/assets/leaderboard.svg'/>
                        </div>
                        <div className='option-text-container'>
                            <div className='opt-title'>Leaderboard</div>
                            <div className='desc'>Compete with others</div>
                        </div>
                    
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Lobby
