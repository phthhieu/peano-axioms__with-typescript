type Zero = "Zero";
type S<N> = { n: N };

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

type One = S<Zero>;

type Two = S<One>;

type Three = S<Two>;

type Sum<X, SY> = SY extends S<infer Y> ? S<Sum<X, Y>> : X;

type Four = Sum<Two, Two>; // S<S<S<Zero>>>

type Five = Sum<Four, One>; // S<S<S<S<Zero>>>>

type Six = Sum<One, Five>; // S<S<S<S<Zero>>>>
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
// But, how do you prove Six = One + Five?
// => We need an equality check?
//    Thankfully, we have an idea ⚡

// Ref https://github.com/microsoft/TypeScript/issues/27024#issuecomment-420227672
type Equals<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type Check1 = Equals<Six[], Sum<One, Five>[]>;
type Check2 = Equals<Five, Sum<One, Five>>;

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
// What, it is just because Typescript,
// nothing related to Peano axioms

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

type Check1_ = PeanoEquals<Six[], Sum<One, Five>[]>;
type Check2_ = PeanoEquals<Five, Sum<One, Five>>;

type Check3_ = PeanoEquals<Sum<One, Two>, Three>;
type Check3__ = PeanoEquals<Three, Sum<One, Two>>;
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
//
//
// But what about product?
