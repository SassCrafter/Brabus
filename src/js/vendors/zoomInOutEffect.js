const DEFAULT_SCALE = 1;
const ADDITIONAL_SCALE_RATIO = 0.2;

// maximum opacity = DEFAULT_OPACITY + ADDITIONAL_OPACITY_RATIO
const DEFAULT_OPACITY = 0.4;
const ADDITIONAL_OPACITY_RATIO = 0.6;

export const zoomEffect = {
	setTranslate(swiper) {
		const {
			width: swiperWidth,
			height: swiperHeight,
			slides,
			slidesSizesGrid,
		} = swiper;

		const isHorizontal = swiper.isHorizontal();
		const translate = swiper.translate;
		const center = isHorizontal ?  -translate + swiperWidth / 2 :
		-translate + swiperHeight / 2;

		for (let i = 0; i < slides.length; i += 1) {
			const slideElement = slides.eq(i);
			const nextSlideElement = slides.eq(i + 1);
			const slideSize = slidesSizesGrid[i];
			const slideOffset = slideElement[0].swiperSlideOffset;
			const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize;
			let scaleRate = DEFAULT_SCALE;
		      let opacityRate = DEFAULT_OPACITY;
		      const absOffsetMultiplier = Math.abs(offsetMultiplier);
		      // if (absOffsetMultiplier >= 0 && absOffsetMultiplier <= 1) {
		      //   scaleRate =
		      //     DEFAULT_SCALE + ADDITIONAL_SCALE_RATIO * (1 - absOffsetMultiplier);
		      //   opacityRate =
		      //     DEFAULT_OPACITY +
		      //     ADDITIONAL_OPACITY_RATIO * (1 - absOffsetMultiplier);
		      // }

		      // // Fix for ultra small values
		      // if (Math.abs(scaleRate) < 1.001) scaleRate = 1;

		      const slideTransform = `scale3d(1, 1, 1)`;
		      slideElement.transform(slideTransform);
		      nextSlideElement.transform('scale3d(0.5, 0.5, 1)');
		      slideElement[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
		      //slideElement[0].style.opacity = opacityRate;
		}
	},
	setTransition(swiper, duration) {
	   	swiper.slides.transition(duration);
	},
}