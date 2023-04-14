import Head from "next/head";

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead = (props: PageHeadProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default PageHead;
