import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Heading from "./Heading"
import TestiItem from './TestiItem'
import image from "../Assets/Ellipse 175.png"
import image2 from "../Assets/Ellipse 175 (1).png"
import image3 from "../Assets/Ellipse 175 (2).png"

function Testimonials() {
    /*
        Usuing 1st time OwlCarousel in React.js
    */

    var navsText = ['<span class="fa-solid fa-arrow-left"></span>', '<span class="fa-solid fa-arrow-right"></span>'];
    return (
        <div className='container testimonials'>
            <Heading title="Trusted by Thousands of Happy Customer" para="These are the stories of our customers who have joined us with great pleasure when using this crazy feature." />
            <div className="content">
                <OwlCarousel
                    className='owl-theme'
                    items={2.95}
                    loop
                    margin={30}
                    nav
                    navText={navsText}
                    responsive={{
                        0: {
                            items: 1
                        },
                        650: {
                            nav: false
                        },
                        850: {
                            items: 2,
                        },
                        1000: {
                            items: 2.95,
                        }
                    }}
                >
                    <TestiItem image={image} name="Viezh Robert" location="Warsaw, Poland" rate="4.5" desc="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
                    <TestiItem image={image2} name="Yessica Christy" location="Shanxi, China" rate="4.5" desc="“I like it because I like to travel far and still can connect with high speed.”." />
                    <TestiItem image={image3} name="Kim Young Jou" location="Seoul, South Korea" rate="4.5" desc="“This is very unusual for my business that currently requires a virtual private network that has high security.”." />
                    <TestiItem image={image} name="Viezh Robert" location="Warsaw, Poland" rate="4.5" desc="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
                    <TestiItem image={image2} name="Yessica Christy" location="Shanxi, China" rate="4.5" desc="“I like it because I like to travel far and still can connect with high speed.”." />
                    <TestiItem image={image3} name="Kim Young Jou" location="Seoul, South Korea" rate="4.5" desc="“This is very unusual for my business that currently requires a virtual private network that has high security.”." />
                    <TestiItem image={image} name="Viezh Robert" location="Warsaw, Poland" rate="4.5" desc="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
                    <TestiItem image={image2} name="Yessica Christy" location="Shanxi, China" rate="4.5" desc="“I like it because I like to travel far and still can connect with high speed.”." />
                    <TestiItem image={image3} name="Kim Young Jou" location="Seoul, South Korea" rate="4.5" desc="“This is very unusual for my business that currently requires a virtual private network that has high security.”." />
                    <TestiItem image={image} name="Viezh Robert" location="Warsaw, Poland" rate="4.5" desc="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”." />
                    <TestiItem image={image2} name="Yessica Christy" location="Shanxi, China" rate="4.5" desc="“I like it because I like to travel far and still can connect with high speed.”." />
                    <TestiItem image={image3} name="Kim Young Jou" location="Seoul, South Korea" rate="4.5" desc="“This is very unusual for my business that currently requires a virtual private network that has high security.”." />
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonials
