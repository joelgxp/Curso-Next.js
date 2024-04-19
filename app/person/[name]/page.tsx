import styles from "../../page.module.css"

export default function Person({ params }: { params: { name: string } }) {
    return (
        <main className={styles.main}>

            <h1>Meu nome é {params.name}</h1>  

        </main>        
    );
}