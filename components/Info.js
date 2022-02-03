import React from "react"

export default function Info() {
    return (
        <div className="info-wrapper">
            <div className="profile-picture-wrapper">
                <img src="https://scontent.fsan1-2.fna.fbcdn.net/v/t1.6435-9/116017475_1027783457655024_8885015523689227404_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RuuTrZkSuHQAX-PTauV&_nc_ht=scontent.fsan1-2.fna&oh=00_AT-Jbm4_xTUxPd2uRgOqE6xlW2dj9T_oZAEAZLGZ73diFw&oe=622101E0" alt="Josh Yee" className="profile-picture" />
            </div>
            
            <div className="text-info">
                <h1 className="name">Joshua Yee</h1>
                <p className="frontend-dev-title">Frontend Developer</p>
                <p className="email-text-top">test@test.com</p>
                
                <div className="top-contact">
                        <a className="btn email-btn-top" href = "mailto: test@test.com">
                            <i className="fas fa-envelope"></i> Email
                        </a>
                        
                        <a className="btn linkedin-btn-top" href="linkedin.com">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>      
                </div>
                
            </div>
        </div>
    )
    
}
