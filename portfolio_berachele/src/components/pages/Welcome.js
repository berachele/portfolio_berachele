import React from 'react';
import profileImg from '../../styles/images/profile.jpg'

export default function Welcome() {


    return (
        <div className='welcome-page'>
            <div className='title-image'>
                <h1>Welcome</h1>
                <div className='container'>
                    <img src={profileImg} alt='Profile of Rachele Edwards'/>
                </div>
            </div>
            <p>Hello, my name is Rachele Edwards and I am a Full-Stack Web Developer in the Silicon Slopes, Utah area. 
            I recently finished Lambda School, a remote boot camp based in California to teach you full-stack development, 
            computer science, critical thinking, leadership, and team-working skills. Check out my certificate 
            <a href='https://www.youracclaim.com/badges/a2a23b4b-58f0-4d30-a8c1-0846ba0ac8a3/linked_in' target='_blank' rel="noopener noreferrer"> here</a>. 
            Look through my portfolio to see my technical skills, projects, and to contact me with any questions or freelance inquiries. 
            I’m happy to work with you!</p>
        </div>
    )
}