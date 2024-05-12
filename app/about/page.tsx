import Header from "@/components/Header";
import styles from "../page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header title="About Page" />
      <p>
        <Link href="/about/app">About this app</Link>
      </p>
      <p>
        <Link href="/about/me">About me</Link>
      </p>
    </main>
  );
}
