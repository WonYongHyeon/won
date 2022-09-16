import { LegacyRef, MutableRefObject, RefObject } from "react";

export interface IMainUIProps {
  one: RefObject<HTMLDivElement>;
  two: RefObject<HTMLDivElement>;
  three: RefObject<HTMLDivElement>;
  four: RefObject<HTMLDivElement>;
  five: RefObject<HTMLDivElement>;
  six: RefObject<HTMLDivElement>;
  scrollOne: boolean;
  scrollTwo: boolean;
  scrollThree: boolean;
  scrollFour: boolean;
  scrollFive: boolean;
  scrollSix: boolean;
}
