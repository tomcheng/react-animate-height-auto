import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode, findDOMNode } from "react-dom";

import AnimateHeight from "src/";

describe("AnimateHeight", () => {
  let node;
  let component;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("shows content when expanded", () => {
    render(<AnimateHeight ref={el => { component = el; }} isExpanded>foo</AnimateHeight>, node, () => {
      const componentNode = findDOMNode(component);

      expect(node.innerHTML).toContain("foo");
      expect(componentNode.style.height).toEqual("auto");
    });
  });

  it("hides content when not expanded", () => {
    render(<AnimateHeight ref={el => { component = el; }} isExpanded={false}>foo</AnimateHeight>, node, () => {
      const componentNode = findDOMNode(component);

      expect(node.innerHTML).toContain("foo");
      expect(componentNode.style.height).toEqual("0px");
    });
  });
});
