import React from "react";

import profilePic from "./profile-pic.png";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    const author = "Alan Russell";
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1 / 2)
          }}
        />
        <p>
          <strong>{author}</strong> is a{" "}
          <code>
            {`{ _.sample([ "software developer", "coding instructor", "sound
            engineer", "musician", "pure bawbag" ]) }`}
          </code>{" "}
          from Glasgow, Scotland.
        </p>
      </div>
    );
  }
}

export default Bio;
