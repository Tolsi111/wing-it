import Link from "next/link";
import Header from "@/components/Header";// @ symbol -> refer to root folder
import styles from "../page.module.css"

export default function StatisticsPage() {
    return (
    <main className={styles.main}>
        <Header title="Statistics page"/>
      <p><Link href="/">Go back</Link></p>
    </main>
    );
}