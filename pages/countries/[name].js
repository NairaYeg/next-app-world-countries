export default function Country({ country }) {
  const { name, flag } = country;
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{name}</h3>
      <img src={flag} alt={name} style={{ width: "400px", padding: "10px" }} />
    </div>
  );
}

export async function getStaticPaths() {
  let countries = [];
  try {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    countries = await data.json();
  } catch (e) {
    console.log(e);
  }

  const paths = countries.map(({ name }) => ({
    params: {
      name,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let country = [];
  try {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/name/${params.name}`
    );
    [country] = await data.json();
  } catch (e) {
    console.log(e);
  }

  return {
    props: { country },
  };
}
