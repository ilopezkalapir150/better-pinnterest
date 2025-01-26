import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav>
        <div>
          <h1>Pinterest but better</h1>
        </div>
        <div>
          <h2>an interesting gift for ben</h2>
        </div>
      </nav>
      <div className={styles.play_area}>
        {/* <button class="test-button" onclick="loadLocalImages();"></button> --> */}
        {/* <button class="test-button" onclick="start();"></button> --> */}
        <div id="pictures-container">
          <img className={styles.medium_size} src="assets/a new kind of love.png"></img>
        </div>
      </div>
    </div>
  );
}
