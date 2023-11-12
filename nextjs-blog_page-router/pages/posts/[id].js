import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

// Import the getAllPostIds function and use it inside getStaticPaths.
export async function getStaticPaths() {
  // "paths" contains the array of known paths returned by getAllPostIds(),
  // which include the params defined by pages/posts/[id].js.
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Fetch necessary data to render the post with the given id.
export async function getStaticProps({ params }) {
  // Add the "await" keyword since the getPostData() function uses async.
  const postData = await getPostData(params.id);

  // Get the post data and return it as props.
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} /> {/* Formating date */}
        </div>
        {/* Render markdown content */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
