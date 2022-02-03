import React from "react"

export default function Info() {
    return (
        <div className="info-wrapper">
            <div className="profile-picture-wrapper">
                <img src="https://scontent.fsac1-1.fna.fbcdn.net/v/t31.18172-8/23632220_10156042506191155_5614974461826187500_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=x3B-hAufFBQAX-a3q5i&tn=rtM7D2bPn1BU36M4&_nc_ht=scontent.fsac1-1.fna&oh=00_AT8iCxihs75Dua5YfXDGlgqwKz4Kn1E7LPvXi0dJr7EVMA&oe=61F49B79" alt="Josh Yee" className="profile-picture" />
            </div>
            
            <div className="text-info">
                <h1 className="name">Joshua Yee</h1>
                <p className="frontend-dev-title">Frontend Developer</p>
                <p className="email-text-top">joshyee@gmail.com</p>
                
                <div className="top-contact">
                        <a className="btn email-btn-top" href = "mailto: joshyee@gmail.com">
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