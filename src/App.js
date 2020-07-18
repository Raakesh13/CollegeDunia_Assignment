import React, { Component } from "react";
import CollegeList from "./components/CollegeList";
import CollegeData from "../src/data/colleges.json";
import InfiniteScroll from "react-infinite-scroll-component";

class App extends Component {
  state = {
    collegeList: [],
    offset: 0,
    dataLength: "",
    perPage: 10,
  };

  componentWillMount() {
    this.setState(() => ({ dataLength: CollegeData["colleges"].length }));
    this.fetchData();
  }

  fetchData = () => {
    const data = CollegeData["colleges"]
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((college) => {
        return college;
      });
    this.setState(() => ({
      collegeList: this.state.collegeList.concat(data),
      offset: this.state.offset + this.state.perPage,
    }));
  };

  render() {
    return (
      <div className="App">
        <InfiniteScroll
          dataLength={this.state.collegeList.length}
          next={this.fetchData}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          <CollegeList collegeList={this.state.collegeList} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
