type Zero = "Zero";
type S<N> = { n: N };

type One = S<Zero>;

type Two = S<One>;

type Three = S<Two>;

type Sum<X, SY> = SY extends S<infer Y> ? S<Sum<X, Y>> : X;

type Four = Sum<Two, Two>; // S<S<S<Zero>>>

type Five = Sum<Four, One>; // S<S<S<S<Zero>>>>

type Six = Sum<One, Five>; // S<S<S<S<Zero>>>>

type IsZero<N> = N extends Zero ? true : false;

type PeanoEquals<X, Y> = [X, Y] extends [Zero, Zero]
  ? true
  : IsZero<X> extends true
  ? false
  : IsZero<Y> extends true
  ? false
  : PeanoEquals<
      X extends S<infer XX> ? XX : never,
      Y extends S<infer YY> ? YY : never
    >;

type Product<X, SY> = SY extends S<infer Y> ? Sum<X, Product<X, Y>> : Zero;

type Check1 = Product<Zero, Zero>;
type Check2 = Product<One, Two>;
type Check3 = Product<Two, Three>;

type Check3_ = PeanoEquals<Product<Two, Three>, Six>;

// How to implement product with the idea of speeding up +
// 2 * 3
// 2 + 2 + 2
// 2 + (2 * 2)
// 2 + (2 + 2)
type Product2<X, SY> = SY extends S<infer Y> ? Sum<X, Product<X, Y>> : X;
// Same as Product within Peano axioms

type Check3__ = PeanoEquals<Product2<Two, Three>, Six>;
