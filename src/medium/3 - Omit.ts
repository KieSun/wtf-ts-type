/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in
  
  ### Question
  
  Implement the built-in `Omit<T, K>` generic without using it.
  
  Constructs a type by picking all properties from `T` and then removing `K`
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }
  ```
  
  > View on GitHub: https://tsch.js.org/3
*/


/* _____________ Your Code Here _____________ */
type MyOmit<T, K> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3/answer
  > View solutions: https://tsch.js.org/3/solutions
  > More Challenges: https://tsch.js.org
*/

