/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ThemeProvider from '../ThemeProvider'

const ClockHands = ({ hourAngle, minAngle, secAngle }) => {

    // animation for seconds hand
    const secAnimation = keyframes`
        from{
            transform:rotate(${secAngle}deg);
        }
        to{
            transform:rotate(${secAngle + 360}deg);
        }
    `
    // animation for mins hand
    const minAnimation = keyframes`
        from{
            transform:rotate(${minAngle}deg);
        }
        to{
            transform:rotate(${minAngle + 360}deg);
        }
    `
    // animatio for hours hand
    const hourAnimation = keyframes`
        from{
            transform:rotate(${hourAngle}deg);
        }
        to{
            transform:rotate(${hourAngle + 360}deg);
        }
    `
    // hour hand styling
    const HourHand = styled.span`
        will-change: transform;
        transition: all 1s ease-in;
        position: absolute;
        z-index: 3;
        top: 60px;
        left: 95px;
        width: 4px;
        height: 50px;
        background-color: #555;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        transform-origin: 2px 35px;
        transform: translateZ(0);
        &.trans-appear {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-appear-active {
            transform:rotate(${hourAngle}deg);
            transition: all 800ms ease-in-out 400ms;
        };
        &.trans-appear-done {
            transition: all 800ms ease-in-out 400ms;
            animation: ${hourAnimation} 43200s linear infinite;
        };
         &.trans-enter {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-enter-active {
            transform:rotate(-100deg);
            transition: all 800ms ease-in-out;
        };
         &.trans-enter-done {
            transition: all 800ms ease-in-out;
        };
    `
    // mins hand styling
    const MinHand = styled.span`
        will-change: transform;
        position: absolute;
        z-index: 3;
        top: 40px;
        left: 95px;
        width: 4px;
        height: 70px;
        background-color: #555;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        transform-origin: 2px 55px;
        transform: translateZ(0);
         &.trans-appear {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-appear-active {
            transform:rotate(${minAngle}deg);
            transition: all 800ms ease-in-out 400ms;
        };
        &.trans-appear-done {
            transition: all 800ms ease-in-out 400ms;
            animation: ${minAnimation} 3600s linear infinite;
        };
         &.trans-enter {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-enter-active {
            transform:rotate(-100deg);
            transition: all 800ms ease-in-out;
        };
         &.trans-enter-done {
            transition: all 800ms ease-in-out;
        };
    `
    // seconds hand styling
    const SecHand = styled.span`
        will-change: transform;
        position: absolute;
        z-index: 4;
        top: 5px;
        left: 95px;
        width: 2px;
        height: 110px;
        background-color: #a00;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        transform-origin: 1px 90px;
        transform: translateZ(0);
        &:after {
            content: "";
            display: block;
            position: absolute;
            left: -5px;
            bottom: 14px;
            width: 8px;
            height: 8px;
            background-color: #a00;
            border: solid 2px #a00;
            border-radius: 50%;
        };
         &.trans-appear {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-appear-active {
            transform:rotate(${secAngle}deg);
            transition: all 800ms ease-in-out 400ms;
        };
        &.trans-appear-done {
            transition: all 800ms ease-in-out 400ms;
            animation: ${secAnimation} 60s linear infinite;
        };
         &.trans-enter {
            transform:rotate(0deg);
            transition: all 800ms ease-in-out;
        };
        &.trans-enter-active {
            transform:rotate(-100deg);
            transition: all 800ms ease-in-out;
        };
         &.trans-enter-done {
            transition: all 800ms ease-in-out;
        };
    `

    return (
        <ThemeProvider>
            <TransitionGroup>
                <CSSTransition key={hourAngle} exit={true} enter={true} appear={true} classNames="trans" timeout={1200}>
                    <HourHand />
                </CSSTransition>
                <CSSTransition key={minAngle} exit={true} enter={true} appear={true} classNames="trans" timeout={1200}>
                    <MinHand />
                </CSSTransition>
                <CSSTransition key={secAngle} exit={true} enter={true} appear={true} classNames="trans" timeout={1200}>
                    <SecHand />
                </CSSTransition>
            </TransitionGroup>
        </ThemeProvider>
    );
}

export default ClockHands;