// ------------------------------------------------------
// source
// ------------------------------------------------------

export type Key = 'foo'

export type Singleton = unknown

// ------------------------------------------------------
// tests
// ------------------------------------------------------

// $ExpectType number
export type Test = Singleton['foo']