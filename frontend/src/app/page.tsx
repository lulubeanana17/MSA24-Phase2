'use client'
import styles from "./page.module.css";
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button fontColor="#FFFFFF" backgroundColor="#FF5B6F" fontColorHover="#FFFFFF" backgroundColorHover="#E04860" label="hi" />
    </main>
  );
}
