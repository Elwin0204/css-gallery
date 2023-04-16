import styles from "./Header.module.css"

function Header() {
  return (
    <div class={styles.cgHeader}>
      <div class={styles.cgContainer}>
        <div class={styles.brand}>
          <span class="icon-brand_ai" style={{
            "font-size": "64px"
          }}></span>
          <span>CSS Gallery</span>
        </div>
      </div>
    </div>
  )
}

export default Header