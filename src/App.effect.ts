import * as Either from '@effect/data/Either'
// import * as Effect from '@effect/io/e'
// import * as IO from '@effect/io/IO'

type IO<A> = () => A

interface ConsoleService {
  Console : {
    log : (msg : string) => IO<Either.Either<never, void>>
  }
}

export function helloworld(name:string) {
  return ({ Console } : ConsoleService ) => Console.log(`hello world : ${name}`)
  // return () : Either.Either<never, void> => {
  //   console.log(`Hello ${name}`);  
  //   return Either.right(undefined)
  // }
}

const call = helloworld('lkb');

const r = call({ Console : {
  log : (name : string) => () => { 
    console.log(name)
    return Either.right(undefined)
  }
} })

const result = r();