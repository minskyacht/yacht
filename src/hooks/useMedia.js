import { useState, useEffect } from "react";

const MOBILE_SIZES = {
  MIN: 320,
  MAX: 767,
};

const TABLE_SIZES = {
  MIN: 768,
  MAX: 1023,
};

const SMALL_DESKTOP = {
  MIN: 1024,
  MAX: 1280,
};

export function useMedia() {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    setWindowDimensions(getDeviceTypeBySize());

    function handleResize() {
      setWindowDimensions(getDeviceTypeBySize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const getDeviceTypeBySize = () => {
  const { innerWidth } = window;
  if (innerWidth <= MOBILE_SIZES.MAX) {
    return 'mobile';
  }
  if (TABLE_SIZES.MIN <= innerWidth && innerWidth <= TABLE_SIZES.MAX) {
    return 'table';
  }
  if (SMALL_DESKTOP.MIN <= innerWidth && innerWidth <= SMALL_DESKTOP.MAX) {
    return 'small_desktop';
  }
  return 'desktop';
};
