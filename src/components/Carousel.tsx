import { Carousel as AntCarousel } from 'antd';
import Card from './Card';
import data from '../data.json';

export function Carousel() {
  return (
    <AntCarousel arrows infinite={false} slidesToShow={3} dots={false}>
      {data.map((el, index) => (
        <div key={index}>
          <Card {...el} />
        </div>
      ))}
    </AntCarousel>
  );
}
