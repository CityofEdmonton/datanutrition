import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { Card, CardContent } from '@material-ui/core';
import Spacer from "./Spacer";
import { Element } from "react-scroll";

/**
 * The component
 * @type {Object}
 */
class Wrapper extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const { name, content } = this.props;
    const GCard = glamorous(Card)({
      border: "5px solid black",
      padding: 0
    });
    const GCardContent = glamorous(CardContent)({
      paddingLeft: "16px !important",
      paddingRight: "16px !important"
    });
    return (
      <div>
        <Spacer location={"outside"} />
        <GCard>
          <GCardContent>
            <Element name={name}>{content}</Element>
            <Spacer />
          </GCardContent>
        </GCard>
      </div>
    );
  }
}
Wrapper.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired
};
export default Wrapper;
