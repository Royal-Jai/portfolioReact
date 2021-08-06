import React from 'react';
import imgHeader from '../assets/images/aboutProfile.jpg';
import {RiArrowRightSLine, Ri24HoursFill} from 'react-icons/ri';
import {BiHappy} from 'react-icons/bi';
import {VscProject} from 'react-icons/vsc';
import {MdNetworkCheck} from 'react-icons/md';
import ProgressBar from "@ramonak/react-progress-bar";
const AboutCom = () => {
   
    return(
        <>
           <div className="container">
               <div className="row">
                   <div className="col-md-12 mt-4">
                       <h2 className="pb-2">About</h2>
                       <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   </div>
                   <div className="col-lg-4 mt-4">
                     <img src={imgHeader} alt="profile not display" />
                   </div>
                   <div className="col-lg-8">
                       <div className="profileData">
                       <h2>UI/UX Designer & Web Developer.</h2>
                       <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <div className="row">
                           <div className="col-lg-6">
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Birthday :</strong> 11 Apr 1994</p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Website :</strong> </p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Phone :</strong> 9182365296</p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Birthday :</strong> Bangalore</p>
                           </div>
                           <div className="col-lg-6">
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Age :</strong> 27</p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Degree :</strong> B.Tech </p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Email :</strong></p>
                               <p><RiArrowRightSLine className="arrowRight"/> <strong>Freelance :</strong> Available</p>
                           </div>
                           <div className="col-md-12">
                               <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                           </div>
                       </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="factsData">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 mt-4">
                         <h2 className="pb-2">Facts</h2>
                         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                       </div>
                       <div className="col-lg-3 mt-4">
                           <div>
                               <BiHappy className="iconBehappy"/>
                               <span>
                                   <h3>32</h3>
                                   <h4>Happy Clients</h4>
                                   <p>consequuntur quae</p>
                               </span>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4">
                       <div>
                               <VscProject className="iconBehappy"/>
                               <span>
                                   <h3>154</h3>
                                   <h4>Projects</h4>
                                   <p>consequuntur quae</p>
                               </span>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4">
                       <div>
                               <Ri24HoursFill className="iconBehappy"/>
                               <span>
                                   <h3>1456</h3>
                                   <h4>Hours Of Support</h4>
                                   <p>consequuntur quae</p>
                               </span>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4">
                       <div>
                               <MdNetworkCheck className="iconBehappy"/>
                               <span>
                                   <h3>32</h3>
                                   <h4>Hard Workers</h4>
                                   <p>consequuntur quae</p>
                               </span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="skillsData">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                          <h2 className="pb-2">Skills</h2>
                          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                          <div className="row">
                              <div className="col-lg-6 mt-4">
                                <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>HTML</label>
                                   <ProgressBar bgColor="#149ddd" height="18px"  completed={97} />
                                 </div>
                                 <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>CSS</label>
                                   <ProgressBar bgColor="#149ddd" height="18px" completed={90} />
                                 </div>
                                 <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>JavaScript</label>
                                   <ProgressBar bgColor="#149ddd" height="18px" completed={75} />
                                 </div>
                              </div>
                              <div className="col-lg-6 mt-4">
                                 <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>ReactJs</label>
                                   <ProgressBar bgColor="#149ddd" height="18px" completed={85} />
                                 </div>
                                 <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>PHP</label>
                                   <ProgressBar bgColor="#149ddd" height="18px" completed={65} />
                                 </div>
                                 <div className="text-center" style={{fontSize:'20px',fontWeight:'600', marginBottom:'12px'}}>
                                   <label>WORDPRESS</label>
                                   <ProgressBar bgColor="#149ddd" height="18px" completed={85} />
                                 </div>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default AboutCom