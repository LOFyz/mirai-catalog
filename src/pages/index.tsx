import type { HeadFC } from "gatsby";
import React from "react";
import SEO from "../components/SEO";

const IndexPage = () => {
  return <div>Hello gatsby</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title={"Mirai - Tela de Inicio"} />;
