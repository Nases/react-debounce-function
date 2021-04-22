import { useCallback } from 'react'
import debounce from 'lodash.debounce'

export const useDebounce = (func, delay) => [useCallback(debounce(func, delay))]