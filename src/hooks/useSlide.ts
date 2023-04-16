import deepClone from "../utils/deepClone"

interface Islide {
  video: string
  image: string
}
const useSlide = (slideList: Islide[]) => {
  const mainSwiperList = deepClone(slideList)
  const leftSwiperList = deepClone(slideList.slice(0, -2))
  const leftSwiperFirst = deepClone(leftSwiperList[0])
  const leftSwiperLast = deepClone(leftSwiperList[leftSwiperList.length-1])
  leftSwiperList.push(leftSwiperFirst)
  leftSwiperList.unshift(leftSwiperLast)
  const rightSwiperList = deepClone(slideList.slice(-(slideList.length-2)))
  const rightSwiperFirst = deepClone(rightSwiperList[0])
  const rightSwiperLast = deepClone(rightSwiperList[rightSwiperList.length-1])
  rightSwiperList.push(rightSwiperFirst)
  rightSwiperList.unshift(rightSwiperLast)

  return {
    leftSwiperList,
    rightSwiperList,
    mainSwiperList
  }
}

export default useSlide