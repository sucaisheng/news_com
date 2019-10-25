import React, { Component } from "react";
import {} from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { Route, Link, Switch } from "react-router-dom";

import Detail from "./detail";

export default class News extends Component {
  state = {
    news: ""
  };

  componentWillMount() {
    fetch("http://localhost:8080/news", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data });
      });
  }

  render() {
    const { news } = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
          <Menu.Item key={index}>
            <Link
              to=
              {{
                pathname: `/header/news/detail`,
                state: newsItem.id
              }}
            >
              <div>{newsItem.title}</div>
            </Link>
          </Menu.Item>
        ))
      : "没有加载到任何新闻";

    return (
      <div>
        <h1>News</h1>
        <Menu>{newsList}</Menu>
        <Switch>
          <Route path="/header/news/detail" component={Detail}></Route>
        </Switch>
      </div>
    );
  }
}
