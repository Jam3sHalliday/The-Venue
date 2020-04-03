import React, { Component } from 'react';

import { Fade, Slide } from 'react-reveal';

import MyButton from '../utils/MyButton';

export default class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 23,
    }

    procentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.procentage()
        }, 40)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">


                    <Fade
                        onReveal = { () => this.procentage() }
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}% </span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets Before 5th DEC</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores quas magnam voluptatum velit error nostrum provident, debitis possimus consequatur at iste, voluptatem culpa, tempora molestiae dolores corrupti similique! Sit, consequuntur at illo deleniti eos debitis minima nobis facilis corporis.</p>

                            <MyButton
                                text = "Purchase"
                                bck = "#ffa800"
                                color = "#ffffff"
                                link = "https://www.google.com"
                            />

                        </div>
                    </Slide>

                </div>
            </div>
        )
    }
}
