import React, { useState } from "react";

interface PageProps {
  padding: string;
  lineHeight: string;
  fontSize: string;
}
const Page = ({ pageSettings }: { pageSettings: PageProps }) => {
  return (
    <>
      <textarea style={pageSettings} className="page" name="" id=""></textarea>
    </>
  );
};

export default Page;
