import React, { Dispatch, SetStateAction, useState } from "react";

interface Settings {
  padding: string;
  lineHeight: string;
  fontSize: string;
}

interface SettingsProps {
  setPageSettings: Dispatch<SetStateAction<Settings>>;
}
const PageSettings = ({ setPageSettings }: SettingsProps) => {
  return (
    <article className="settings-box">
      <h4>CONTROLS</h4>
      <form></form>
    </article>
  );
};

export default PageSettings;
