import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./index.module.less";
import { Home } from "../components/home/home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Home/>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Casey Christensen</title>
