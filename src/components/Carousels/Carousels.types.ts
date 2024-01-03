export type TCarouselsProps = {
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  slidesPerRow?: number;
  responsive?: Array<any>;
  variableWidth?: boolean;
  onDragging?: (dragging: boolean) => void;
};
