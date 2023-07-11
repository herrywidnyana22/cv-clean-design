import {useState, useEffect } from 'react'

const Progressbar = ({title, counted, color}) => {
    const [text, setText] = useState("")
    const [percentage, setPercentage] = useState(0)
    
    const maxExp = 5
    const maxProject = 10

    
    useEffect(() => {
        if (title === "Experience") {
            setPercentage((counted / maxExp) * 100)
            setText("+ years")
        }

        if (title === "Project") {
            setPercentage((counted / maxProject) * 100)
            setText(" projects")
        }
    }, [title, counted])

    return (
        <div className='progress-bar-item'>
            <div className='progress-title'>
                <p className='progress-title'>{title}</p>
                <p className='progress-number'>{`${counted}`+text}</p>
            </div>
            <div className='progress-bar'>
                <div className="bar" 
                    style={{
                        width: percentage,
                        background: color
                    }}>
                </div>
            </div>
        </div>
    )
}

export default Progressbar