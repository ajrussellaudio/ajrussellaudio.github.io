---
title: Code Blocks and Graphs
date: "2018-03-02T00:02:26.323Z"
---

I write a lot of stuff with code blocks, and it would be nice to see what they look like. And occasionally I might wanna do a graph.

## JavaScript

```js
function doSomething() {
  // define functions up here
}

window.addEventListener("load", function() {
  var loopCount = 20;
  for (var i = 0; i < loopCount; i++) {
    doSomething();
  }
});
```

## Python

```python
def sum(*args):
    total = 0
    for number in args:
        total += number
    return total

sum(3, 5, 9)
# => 17
```

## Java

```java
public class Runner {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## React

```jsx
import React from "react";

const Link = ({ to, text }) => <a href={to}>{text}</a>;

export default Link;
```

And I can put text right after a code block, and it doesn't look bad either.

## Inline code

Okay, cool. But how about an inline code block? `npm install -g awesome` Yeah that looks really cool, but how does affect text that appears on the next line? Well it's broken over two lines now, but I think that using variables like `className` in a sentence will be fine.

## Graphs

Here's something pretty cool; graphs built with a Gatsby plugin for [Mermaid](https://mermaidjs.github.io/):

```mermaid
graph LR
  A(Controller) --- B(Models)
  A --- C(Views)
```

```mermaid
graph BT
  A(Client) -->|Request|B(Server)
  B -->|Response|A
```
