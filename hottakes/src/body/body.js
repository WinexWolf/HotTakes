import React from "react";
import "./body.css";
import Footer from "../footer/footer";
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";

const Body = () => {
  return (
    <ScrollContainer snap="mandatory">
      <ScrollPage>
        <Animator>
          <h1>Let me show you scroll animation 😀</h1>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
export default Body;
