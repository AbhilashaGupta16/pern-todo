import React from 'react'
import {Link} from "react-router-dom";
import hh_pic from "../images/hh-pic.jpg"
import cs_pic from "../images/cs-pic.jpg"
import ps_pic from "../images/ps-pic.jpg"
import ts_pic from "../images/ts-pic.jpg"
import pa_pic from "../images/pa-pic.jpg"

export default function Main() {
  return (
    <div>
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                <div class="card">
                    <img src={hh_pic} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Health And Hygience</h5>
                        <Link to="/hh-todo" class="btn btn-primary">Go to todo</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                <div class="card">
                    <img src={cs_pic} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Communication Skills</h5>
                        <a href="#" class="btn btn-primary">Go to todo</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                <div class="card">
                    <img src={ps_pic} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Presentation Skills</h5>
                        <a href="#" class="btn btn-primary">Go to todo</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                <div class="card">
                    <img src={ts_pic}class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Technical Skills</h5>
                        <a href="#" class="btn btn-primary">Go to todo</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-3">
                <div class="card">
                    <img src={pa_pic} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">Physical Appereance</h5>
                        <a href="#" class="btn btn-primary">Go to tdo</a>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
