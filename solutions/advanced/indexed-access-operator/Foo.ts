// ------------------------------------------------------
// source
// ------------------------------------------------------

export interface Foo {
  foo: {
    bar: {
      baz: number
      quux: string
    }
  }
}

// ------------------------------------------------------
// tests
// ------------------------------------------------------

// $ExpectType number
export type Baz = Foo['foo']['bar']['baz']
