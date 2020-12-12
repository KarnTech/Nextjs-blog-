import Link from "next/link";
import { Layout, Bio, SEO, Posts } from "@components/common";
import { getSortedPosts } from "@utils/posts";
import styles from  '../assets/posts.module.css'


export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      <div className={styles.posts}>
        <div className={styles.left}></div>
        <div className = {styles.postsmain}> </div>
        <div className = {styles.right}></div>
      </div>
      
      
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
