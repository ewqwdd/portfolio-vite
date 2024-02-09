import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './PreviewSlider.module.css'
import ChessSlideAsync from './slides/ChessSlide/ChessSlide.async';
import { Suspense } from 'react';
import Spinner from '../Spinner/Spinner';
import StorageSlideAsync from './slides/StorageSlide/StorageSlide.async';
import { twMerge } from 'tailwind-merge';
import ChessSlideMobileAsync from './slides/ChessSlideMobile/ChessSlideMobile.async';
import StorageSlideMobileAsync from './slides/StorageSlideMobile/StorageSlideMobile.async';

const fallback = (<div className='h-full w-full flex justify-center items-center'><Spinner /></div>)

interface PreviewSliderProps {
  className?: string
  mobile?: boolean
}

export default function PreviewSlider({className, mobile}: PreviewSliderProps) {
  return (
    <Swiper
        grabCursor={true}
        effect={'creative'}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        className={twMerge("mySwiper mt-[3svh] aspect-video max-[520px]:w-[84%] lg:max-h-[30svh] lg:!mr-0", className, styles.sliderGlowing)}
      >
        <SwiperSlide className=''>
          <Suspense fallback={fallback}>
            {!mobile ? <ChessSlideAsync /> : <ChessSlideMobileAsync />}
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
        <Suspense fallback={fallback}>
            {!mobile ? <StorageSlideAsync /> : <StorageSlideMobileAsync />}
          </Suspense>
        </SwiperSlide>
      </Swiper>
  )
}
