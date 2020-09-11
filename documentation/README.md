# Setup Documentation

## Information

Class: CS 335-02
Project number: 01
Team name: BurritoUI

## Introduction

This project is a cellular automaton (Cella) variant of Langton's Ant written in Javascript and P5JS.
The algorithm we used is just a 2 x 2 matrix traversal and a bitwise manipulation

```js
var antDir = (this.hex % (32 >> cellState)) >> (4 - cellState);
```
