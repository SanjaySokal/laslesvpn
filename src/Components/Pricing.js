import React from 'react'
import Heading from "./Heading";
import img from "../Assets/Free.svg"
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className='container pricing'>
            <Heading title="Choose Your Plan" para="Let's choose the package that is best for you and explore it happily and cheerfully." />
            <div className="row">
                <div className="col-md-4">
                    <div className="price-list">
                        <img src={img} title='Pricing' alt="Pricing" />
                        <p>Free Plan</p>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"></i> Unlimited Bandwitch
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Encrypted Connection
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> No Traffic Logs
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Works on All Devices
                            </li>
                        </ul>
                        <div className="bottom">
                            <p>Free</p>
                            <Link to={"#"}>Select</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price-list">
                        <img src={img} title='Pricing' alt="Pricing" />
                        <p>Standard Plan</p>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"></i> Unlimited Bandwitch
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Encrypted Connection
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Yes Traffic Logs
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Works on All Devices
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Connect Anyware
                            </li>
                        </ul>
                        <div className="bottom">
                            <p>$9 <span>/ mo</span></p>
                            <Link to={"#"}>Select</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price-list border-red">
                        <img src={img} title='Pricing' alt="Pricing" />
                        <p>Premium Plan</p>
                        <ul>
                            <li>
                                <i className="fa-solid fa-check"></i> Unlimited Bandwitch
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Encrypted Connection
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Yes Traffic Logs
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Works on All Devices
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Connect Anyware
                            </li>
                            <li>
                                <i className="fa-solid fa-check"></i> Get New Features
                            </li>
                        </ul>
                        <div className="bottom">
                            <p>$12 <span>/ mo</span></p>
                            <Link to={"#"}>Select</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
