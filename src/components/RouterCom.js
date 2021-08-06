import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderCom from './HeaderCom';
import HomeCom from './HomeCom';
import AboutCom from './AboutCom';
import ResumeCom from './ResumeCom';
import PortfolioCom from './PortfolioCom';
import ServicesCom from './ServicesCom';
function RouterCom() {
    return (
        <>
            <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 padLeft">
                        <HeaderCom/>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12 padLeft">
                        <Switch>
                            <Route path="/" exact component={HomeCom}/>
                            <Route path="/about" exact component={AboutCom}/>
                            <Route path="/resume" exact component={ResumeCom}/>
                            <Route path="/portfolio" exact component={PortfolioCom}/>
                            <Route path="/services" exact component={ServicesCom}/>
                        </Switch>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        </>
    )
}

export default RouterCom

