import React from 'react'
import homeImg from '../assets/images/0508NewLook.jpg'
import TypeWriterEffect from 'react-typewriter-effect';
const HomeCom = () => {
    return (
        <div>
            <div className="homeProfile" style={{backgroundImage:`url(${homeImg})` }}>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                         <h1>Galla JayaPrakash</h1>
                        <div>
                           <TypeWriterEffect
                                    startDelay={1000}
                                    cursorColor="red"
                                    multiText={[
                                    'Hey Hi!!!!',
                                    'I am Web Developer. ',
                                    'I am Freelancers.',
                                    'I am Web Developer. ',
                                    'I am Freelancers.',
                                    'I am Web Developer. ',
                                    'I am Freelancers.',
                                    'I am Web Developer. ',
                                    'I am Freelancers.',
                                    'I am Web Developer. ',
                                    'I am Freelancers.',
                                    ]}
                                    multiTextDelay={1500}
                                    typeSpeed={50}
                                    auto={true}
                                />
                           </div>
                       </div>
                   </div>
               </div>
               
            </div>
        </div>
    )
}

export default HomeCom
