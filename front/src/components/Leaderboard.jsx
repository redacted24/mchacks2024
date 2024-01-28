import '../styles/leaderboard.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Leaderboard = ({ username }) => {

	const [win, setWin] = useState(0)
	const [loss, setLoss] = useState(0)
	const [lossRatio, setLossRatio] = useState(0)

    return (
        <div>
            <div id="page-title">Leaderboard</div>
            <Link id="linkers" to='/statistics'>
                <div className='lead-container'>
                    <div className='leaderNumber greenColor'>1</div>
                    <div className='leaderName greenColor'>{username}</div>
                    <div className='leaderStats greenColor'>
                        <div>Wins {win}</div>
                        <div>Losses: {loss}</div>
                        <div>Win-loss ratio: {lossRatio}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Leaderboard
