import React from 'react';
import Card from '../parts/Card';

import './HomeInner.scss';

interface HomeInnerProps {
  items: any[]
}

type Props =  HomeInnerProps

export class HomeInner extends React.Component<Props> {

  render(){
    return (
      <div className="home-container">
        {this.props.items.map((item) => {
          return <Card item={item}/>
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    );
  };
};

export default HomeInner;
