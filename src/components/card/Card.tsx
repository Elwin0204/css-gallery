import styles from "./Card.module.css"
import { createSignal, Show } from "solid-js"
import { SiSolid, SiCss3, SiZhihu, SiGithub, SiLinkedin, SiGmail } from "solid-icons/si"
import { HiOutlineArrowLeft } from "solid-icons/hi"

function Card(props: { title: string, link: string, outline: string, cover: string }) {
  const themeConfig = ['Red', 'Pink', 'Purple', 'DeepPurple', 'Indigo', 'Blue', 'LightBlue', 'Cyan', 'Teal', 'Green', 'LightGreen', 'Lime', 'Yellow', 'Amber', 'Orange', 'DeepOrange', 'Brown', 'Grey', 'BlueGrey']
  const theme = themeConfig[Math.floor(Math.random()*themeConfig.length)]
  const [isOpen, setIsOpen] = createSignal(false)

  const toggle = () => {
    isOpen() ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <>
      <div classList={
        {
          [styles.colMd4]: true,
          [styles.colSm6]: true,
          [styles.colXs12]: true,
        }
      }>
        <div
          classList={{
            [styles.card]: true,
            [styles[theme]]: true,
            [styles.active]: isOpen()
          }}>
          <h2>
            <span>{props.title}</span>
            <strong>
              <a href={props.link} target="_blank">
                <SiCss3 size={18} color="#fff" />
                <em>点击这里预览</em>
              </a>
            </strong>
          </h2>
          <div class={styles.content}>
            <div class={styles.imgBox}>
              <img class={styles.imgResponsive} src={props.cover} />
            </div>
            <div class={styles.description}>
              {props.outline}
            </div>
          </div>
          <a class={styles.btnToggle} onClick={() => {
            toggle()
          }}>
            <Show when={isOpen()} fallback={<SiSolid size={16} color="#fff" class="custom-icon" title="a11y" />}>
              <HiOutlineArrowLeft size={16} color="#fff" class="custom-icon" title="a11y" />
            </Show>
          </a>
          <div class={styles.footer}>
            <h4>
              联系我
            </h4>
            <i><SiGithub size={32} /></i>
            <i> <SiZhihu size={32} /></i>
            <i><SiLinkedin size={32} /></i>
            <i> <SiGmail size={32} /></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card