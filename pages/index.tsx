import type { NextPage } from "next";

import largerTiger from "../public/largerTiger.png";

export async function getStaticProps() {
  return {
    props: {
      layoutProps: {
        variant: "complete",
        bgImage: largerTiger,
      },
    },
  };
}

const Home: NextPage = () => {
  return <div>Esto es una homepage</div>;
};

export default Home;
