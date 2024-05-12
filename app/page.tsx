import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header"; // @ symbol -> refer to root folder

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Main page" />
      <p>
        <Link href="/statistics">Statistics</Link>
      </p>
    </main>
  );
}
