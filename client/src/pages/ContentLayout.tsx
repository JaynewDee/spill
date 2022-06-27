import React from "react";

const ContentLayout = (props: any) => (Page: React.FC, data: any) => {
  class WithData extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = data;
    }

    render() {
      return (
        <article className="content-layout">
          <Page {...this.state} />
        </article>
      );
    }
  }
  return WithData;
};

export { ContentLayout };
