# eslint-config-pythoncoderas-typescript
My reusable eslint config for typescript projects.

## Installation

First, install the package via `npm install --save-dev eslint-config-pythoncoderas-typescript`.

Then, in your .eslintrc file, add the following line:

```json
{
  "extends": [
    "pythoncoderas-typescript"
  ]
}
```

## Compatibility with eslint-config-pythoncoderas

In order to get prettier rules to apply, `eslint-config-pythoncoderas` needs to be extended **after**
`eslint-config-pythoncoderas-typescript`. An example .eslintrc file would look like this:

```json
{
  "extends": [
    "pythoncoderas-typescript",
    "pythoncoderas"
  ]
}
```
