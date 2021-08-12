import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>World Countries</h1>
      <div className={styles.container}>
        {countries.map(({ name, flag }) => {
          console.log(flag);
          return (
            <div key={name} className={styles.card}>
              <Link href={`countries/${name}`}>
                <a>{name}</a>
              </Link>
              <div>
                <img src={flag} alt={name} width={200} height={150} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await data.json();

  return {
    props: {
      countries,
    },
  };
}
