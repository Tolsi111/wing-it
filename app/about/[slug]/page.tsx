import Header from "@/components/Header";
import styles from "../../page.module.css";

export default function ArticlePage(params: any) {
  return (
    <main className={styles.main}>
      <Header title="This is an article!" />
      <p>{params.slug}</p>
    </main>
  );
}
