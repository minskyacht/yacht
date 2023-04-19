import {DEVICES} from "../constants";
import {useWindowSize} from "./useWindowSize";
import {useMedia} from "./useMedia";

export const useSliderSizes = (imageSize, slidesToShow = 3) => {
    const device = useMedia();
    const { width: windowWidth } = useWindowSize()

    const amountOfSlidesToShow = device === DEVICES.tablet || device === DEVICES.phone ? 1 : slidesToShow;
    const containerSize = device===DEVICES.phone ? windowWidth - 50 : windowWidth - 100;
    const newImagesSize=DEVICES.tablet || device===DEVICES.phone ?
        imageSize.mobile : imageSize.desktop;

    return {
        amountOfSlidesToShow,
        containerSize,
        newImagesSize
    }
}