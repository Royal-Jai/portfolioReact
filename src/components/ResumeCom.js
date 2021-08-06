import React from 'react'
import {RiArrowRightSLine} from 'react-icons/ri';
const ResumeCom = () => {
    return (
        <>
           <div className="container">
               <div className="row pb-4">
                   <div className="col-md-12 mt-4">
                       <h2>Resume</h2>
                       <p className="mt-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   </div>
                   <div className="col-lg-6 mt-4">
                       <div className="summaryData">
                          <h2>Sumary</h2>
                          <h4 className="mt-4">Galla JayaPrakash</h4>
                          <p><i>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</i></p>
                          <p className="mt-3"><RiArrowRightSLine className="arrowRight"/> Portland par 127,Orlando, FL</p>
                          <p><RiArrowRightSLine className="arrowRight"/> 9182365296</p>
                          <p><RiArrowRightSLine className="arrowRight"/> jayaprakash.galla9113@gmail.com</p>
                       </div>
                       <div className="educationData mt-4">
                           <h2>Education</h2>
                           <h4 className="mt-4">Bachelor of Technology</h4>
                           <h5>2011 - 2015</h5>
                           <p><i>Jawaharlal Nehru Technological University Anantapur</i></p>
                           <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                       </div>
                   </div>
                   <div className="col-lg-6 mt-4">
                       <div className="professionalData">
                           <h2>Professional Experience</h2>
                           <h4 className="mt-4">Senior Web Developer</h4>
                           <h5>2019 - Present</h5>
                           <p><i>Experion, New York, NY</i></p>
                           <p>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</p>
                           <h4 className="mt-4"> Web Developer</h4>
                           <h5>2017 - 2019</h5>
                           <p><i>Experion, New York, NY</i></p>
                           <p>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</p>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default ResumeCom
