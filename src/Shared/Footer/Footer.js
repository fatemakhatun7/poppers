import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Media</Link> 
                    <Link className="link link-hover">Categories</Link> 
                    <Link className="link link-hover">reviews</Link> 
                    <Link className="link link-hover">Support</Link>
                </div> 
                <div>
                    <span className="footer-title">More Info</span> 
                    <Link className="link link-hover">About us</Link> 
                    <Link className="link link-hover">Contact</Link> 
                    <Link className="link link-hover">How it works</Link> 
                    <Link className="link link-hover">Data & Research</Link>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Download App</span> 
                    <div className='w-32 rounded-lg'>
                        <img src="https://i.ibb.co/jDVp92j/playstore.jpg" alt="" />
                    </div>
                    <div className='w-32 rounded-lg'>
                        <img src="https://i.ibb.co/3khz8CJ/appStore.jpg" alt="" />
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div>
                    <p>Copyright © 2010 - All right reserved by <span className='text-rose-900 font-bold'>Poppers</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;