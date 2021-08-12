import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>World Countries</h1>
      <div className={styles.container}>
        {countries.map(({ name, flag }) => {
          return (
            <div key={name} className={styles.card}>
              <Link href={`countries/${name}`}>
                <a>{name}</a>
              </Link>
              <div>
                <Image
                  src={flag}
                  alt={name}
                  style={{ width: "100px", padding: "10px" }}
                />
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
