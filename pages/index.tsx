import React, { useState } from "react";
import { wrapper } from "@styles/main.styles";

const MainApp: React.FunctionComponent<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 css={wrapper}>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default MainApp;
