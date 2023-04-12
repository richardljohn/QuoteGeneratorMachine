import React, {useState, useEffect} from 'react';
import "./pomodoroclock.css"

const PomodoroClock = () => { 
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [message, setMessage] = useState("")
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let session = setSession(() => {
            clearSession(session)
        })

        if(seconds === 0){
            if(minutes !== 0){
                setSeconds(59)
                setMinutes(minutes - 1)
            }
            else { 
                
            }
        }
    })

    return (
        <div className="pomodoro-clock">
            <div className='clock-session-message'>
                <div>
                    <p className='session-label'>Choose your session time:</p>
                </div>
            </div>
            <div className="clock-session-timer">
                <p className='clock-session-text'>25:00</p>
            </div>
            <div className='clock-break-message'>
                <div>
                    <p className='break-label'>Choose your break time:</p>
                </div>
            </div>
            <div className="clock-session-timer">
                <p className='clock-break-text'>5:00</p>
            </div>
        </div>
    )
}

export default PomodoroClock;