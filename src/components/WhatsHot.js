import React from 'react';
import { Col } from "antd";
import SearchPOI from './SearchPOI';
import Recommendations from './Recommendations'
import DrawPoints from './DrawPoints'
import Map from './Map';
import { ChakraProvider, theme } from '@chakra-ui/react'
import {GOOG_API_KEY, GDIR_BASE_URL} from "../constants";

class WhatsHot extends React.Component {
  render() {
    const {POIList,selected}=this.props;
    return (
      <>
      <Col span={13} className="left-side">
          <SearchPOI onShow={this.props.showNearbyPOI} />
          <table height="40px"></table>
          <Recommendations 
        POIList={POIList}
        selected={selected}
        updateSelection={this.props.updateSelection}
      />
      </Col>
      <Col span={9} className="right-side">
      <ChakraProvider theme={theme}>
      <Map />
      </ChakraProvider>
      </Col>
      </>
    )
  }
}
export default WhatsHot;