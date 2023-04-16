import { Component } from 'solid-js'
import styles from './App.module.css'

import { lazy, For } from 'solid-js'
import links from './links'
const Card = lazy(() => import('./components/card/Card'))
const Header = lazy(() => import('./components/header/Header'))
const Carousel = lazy(() => import('./components/carousel/Carousel'))

import MP4_vm8 from './assets/images/vm8.mp4'
import IMG_vm8 from './assets/images/vm8.png'
import MP4_vm7 from './assets/images/vm7.mp4'
import IMG_vm7 from './assets/images/vm7.png'
import MP4_vm6 from './assets/images/vm6.mp4'
import IMG_vm6 from './assets/images/vm6.png'
import MP4_vm5 from './assets/images/vm5.mp4'
import IMG_vm5 from './assets/images/vm5.png'
import MP4_vm4 from './assets/images/vm4.mp4'
import IMG_vm4 from './assets/images/vm4.png'

const swiperList = [
  { video: MP4_vm8, image: IMG_vm8 },
  { video: MP4_vm4, image: IMG_vm4 },
  { video: MP4_vm5, image: IMG_vm5 },
  { video: MP4_vm6, image: IMG_vm6 },
  { video: MP4_vm7, image: IMG_vm7 },
  { video: MP4_vm8, image: IMG_vm8 },
  { video: MP4_vm4, image: IMG_vm4 },
]

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Carousel swiperList={swiperList} />
      <div class={styles.container}>
        <div class={styles.row}>
        <For each={links.gallery}>{(card) =>
          <Card title={card.title} link={card.link} outline={card.outline} cover={card.cover} />
        }
        </For>
        </div>
      </div>
    </div>
  );
};

export default App
