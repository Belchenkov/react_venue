import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    };

    porcentage = () => {
      if (this.state.discountStart < this.state.discountEnd) {
          this.setState({
              discountStart: this.state.discountStart + 1
          });
      }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => {
            this.porcentage();
        }, this.state.discountEnd);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porcentage()} >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JULY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ad animi aperiam commodi doloribus, exercitationem explicabo facere,
                                nisi nulla, odio quibusdam quo quod reiciendis velit? Accusamus
                                corporis dolor dolorem ducimus facere id labore laudantium, natus
                                nostrum officia possimus quaerat, qui voluptate!
                            </p>
                            <div>Button</div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;
