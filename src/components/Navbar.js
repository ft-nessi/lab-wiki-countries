import React from 'react';
import { Outlet } from 'react-router-dom';
import allCountries from '../countries.json';
import CountriesList from './CountriesList';
import { Row, Col } from 'antd';
function Navbar() {
  return (
    <div>
      <Row>
        <Col>
          <h1>LAB-WikiCountries</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <CountriesList allCountries={allCountries} />
        </Col>
        <Col span={12}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
