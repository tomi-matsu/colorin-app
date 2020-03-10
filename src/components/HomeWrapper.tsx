import React from 'react';
import Card from './parts/Card';

import './HomeWrapper.scss';

interface ContainerProps {
  name: string;
}

const HomeWrapper: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="home-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      {/* <strong>{name}</strong> */}
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
    </div>
  );
};

export default HomeWrapper;
