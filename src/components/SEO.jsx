import { getAnalytics } from "firebase/analytics";
import app from "gatsby-plugin-firebase-v9.0";
import React, { useEffect } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const SEO = ({ title, description, pathname, children, meta = [] }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };
  useEffect(() => {
    getAnalytics(app);
  }, []);
  return (
    <>
      <title>{seo.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="../../Ganso.png" />
      {children}
      {meta.map((m) => (
        <meta key={m.property} {...m} />
      ))}
    </>
  );
};

export default SEO;
