import React, { useRef, useEffect } from "react";
import { StyledVideo } from "./Stream.styles";
const Stream = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};
export default Stream;
