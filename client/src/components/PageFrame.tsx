import React, { useState } from "react";
import Page from "./Page";
import PageSettings from "./PageSettings";
const PageFrame = () => {
  const [pageSettings, setPageSettings] = useState({
    padding: "6rem",
    lineHeight: "1.2",
    fontSize: "2.5rem",
  });
  return (
    <article className="page-frame">
      <PageSettings setPageSettings={setPageSettings}></PageSettings>
      <Page pageSettings={pageSettings}></Page>
    </article>
  );
};

export default PageFrame;
