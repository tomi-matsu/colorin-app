import React from 'react';
import Card from './Card';

import './HomeContainer.scss';

interface HomeContainerProps {
  name: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ name }) => {
  return (
    <div className="container">
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

export default HomeContainer;
