import React, {Component} from 'react';

import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
    state = {
      prices: [100, 150, 250],
      positions: [
          'Balcony',
          'Medium',
          'Star'
      ],
      desc: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dolorum et iste quo reiciendis reprehenderit vel voluptates! A cupiditate dolorum ducimus harum iste molestias necessitatibus quia quisquam suscipit vitae.',
          'Dolore ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dolorum et iste quo reiciendis reprehenderit vel voluptates! A cupiditate dolorum ducimus harum iste molestias necessitatibus quia quisquam suscipit vitae.',
          'Duis ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dolorum et iste quo reiciendis reprehenderit vel voluptates! A cupiditate dolorum ducimus harum iste molestias necessitatibus quia quisquam suscipit vitae.'
      ],
      linkTo: [
          'http://sales/b',
          'http://sales/m',
          'http://sales/s'
      ],
      delay: [500, 0, 500]
    };

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            ${this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    );

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        { this.showBoxes() }
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;