# react-debounce-function

## Install

```sh
npm i react-debounce-function
```

## Usage

```javascript
const sayHi = () => {
  console.log('Hi')
}
const [debouncedSayHi] = useDebounce(sayHi, 1000)

debouncedSayHi() // executes after 1000 milliseconds
```