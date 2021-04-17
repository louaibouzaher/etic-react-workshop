import React, { useState } from "react";

export const Stateful = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.btn} onClick={() => setCount(count + 1)}>
        +
      </div>
      <div>{count}</div>
      <div style={styles.btn} onClick={() => setCount(count - 1)}>
        -
      </div>
    </div>
  );
};

export default Stateful;

const styles = {
  container: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 40,
  },
  btn: {
    height: 50,
    width: 50,
    margin: 5,
    padding: 5,
    backgroundColor: "#0d509d",
  },
};
