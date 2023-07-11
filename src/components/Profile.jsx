import { useState } from 'react'
import { 
    TbBrandFacebookFilled, 
    TbBrandTwitterFilled, 
    TbBrandLinkedin, 
    TbBrandInstagram,
    TbMapPin 
} from 'react-icons/tb'
import SlideWidget from './SlideWidget'

const Profile = () => {
    const [hoverIcon, setHoverIcon] = useState('')

    const logoColor ={
        "twitter": "#1DA1F2",
        "linkedin": "#0077b5",
        "instagram": "#833AB4",
        "facebook": "#4267B2",
    }

    const handleSocialHover = (iconName) =>{
        setHoverIcon(iconName)
    }

    const handleMouseLeave =() =>{
        setHoverIcon('')
    }

    const iconStyle = (iconName) =>{
        if (hoverIcon === iconName){
            return { color: logoColor[iconName], transition: 'var(--fast)'}
        }
        return { transition: 'var(--fast)'}
    }

    return (
        <div className="profile">
            <div className="profile-img">
                <img src="/assets/images/ppgemoy1.jpg" alt="" />
            </div>
            <div className="name-tag">
                <h2>Herry Widnyana</h2>
                <div className="sub-tag">
                    <div className='location-tag'>
                        <TbMapPin/>
                        <p className="name-role">Denpasar</p>
                    </div>
                    <div className='vertical-line'/>
                    <div className="name-role">
                        Programmers
                    </div>
                </div>
            </div>
            <div className="social-group">
                <span 
                    className="social-icon"
                    onMouseOver={() =>  handleSocialHover('linkedin')}
                    onMouseLeave={handleMouseLeave} 
                >
                    <TbBrandLinkedin style={iconStyle('linkedin')} />
                    <p>Linkedin</p>
                </span>
                <span 
                    className="social-icon"
                    onMouseOver={() =>  handleSocialHover('twitter')}
                    onMouseLeave={handleMouseLeave} 
                >
                    <TbBrandTwitterFilled style={iconStyle('twitter')} />
                    <p>Twitter</p>
                </span>
                <span 
                    className="social-icon"
                    onMouseOver={() =>  handleSocialHover('instagram')}
                    onMouseLeave={handleMouseLeave} 
                >
                    <TbBrandInstagram style={iconStyle('instagram')} />
                    <p>Instagram</p>
                </span>
                <span 
                    className="social-icon"
                    onMouseOver={() =>  handleSocialHover('facebook')}
                    onMouseLeave={handleMouseLeave} 
                >
                    <TbBrandFacebookFilled style={iconStyle('facebook')}/>
                    <p>Facebook</p>
                </span>
            </div>
            <div className="widget profile-widget">
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed iusto facilis repellendus vel quo magni voluptatibus quidem, suscipit nobis. */}
                <SlideWidget/>
            </div>
        </div>
    )
}

export default Profile