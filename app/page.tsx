"user client";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {

  useEffect( () => {
    async function loadData() {
      const response = await fetch('https://api.github.com/users/joelgxp'
      );

      const data = await response.json();
      
      console.log(data)
    }

    loadData();
  },[])

  return (
    <main className={styles.main}>
      <h1>Joel</h1>
    </main>
  );
}
