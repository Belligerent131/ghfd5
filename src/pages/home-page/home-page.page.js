import React from "react";
import HeaderComponent from "../../components/header/header.component";
import StaticWidget from "../../components/widgets/static-widget/static-widget.component";
import NewsFeed from "../../components/widgets/news-feed/news-feed.component";
import FooterComponent from "../../components/footer/footer.component";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <StaticWidget />
        <NewsFeed />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
