// 0. Problem:
// We only have a tool in hand
// - Typescript type system (Or JS function)
// - No predefined numbers
// - No "+", "." operators
// - No == check
//
// How to:
// - Prove "1 + 2 = 3"
// - Prove "2 . 3 = 6"
// - Prove "1 = 1"
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 1. Peano axioms: The Peano axioms define the natural numbers,
// often denoted as N. They were introduced in 1889 by
// Giuseppe Peano
//
// - #1 Zero is a natural number
// (Well, we can start at any, it just means the first number)
//
// - #2 For every natural number n,
// the successor of n is also a natural number.
// We denote the successor of n by S(n).
//
// - #3 For all natural numbers m & n,
// S(m) = S(n) if and only if m = n.
// !equality relation, along with:
// reflexive, symmetric, transitive,...
//
// - #4 Sum theorem:
//   X + S(Y) -> S(X + Y)
//
// - #5 Sum with Zero
//   X + Zero = X
//
// - #6 Product theorem:
//   X . S(Y) = X + (X . Y)
//
// - #7 Product with Zero
//   X . Zero = Zero
//
// Bonus: Equality relation seems obvious.
// But why we need + and .?

// My opinion:
// + is for estimating the size or counting
// that ppl agree with -> Eg
//
// . is for speeding up the + -> Eg
//

// CODING TIME
// Can we base on Peano axioms
// to implement +, ., equality check in Typescript/JS?
