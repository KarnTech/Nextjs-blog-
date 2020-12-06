import Link from "next/link";
import { Layout, Bio, SEO, Posts } from "@components/common";
import { getSortedPosts } from "@utils/posts";
import styles from  '../assets/posts.module.css'


export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      <div className = {styles.posts}>
        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header >
              <h3 >
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <a >
                    <Posts  
                    title={title} 
                    description={description} 
                    date={date} 
                    slug={slug}
                    />
                  </a>
                </Link>
              </h3>
            </header>         
          </article>
        ))}
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
