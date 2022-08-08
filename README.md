<h1 align="center">Algorithms in JavaScript</h1>

<p align="center">
  <a href="https://standardjs.com/">
    <img src="https://img.shields.io/static/v1?label=Code+style&message=standard&color=f3df49&style=flat-square" />
  </a>
  <a href="https://github.com/ollynevard/algorithms-js/blob/main/LICENSE.md">
    <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=64aca5&style=flat-square" />
  </a>
</p>

<p align="center">
  <a href="#-algorithms">Algorithms</a> •
  <a href="#-system-requirements">System requirements</a> •
  <a href="#-development">Development</a> •
  <a href="#-testing">Testing</a> •
  <a href="#-resouces">Resources</a>
</p>

A collection of algorithms implemented in JavaScript. Each algorithim includes a description of the problem, a solution with tests, and an explanation of the approach with their run time and space requirements ([Big O](https://en.wikipedia.org/wiki/Big_O_notation)).

## 🧮 Algorithms

<a href="#algorithms-in-javascript">Back to top</a>

- <a href="./src/twoSum">Two sum</a>
- <a href="./src/maxProfit">Best time to buy and sell stock</a>

## 📋 System requirements

<a href="#algorithms-in-javascript">Back to top</a>

- [Node.js](https://nodejs.org/) >= 14.0.0
- [pNpM](https://pnpm.io/)
- [pre-commit](https://pre-commit.com/)

## 🧑‍💻 Development

<a href="#algorithms-in-javascript">Back to top</a>

Clone the repository and run the following in the project root:

```
pnpm install
```

This will install the project's dependencies and configure pre-commit to ensure code styling rules, linting rules, and unit tests pass before any code changes are commited.

## 🧪 Testing

<a href="#algorithms-in-javascript">Back to top</a>

This project uses the [Vitest](https://vitest.dev/) unit test framework for testing.

To run the entire test suite:

```
pnpm test
```

Individual tests can be run by specifying the algorithm name as an argument:

```
pnpm test -- twoSum
```

To view a test coverage report run:

```
pnpm run test:coverage
```

## 🔗 Resources

<a href="#algorithms-in-javascript">Back to top</a>

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Leetcode](https://leetcode.com)
