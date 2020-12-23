import React from "react";

function Row(props) {
  const size = props.size.split(" ").map(size => "row-" + size).join(" ");

  return (
    <div className={size}>
      {props.children}
    </div>
  );
}

export default Row;
