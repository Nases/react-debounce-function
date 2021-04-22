# react-debounce-function

## Install

```sh
npm i react-debounce-function
```

## Demo

A simple way to start playing around with react-debounce-function is with CodeSandbox:
https://codesandbox.io/s/react-debounce-function-njl0o

## Usage

### `useDebounce` is a hook for debouncing functions after a waiting time. 

```javascript
import { useDebounce } from 'react-debounce-function'

const MyComponent = () => {
  const sayHi = () => {
    console.log('Hi')
  }
  const [debouncedSayHi] = useDebounce(sayHi, 1000)

  return (
    // debouncedSayHi executes after 1000 milliseconds
    // only the latest call will be executed.
    <button onClick={debouncedSayHi}>say hi</button> 
  )
}

export default MyComponent
```