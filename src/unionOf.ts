/*

  Esercizio: ricavare l'unione dei tipi delle chiavi di un record

*/

interface X {
  a: string
  b: number
  c: boolean
}

type UnionOfKeys = never

// tests

import { AssertEquals } from './equals'

type S1 = AssertEquals<UnionOfKeys, 'a' | 'b' | 'c', 'T'>

/*

  Esercizio: ricavare l'unione dei tipi dei valori di un record

*/

type UnionOfValues = never

// tests

type S2 = AssertEquals<UnionOfValues, string | number | boolean, 'T'>
