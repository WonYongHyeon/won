import { useEffect, useRef, useState } from "react";
import MainUI from "./Main.presenter";

export default function Main() {
  const one = useRef<HTMLDivElement>(null);
  const two = useRef<HTMLDivElement>(null);
  const three = useRef<HTMLDivElement>(null);
  const four = useRef<HTMLDivElement>(null);
  const five = useRef<HTMLDivElement>(null);
  const six = useRef<HTMLDivElement>(null);

  const [scrollOne, setScrollOne] = useState(true);
  const [scrollTwo, setScrollTwo] = useState(false);
  const [scrollThree, setScrollThree] = useState(false);
  const [scrollFour, setScrollFour] = useState(false);
  const [scrollFive, setScrollFive] = useState(false);
  const [scrollSix, setScrollSix] = useState(false);

  const handleScroll = () => {
    if (
      one.current &&
      one.current.offsetTop + one.current.offsetHeight <=
        window.screen.height + window.scrollY
    ) {
      setScrollTwo(true);
    }
    if (
      two.current &&
      two.current.offsetTop !== 0 &&
      two.current.offsetTop + two.current.offsetHeight - 55 <=
        window.screen.height + window.scrollY
    ) {
      setScrollThree(true);
    }
    if (
      three.current &&
      three.current.offsetTop !== 0 &&
      three.current.offsetTop + three.current.offsetHeight - 55 <=
        window.screen.height + window.scrollY
    ) {
      setScrollFour(true);
    }
    if (
      four.current &&
      four.current.offsetTop !== 0 &&
      four.current.offsetTop + four.current.offsetHeight - 55 <=
        window.screen.height + window.scrollY
    ) {
      setScrollFive(true);
    }
    if (
      five.current &&
      five.current.offsetTop !== 0 &&
      five.current.offsetTop + five.current.offsetHeight - 55 <=
        window.screen.height + window.scrollY
    ) {
      setScrollSix(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll); // 스크롤 이벤트 제거
    };
  }, []);

  return (
    <MainUI
      one={one}
      two={two}
      three={three}
      four={four}
      five={five}
      six={six}
      scrollOne={scrollOne}
      scrollTwo={scrollTwo}
      scrollThree={scrollThree}
      scrollFour={scrollFour}
      scrollFive={scrollFive}
      scrollSix={scrollSix}
    />
  );
}
