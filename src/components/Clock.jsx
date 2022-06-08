// https://codepen.io/marioweb2008/pen/PoQJpbR

import { useRef, useEffect, useCallback } from "react";
import styles from "../styles/clock.module.css";

const Clock = () => {
  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  //use requestAnimationFrame for smoothness (shimmed with setTimeout fallback)
  const requestAnimFrame = () => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  };

  //position the hands
  const draw = useCallback(function () {
    var now = new Date(), //now
      then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0
      ), //midnight
      diffInMil = now.getTime() - then.getTime(), // difference in milliseconds
      h = diffInMil / (1000 * 60 * 60), //hours
      m = h * 60, //minutes
      s = m * 60; //seconds
    //rotate the hands accordingly
    secRef.current.style.webkitTransform = "rotate(" + s * 6 + "deg)";
    hourRef.current.style.webkitTransform =
      "rotate(" + (h * 30 + h / 2) + "deg)";
    minRef.current.style.webkitTransform = "rotate(" + m * 6 + "deg)";
  }, [secRef, minRef, hourRef]
)

  //initialize the clock in a self-invoking function
  const loop = useCallback(  function() {
    requestAnimFrame(loop);
    draw();
  }, [draw])

  // const requestRef = useRef();

  // const animate = (time) => {
  //   // The 'state' will always be the initial value here
  //   requestRef.current = requestAnimationFrame(animate);
  // };

  useEffect(() => {
    const stopInterVal = setInterval(() => {
      loop();
    }, 10);
    return () => clearInterval(stopInterVal);
  }, [loop]);

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, []); // Make sure the effect runs only once

  return (
    <div className={styles.main}>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
        </div>
        <div className={styles.hour}>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
          <div className={styles.min}></div>
        </div>
        <div className={styles.minHand} ref={minRef}></div>
        <div className={styles.hourHand} ref={hourRef}></div>
        <div className={styles.secHand} ref={secRef}></div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  );
};

export default Clock;
