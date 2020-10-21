import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data.records.map(({ recordid, fields }) => (
            <li className={utilStyles.listItem} key={recordid}>
              {fields.name}
              <br />
              {fields.bio_summary}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=rapworld&q=&facet=categories&facet=bio_yearsactivestart&facet=bio_birthdate&facet=bio_yearsactiveend&facet=bio_deathdate&facet=location_city&facet=location_neighborhood&refine.categories=rapper&refine.location_neighborhood=Harlem"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
