import styles from "./Carousel.module.css"
import { onMount, For, createSignal } from "solid-js"
import useSlide from "../../hooks/useSlide"
import throttle from "lodash.throttle"

function Carousel(props: { swiperList: { video: string, image: string }[] }) {
  const { leftSwiperList, rightSwiperList, mainSwiperList } = useSlide(props.swiperList)
  const [getOffsetX, setOffsetX] = createSignal(-2940);
  const [getDuration, setDuration] = createSignal("0.4s");
  let loopTimer: number | undefined = undefined

  const slideLoop = () => {
    loopTimer = setInterval(() => {
      setOffsetX((prev) => {
        if (Math.abs(588 * (mainSwiperList.length - 2)) === Math.abs(prev)) {
          setTimeout(() => {
            setDuration("0s")
            setOffsetX(-588)
          }, 400)
        }
        setDuration("0.4s")
        return prev - 588
      })
    }, 5000)
  }

  const slideLeft = () => {
    clearInterval(loopTimer)
    setOffsetX((prev) => {
      if (Math.abs(-588) === Math.abs(prev)) {
        setTimeout(() => {
          setDuration("0s")
          setOffsetX(-2940)
        }, 400)
      }
      setDuration("0.4s")
      return prev + 588
    })
    slideLoop()
  }
  const slideRight = () => {
    clearInterval(loopTimer)
    setOffsetX((prev) => {
      if (Math.abs(588 * (mainSwiperList.length - 2)) === Math.abs(prev)) {
        setTimeout(() => {
          setDuration("0s")
          setOffsetX(-588)
        }, 400)
      }
      setDuration("0.4s")
      return prev - 588
    })
    slideLoop()
  }
  onMount(() => {
    slideLoop()
  })
  
  return (
    <>
      <div class={styles.cgSwiper}>
        <div
          classList={{
            [styles.swiperContainer]: true,
            [styles.leftSwiper]: true,
            [styles.swiper]: true
          }}>
          <div class={styles.swiperWrapper} style={{
            transform: `translateX(${getOffsetX()}px)`,
            "transition-property": "all",
            "transition-timing-function": "linear",
            "transition-duration": getDuration()
          }}>
            <For each={leftSwiperList}>{(slide) =>
              <div classList={{
                [styles.leftSlide]: true,
                [styles.slide]: true,
                [styles.swiperSlide]: true
              }} style={{ width: "588px" }}>
                <img src={slide.image} classList={{
                  [styles.previewImage]: true
                }} />
              </div>
            }
            </For>
          </div>
        </div>
        <div
          classList={{
            [styles.swiperContainer]: true,
            [styles.rightSwiper]: true,
            [styles.swiper]: true
          }}>
          <div class={styles.swiperWrapper} style={{
            transform: `translateX(${getOffsetX()}px)`,
            "transition-property": "all",
            "transition-timing-function": "linear",
            "transition-duration": getDuration()
          }}>
            <For each={rightSwiperList}>{(slide) =>
              <div classList={{
                [styles.rightSlide]: true,
                [styles.slide]: true,
                [styles.swiperSlide]: true
              }} style={{ width: "588px" }}>
                <img src={slide.image} classList={{
                  [styles.previewImage]: true
                }} />
              </div>
            }
            </For>
          </div>
        </div>
        <div class={styles.cgScreen}></div>
        <div
          classList={{
            [styles.swiperContainer]: true,
            [styles.mainSwiper]: true,
            [styles.swiper]: true
          }}>
            <div class={styles.swiperWrapper} style={{
              transform: `translateX(${getOffsetX()}px)`,
              "transition-property": "all",
              "transition-timing-function": "linear",
              "transition-duration": getDuration()
            }}>
              <For each={mainSwiperList}>{(slide) =>
                <div classList={{
                  [styles.mainSlide]: true,
                  [styles.slide]: true,
                  [styles.swiperSlide]: true
                }} style={{ width: "588px" }}>
                  <video src={slide.video} class={styles.slideVideo} autoplay={ true } muted={ true } loop={ true }></video>
                  <img src={slide.image} classList={{
                    [styles.previewImage]: true,
                    [styles.loaded]:  true
                  }} />
                </div>
              }
              </For>
            </div>
        </div>
        <div class={styles.swiperBtnPrev} onClick={throttle(slideLeft, 500)}></div>
        <div class={styles.swiperBtnNext} onClick={throttle(slideRight, 500)}></div>
      </div>
    </>
  )
}

export default Carousel