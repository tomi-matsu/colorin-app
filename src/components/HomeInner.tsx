import React from 'react';
import Card from './parts/Card';

import './HomeInner.scss';

interface HomeInnerProps {
}

const HomeInner: React.FC<HomeInnerProps> = () => {
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
    </div>
  );
};

export default HomeInner;
