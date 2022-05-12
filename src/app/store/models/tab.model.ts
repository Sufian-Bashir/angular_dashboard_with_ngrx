import { Slider } from "./slider.model";

export interface TabModel {
  name: string;
  index: number;
  isActive: boolean;
  defaultMessage: string;
  slider: Slider;
  isChartAdded: boolean;
  chartData: any[];
}

export interface SliderDetails {
  value: number;
  highValue: number;
  floor: number;
  ceil: number;
}
