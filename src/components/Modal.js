// import React, { Fragment, useEffect, useRef } from "react";
// import Icon from "../Icons";
import styled from "styled-components";

export const ModalPane = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: ${({ show }) =>
    show ? "opacity 0.2s linear" : "visibility 0s 0.3s, opacity 0.2s linear"};
`;
export const ModalContainer = styled.div`
  ${
    "" /* // max-width: ${({ fullScreen }) => (fullScreen ? "100%" : "580px")}; */
  }
  width: ${({ width }) => (width ? width : "100%")};
  background: #fff;
  border-radius: 16px;
  position: relative;
  padding: 2.4rem;
`;
export const ModalTop = styled.div`
  ${"" /* border-bottom: ${({ noBB }) => (noBB ? "1px solid #edeff5" : "0")} */}

  border-bottom: 1px solid #edeff5;
  position: relative;
  @media screen and (max-width: 575.98px) {
    padding: 1.25rem 1.25rem;
    display: flex;
    align-items: center;
  }
  .closebtn,
  .closebtn-white {
    position: absolute;
    // top: 15px;
    // right: 2.5rem;
    top: -1rem;
    cursor: pointer;
    &:hover {
      color: #7000ff;
    }
    @media screen and (max-width: 575.98px) {
      position: relative;
      top: unset;
      margin-right: 1.25rem;

      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
  .closebtn.right {
    right: -1rem !important;
  }
  .closebtn.left {
    left: 2.5rem !important;
  }
  .closebtn-white {
    display: none;
  }
  p {
    text-align: center;
    // font-size: 1.125rem;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.002em;
    @media screen and (max-width: 575.98px) {
      // font-size: 0.875rem;
      text-align: left;
      line-height: 24px;
    }
  }
`;
export const ModalBottom = styled.div`
  ${"" /* // border-top: 1px solid #edeff5; */}
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0;
  margin-top: 2rem;
  position: relative;
  padding-left: 0;

  @media screen and (max-width: 575.98px) {
    padding: 1.25rem 1.25rem;
    padding-left: 0;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  position: relative;
  ${"" /* // max-height: 500px; */}
  overflow: scroll;
  overflow-y: scroll;
  scroll-behavior: smooth;
  @media screen and (max-width: 575.98px) {
    padding: ${({ noPadding = false }) => (noPadding ? "0" : "1.5rem 1.25rem")};
  }
`;
