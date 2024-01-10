import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Button from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TCarouselsProps } from './Carousels.types';
import './Carousels.scss';

const Carousels: React.FC<TCarouselsProps> = ({
  dots = true,
  arrows = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  responsive = [],
  autoplay,
  variableWidth = false,
  children,
  onDragging,
}) => {
  const renderPrevArrow = (): React.ReactElement => {
    return <Button className="Carousels-arrow prev" iconName={EIconName.AngleLeft} iconColor={EIconColor.WHITE} />;
  };

  const renderNextArrow = (): React.ReactElement => {
    return <Button className="Carousels-arrow next" iconName={EIconName.AngleRight} iconColor={EIconColor.WHITE} />;
  };

  const settings = {
    speed: 500,
    dots,
    arrows,
    infinite,
    autoplay,
    slidesPerRow,
    autoplaySpeed: 4000,
    slidesToShow,
    slidesToScroll,
    responsive,
    variableWidth,
    nextArrow: renderNextArrow(),
    prevArrow: renderPrevArrow(),
    beforeChange: (): void => onDragging?.(true),
    afterChange: (): void => onDragging?.(false),
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings} swipeToSlide>
        {children}
      </Slider>
    </div>
  );
};

export default Carousels;
