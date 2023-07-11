import {useState, useEffect} from 'react'
import CircleGraph from './CircleGraph'
import {SemiCircleProgress} from 'react-semicircle-progressbar'
import Progressbar from './Progressbar'
import { skills } from './assets/data/data'
import clsx from 'clsx'

const Skill = () => {
    const [active, setActive] = useState("")
    const [activeCategory, setActiveCategory] = useState(0)
    const [color, setColor] = useState("")
    const [title, setTitle] = useState("")
    const [exp, setExp] = useState("0")
    const [projectNumber, setProjectNumber] = useState("0")
    const [percentage, setPercentage] = useState("0")
    const [selectCategory, setSelectCategory] = useState('FullStack')

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }

        acc[skill.category].push(skill);
        return acc
    }, {})

    const handleFilter = (category, index)=>{
        setActiveCategory(index)
        setSelectCategory(category)
        setActive("")
    }

    const handleClickIcon = (title, color, experience, project, persentase, index) =>{
        setActive(index)
        setColor(color)
        setTitle(title)
        setExp(experience)
        setProjectNumber(project)
        setPercentage(persentase)
    }

    
    return (
    <>
            
        <div className="filter-group">
        {
            Object.keys(groupedSkills).map((category, i) => (
                <span key={i} 
                    className={`
                        ${activeCategory === i 
                        ? 'active' 
                        : ''} 
                        filter
                    `} 
                    onClick={() => handleFilter(category, i)}>{category}</span>
            ))
        }
        </div>
        <div className='skill-content'>
            <div className="skill-group">
            {
                selectCategory && ( 
                    groupedSkills[selectCategory].map((data, i) =>(
                        <div 
                            key={i} 
                            className={clsx(`
                                icon
                                circle`,
                                active === i 
                                ? 'active'
                                : ''
                            )}
                            onClick={() => handleClickIcon(
                                data.name, 
                                data.color,
                                data.exp,
                                data.project,
                                data.percentage,
                                i
                            )}
                        >
                            <img src={data.icon} alt={data.name}/>
                        </div>
                    ))
                )
            }
            </div>
            <div className="vertical-line-auto"/>
            <div className="skill-detail">
                <div className="skill-title">{title}</div>
                <div className='progress'>
                    <SemiCircleProgress
                        percentage={percentage}
                        size={{
                            width: 150,
                            height: 150,
                        }}
                        strokeWidth={10}
                        strokeColor={color}
                        bgStrokeColor="var(--widget-bg)"
                        hasBackground={true}
                        fontStyle={{
                            fontSize: "16px",
                            fontWeight: "300",
                            fill: "var(--color-white)",
                        }}
                    />
                    <p>Estimate Level</p>
                </div>
                <div className='progress-group'>
                    <Progressbar 
                        title={"Project"} 
                        counted={projectNumber}
                        color={color}
                    />
                    <Progressbar 
                        title={"Experience"} 
                        counted={exp}
                        color={color}
                    />
                </div>
                
            </div>
        </div>
    </>
    )
}

export default Skill