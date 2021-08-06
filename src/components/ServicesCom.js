import React from 'react'
import {FaToolbox, FaSignal} from 'react-icons/fa';
import {FiBox} from 'react-icons/fi';
import {Link} from 'react-router-dom';
const ServicesCom = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                     <div className="col-lg-12 mt-4">
                        <h2>Services</h2>
                        <p className="mt-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FaToolbox className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FiBox className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FaSignal className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                </div>
          
                <div className="row">
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FaToolbox className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FaToolbox className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="serviceSummary">
                            <Link to="/">
                               <FaToolbox className="iconData"/>
                               <span>
                                   <h5>Lorem Ipsum</h5>
                                   <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                               </span>
                            </Link>
                         </div>
                     </div>
                </div>
                </div>
        </div>
    )
}

export default ServicesCom
