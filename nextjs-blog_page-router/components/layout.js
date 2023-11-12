// Layout component will be shared across all pages.
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Rhina Kim";
const profileImg = "/images/my-profile.jpg";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  // "home": Boolean home prop which will adjust the size of the title and the image

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags (like og:image), which are used to describe a page's content */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority // image is pre-loaded
              src={profileImg}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src={profileImg}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {/* "Back to home" link at the bottom if home is false (if not in home) */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
