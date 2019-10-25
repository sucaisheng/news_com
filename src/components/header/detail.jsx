import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    var id = this.props.location.state;
    // console.log(id);
    // console.log(this.props);
    fetch("http://localhost:8080/detail", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data[0].detail });
      });
  }

  render() {
    return <div>{this.state.data}</div>;
  }

  componentWillUnmount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state !== this.props.location.state) {
      fetch("http://localhost:8080/detail", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ id: nextProps.location.state })
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ data: data[0].detail });
        });
    }
  }
}
