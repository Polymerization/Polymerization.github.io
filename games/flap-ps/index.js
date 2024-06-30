(() => {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map4 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map4($$const(identity2))(a))(b);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure1 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply2(pure1(f))(a);
      };
    };
  };

  // output/Control.Bind/index.js
  var bind = function(dict) {
    return dict.bind;
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Data.Semigroup/index.js
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq2) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq2 : gt;
          };
        };
      };
    };
  };
  var ordNumberImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqNumberImpl = refEq;

  // output/Data.Eq/index.js
  var eqNumber = {
    eq: eqNumberImpl
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();

  // output/Data.Ord/index.js
  var ordNumber = /* @__PURE__ */ function() {
    return {
      compare: ordNumberImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqNumber;
      }
    };
  }();
  var compare = function(dict) {
    return dict.compare;
  };
  var max = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x) {
      return function(y) {
        var v = compare3(x)(y);
        if (v instanceof LT) {
          return y;
        }
        ;
        if (v instanceof EQ) {
          return x;
        }
        ;
        if (v instanceof GT) {
          return x;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 181, column 3 - line 184, column 12): " + [v.constructor.name]);
      };
    };
  };
  var min = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(x) {
      return function(y) {
        var v = compare3(x)(y);
        if (v instanceof LT) {
          return x;
        }
        ;
        if (v instanceof EQ) {
          return x;
        }
        ;
        if (v instanceof GT) {
          return y;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 172, column 3 - line 175, column 12): " + [v.constructor.name]);
      };
    };
  };
  var clamp = function(dictOrd) {
    var min1 = min(dictOrd);
    var max1 = max(dictOrd);
    return function(low) {
      return function(hi) {
        return function(x) {
          return min1(hi)(max1(low)(x));
        };
      };
    };
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };

  // output/Data.Show/index.js
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
  var fromMaybe = function(a) {
    return maybe(a)(identity3);
  };

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function(b1) {
    return function(b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function(b1) {
    return function(b2) {
      return b1 || b2;
    };
  };
  var boolNot = function(b) {
    return !b;
  };

  // output/Data.HeytingAlgebra/index.js
  var not = function(dict) {
    return dict.not;
  };
  var ff = function(dict) {
    return dict.ff;
  };
  var disj = function(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function(a) {
      return function(b) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
  };

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Monoid.Disj/index.js
  var Disj = function(x) {
    return x;
  };
  var semigroupDisj = function(dictHeytingAlgebra) {
    var disj2 = disj(dictHeytingAlgebra);
    return {
      append: function(v) {
        return function(v1) {
          return disj2(v)(v1);
        };
      }
    };
  };
  var monoidDisj = function(dictHeytingAlgebra) {
    var semigroupDisj1 = semigroupDisj(dictHeytingAlgebra);
    return {
      mempty: ff(dictHeytingAlgebra),
      Semigroup0: function() {
        return semigroupDisj1;
      }
    };
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var alaF = function() {
    return function() {
      return function() {
        return function() {
          return function(v) {
            return coerce2;
          };
        };
      };
    };
  };

  // output/Data.Foldable/index.js
  var alaF2 = /* @__PURE__ */ alaF()()()();
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure3 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure3(unit));
      };
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x) {
          return function(acc) {
            return append2(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };
  var foldMap = function(dict) {
    return dict.foldMap;
  };
  var any = function(dictFoldable) {
    var foldMap2 = foldMap(dictFoldable);
    return function(dictHeytingAlgebra) {
      return alaF2(Disj)(foldMap2(monoidDisj(dictHeytingAlgebra)));
    };
  };

  // output/Data.Int/foreign.js
  var toNumber = function(n) {
    return n;
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind3 = bind(dictMonad.Bind1());
    var pure3 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind3(f)(function(f$prime) {
          return bind3(a)(function(a$prime) {
            return pure3(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name2, moduleName, init) {
    var state = 0;
    var val;
    return function(lineNumber) {
      if (state === 2) return val;
      if (state === 1) throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state = 1;
      val = init();
      state = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */ function() {
    function Nil2() {
    }
    ;
    Nil2.value = new Nil2();
    return Nil2;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons2.create = function(value0) {
      return function(value1) {
        return new Cons2(value0, value1);
      };
    };
    return Cons2;
  }();
  var listMap = function(f) {
    var chunkedRevMap = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v2) {
            if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v2) {
            return function($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function(f) {
      return function(b) {
        var rev = function() {
          var go = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go(Nil.value);
        }();
        var $284 = foldl(foldableList)(flip(f))(b);
        return function($285) {
          return $284(rev($285));
        };
      };
    },
    foldl: function(f) {
      var go = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go;
    },
    foldMap: function(dictMonoid) {
      var append2 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append2(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };

  // output/Data.List/index.js
  var foldl2 = /* @__PURE__ */ foldl(foldableList);
  var reverse = /* @__PURE__ */ function() {
    var go = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Cons) {
            $tco_var_v = new Cons(v1.value0, v);
            $copy_v1 = v1.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go(Nil.value);
  }();
  var length = /* @__PURE__ */ foldl2(function(acc) {
    return function(v) {
      return acc + 1 | 0;
    };
  })(0);
  var filter = function(p) {
    var go = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return reverse(v);
          }
          ;
          if (v1 instanceof Cons) {
            if (p(v1.value0)) {
              $tco_var_v = new Cons(v1.value0, v);
              $copy_v1 = v1.value1;
              return;
            }
            ;
            if (otherwise) {
              $tco_var_v = v;
              $copy_v1 = v1.value1;
              return;
            }
            ;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 390, column 3 - line 390, column 27): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go(Nil.value);
  };

  // output/Effect.Exception/foreign.js
  function error(msg) {
    return new Error(msg);
  }
  function throwException(e) {
    return function() {
      throw e;
    };
  }

  // output/Effect.Exception/index.js
  var $$throw = function($4) {
    return throwException(error($4));
  };

  // output/Graphics.Canvas/foreign.js
  function getCanvasElementByIdImpl(id, Just2, Nothing2) {
    return function() {
      var el = document.getElementById(id);
      if (el && el instanceof HTMLCanvasElement) {
        return Just2(el);
      } else {
        return Nothing2;
      }
    };
  }
  function getContext2D(c) {
    return function() {
      return c.getContext("2d");
    };
  }
  function setFillStyle(ctx) {
    return function(style) {
      return function() {
        ctx.fillStyle = style;
      };
    };
  }
  function beginPath(ctx) {
    return function() {
      ctx.beginPath();
    };
  }
  function fill(ctx) {
    return function() {
      ctx.fill();
    };
  }
  function rect(ctx) {
    return function(r) {
      return function() {
        ctx.rect(r.x, r.y, r.width, r.height);
      };
    };
  }
  function clearRect(ctx) {
    return function(r) {
      return function() {
        ctx.clearRect(r.x, r.y, r.width, r.height);
      };
    };
  }
  function rotate(ctx) {
    return function(angle) {
      return function() {
        ctx.rotate(angle);
      };
    };
  }
  function translate(ctx) {
    return function(t) {
      return function() {
        ctx.translate(t.translateX, t.translateY);
      };
    };
  }
  function setFont(ctx) {
    return function(fontspec) {
      return function() {
        ctx.font = fontspec;
      };
    };
  }
  function fillText(ctx) {
    return function(text) {
      return function(x) {
        return function(y) {
          return function() {
            ctx.fillText(text, x, y);
          };
        };
      };
    };
  }
  function save(ctx) {
    return function() {
      ctx.save();
    };
  }
  function restore(ctx) {
    return function() {
      ctx.restore();
    };
  }

  // output/Graphics.Canvas/index.js
  var withContext = function(ctx) {
    return function(action) {
      return function __do6() {
        save(ctx)();
        var a = action();
        restore(ctx)();
        return a;
      };
    };
  };
  var getCanvasElementById = function(elId) {
    return getCanvasElementByIdImpl(elId, Just.create, Nothing.value);
  };
  var fillPath = function(ctx) {
    return function(path) {
      return function __do6() {
        beginPath(ctx)();
        var a = path();
        fill(ctx)();
        return a;
      };
    };
  };

  // output/Signal/foreign.js
  function make(initial) {
    var subs = [];
    var val = initial;
    var sig = {
      subscribe: function(sub2) {
        subs.push(sub2);
        sub2(val);
      },
      get: function() {
        return val;
      },
      set: function(newval) {
        val = newval;
        subs.forEach(function(sub2) {
          sub2(newval);
        });
      }
    };
    return sig;
  }
  var constant = make;
  function mapSig(fun) {
    return function(sig) {
      var out = make(fun(sig.get()));
      sig.subscribe(function(val) {
        out.set(fun(val));
      });
      return out;
    };
  }
  function merge(sig1) {
    return function(sig2) {
      var out = make(sig1.get());
      sig2.subscribe(out.set);
      sig1.subscribe(out.set);
      return out;
    };
  }
  function foldp(fun) {
    return function(seed) {
      return function(sig) {
        var acc = seed;
        var out = make(acc);
        sig.subscribe(function(val) {
          acc = fun(val)(acc);
          out.set(acc);
        });
        return out;
      };
    };
  }
  function sampleOn(sig1) {
    return function(sig2) {
      var out = make(sig2.get());
      sig1.subscribe(function() {
        out.set(sig2.get());
      });
      return out;
    };
  }
  function runSignal(sig) {
    return function() {
      sig.subscribe(function(val) {
        val();
      });
      return {};
    };
  }
  function filter2(fn) {
    return function(seed) {
      return function(sig) {
        var out = make(fn(sig.get()) ? sig.get() : seed);
        sig.subscribe(function(val) {
          if (fn(val)) out.set(val);
        });
        return out;
      };
    };
  }

  // output/Signal/index.js
  var semigroupSignal = {
    append: merge
  };
  var functorSignal = {
    map: mapSig
  };
  var map2 = /* @__PURE__ */ map(functorSignal);
  var flippedMap = function(dictFunctor) {
    return flip(map(dictFunctor));
  };
  var filterMap = function(f) {
    return function(def) {
      return function(sig) {
        return map2(fromMaybe(def))(filter2(isJust)(new Just(def))(map2(f)(sig)));
      };
    };
  };

  // output/Signal.DOM/foreign.js
  function keyPressedP(constant2) {
    return function(keyCode) {
      return function() {
        var out = constant2(false);
        window.addEventListener("keydown", function(e) {
          if (e.keyCode === keyCode) out.set(true);
        });
        window.addEventListener("keyup", function(e) {
          if (e.keyCode === keyCode) out.set(false);
        });
        return out;
      };
    };
  }
  function mouseButtonP(constant2) {
    return function(button) {
      return function() {
        var out = constant2(false);
        window.addEventListener("mousedown", function(e) {
          if (e.button === button) out.set(true);
        });
        window.addEventListener("mouseup", function(e) {
          if (e.button === button) out.set(false);
        });
        return out;
      };
    };
  }
  function touchP(constant2) {
    var out = constant2([]);
    function report(e) {
      var touches = [], i, l = e.touches.length;
      for (i = 0; i < l; i++) touches.push(e.touches.item(i));
      out.set(touches);
    }
    window.addEventListener("touchstart", report);
    window.addEventListener("touchend", report);
    window.addEventListener("touchmove", report);
    window.addEventListener("touchcancel", report);
    return function() {
      return out;
    };
  }
  function animationFrameP(constant2) {
    return function(now2) {
      return function() {
        var requestAnimFrame, cancelAnimFrame;
        if (window.requestAnimationFrame) {
          requestAnimFrame = window.requestAnimationFrame;
          cancelAnimFrame = window.cancelAnimationFrame;
        } else if (window.mozRequestAnimationFrame) {
          requestAnimFrame = window.mozRequestAnimationFrame;
          cancelAnimFrame = window.mozCancelAnimationFrame;
        } else if (window.webkitRequestAnimationFrame) {
          requestAnimFrame = window.webkitRequestAnimationFrame;
          cancelAnimFrame = window.webkitCancelAnimationFrame;
        } else if (window.msRequestAnimationFrame) {
          requestAnimFrame = window.msRequestAnimationFrame;
          cancelAnimFrame = window.msCancelAnimationFrame;
        } else if (window.oRequestAnimationFrame) {
          requestAnimFrame = window.oRequestAnimationFrame;
          cancelAnimFrame = window.oCancelAnimationFrame;
        } else {
          requestAnimFrame = function(cb) {
            setTimeout(function() {
              cb(now2());
            }, 1e3 / 60);
          };
          cancelAnimFrame = window.clearTimeout;
        }
        var out = constant2(now2());
        requestAnimFrame(function tick(t) {
          out.set(t);
          requestAnimFrame(tick);
        });
        return out;
      };
    };
  }

  // output/Signal.Time/foreign.js
  function now() {
    var perf = typeof performance !== "undefined" ? performance : null, proc = typeof process !== "undefined" ? process : null;
    return (perf && (perf.now || perf.webkitNow || perf.msNow || perf.oNow || perf.mozNow) || proc && proc.hrtime && function() {
      var t = proc.hrtime();
      return (t[0] * 1e9 + t[1]) / 1e6;
    } || Date.now).call(perf);
  }
  function everyP(constant2) {
    return function(t) {
      var out = constant2(now());
      setInterval(function() {
        out.set(now());
      }, t);
      return out;
    };
  }

  // output/Signal.Time/index.js
  var every = /* @__PURE__ */ everyP(constant);

  // output/Signal.DOM/index.js
  var flippedMap2 = /* @__PURE__ */ flippedMap(functorSignal);
  var MouseLeftButton = /* @__PURE__ */ function() {
    function MouseLeftButton2() {
    }
    ;
    MouseLeftButton2.value = new MouseLeftButton2();
    return MouseLeftButton2;
  }();
  var MouseMiddleButton = /* @__PURE__ */ function() {
    function MouseMiddleButton2() {
    }
    ;
    MouseMiddleButton2.value = new MouseMiddleButton2();
    return MouseMiddleButton2;
  }();
  var MouseIE8MiddleButton = /* @__PURE__ */ function() {
    function MouseIE8MiddleButton2() {
    }
    ;
    MouseIE8MiddleButton2.value = new MouseIE8MiddleButton2();
    return MouseIE8MiddleButton2;
  }();
  var MouseRightButton = /* @__PURE__ */ function() {
    function MouseRightButton2() {
    }
    ;
    MouseRightButton2.value = new MouseRightButton2();
    return MouseRightButton2;
  }();
  var touch = /* @__PURE__ */ touchP(constant);
  var tap = function __do() {
    var touches = touch();
    return flippedMap2(touches)(function(t) {
      if (t.length === 0) {
        return false;
      }
      ;
      return true;
    });
  };
  var mouseButton = /* @__PURE__ */ mouseButtonP(constant);
  var mouseButtonPressed = function(btn) {
    var buttonNumber = function() {
      if (btn instanceof MouseLeftButton) {
        return 0;
      }
      ;
      if (btn instanceof MouseRightButton) {
        return 2;
      }
      ;
      if (btn instanceof MouseMiddleButton) {
        return 1;
      }
      ;
      if (btn instanceof MouseIE8MiddleButton) {
        return 4;
      }
      ;
      throw new Error("Failed pattern match at Signal.DOM (line 48, column 20 - line 52, column 32): " + [btn.constructor.name]);
    }();
    return mouseButton(buttonNumber);
  };
  var keyPressed = /* @__PURE__ */ keyPressedP(constant);
  var animationFrame = /* @__PURE__ */ animationFrameP(constant)(now);

  // output/Main/index.js
  var bind2 = /* @__PURE__ */ bind(bindEffect);
  var pure2 = /* @__PURE__ */ pure(applicativeEffect);
  var clamp2 = /* @__PURE__ */ clamp(ordNumber);
  var show2 = /* @__PURE__ */ show(showInt);
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableList);
  var any2 = /* @__PURE__ */ any(foldableArray)(heytingAlgebraBoolean);
  var map3 = /* @__PURE__ */ map(functorList);
  var any1 = /* @__PURE__ */ any(foldableList)(heytingAlgebraBoolean);
  var foldr2 = /* @__PURE__ */ foldr(foldableList);
  var compose2 = /* @__PURE__ */ compose(semigroupoidFn);
  var map1 = /* @__PURE__ */ map(functorSignal);
  var append1 = /* @__PURE__ */ append(semigroupSignal);
  var Title = /* @__PURE__ */ function() {
    function Title2() {
    }
    ;
    Title2.value = new Title2();
    return Title2;
  }();
  var Alive = /* @__PURE__ */ function() {
    function Alive2(value0) {
      this.value0 = value0;
    }
    ;
    Alive2.create = function(value0) {
      return new Alive2(value0);
    };
    return Alive2;
  }();
  var Dead = /* @__PURE__ */ function() {
    function Dead2(value0) {
      this.value0 = value0;
    }
    ;
    Dead2.create = function(value0) {
      return new Dead2(value0);
    };
    return Dead2;
  }();
  var Tick = /* @__PURE__ */ function() {
    function Tick2(value0) {
      this.value0 = value0;
    }
    ;
    Tick2.create = function(value0) {
      return new Tick2(value0);
    };
    return Tick2;
  }();
  var Jump = /* @__PURE__ */ function() {
    function Jump2() {
    }
    ;
    Jump2.value = new Jump2();
    return Jump2;
  }();
  var tapEffSig = function __do2() {
    var jump = tap();
    return filterMap(function(b) {
      if (b) {
        return new Just(Jump.value);
      }
      ;
      return Nothing.value;
    })(Jump.value)(jump);
  };
  var spawnBlocks = function(time) {
    return function(v) {
      return function(s) {
        var $41 = time > s.nextBlockTime;
        if ($41) {
          var h2 = s.rules.gap / 2;
          var y = clamp2(h2)(600 - h2)(300);
          var blocks$prime = new Cons({
            x: 840,
            y,
            height: s.rules.gap,
            collected: false
          }, s.blocks);
          return {
            x: s.x,
            y: s.y,
            velocity: s.velocity,
            rules: s.rules,
            score: s.score,
            blocks: blocks$prime,
            nextBlockTime: time + s.rules.rate
          };
        }
        ;
        return s;
      };
    };
  };
  var render = function(ctx) {
    return function(model) {
      var degToRad = function(deg) {
        return deg * 3.14159265359 / 180;
      };
      var drawRectangle = function(rectangle) {
        return function(origin) {
          return function(rotDeg) {
            return function(color) {
              return withContext(ctx)(function __do6() {
                setFillStyle(ctx)(color)();
                translate(ctx)({
                  translateX: origin.x,
                  translateY: origin.y
                })();
                rotate(ctx)(degToRad(rotDeg))();
                return fillPath(ctx)(rect(ctx)({
                  x: rectangle.x - origin.x,
                  y: rectangle.y - origin.y,
                  width: rectangle.width,
                  height: rectangle.height
                }))();
              });
            };
          };
        };
      };
      var drawText = function(text) {
        return function(pos) {
          return function(size) {
            return function(origin) {
              return function(rotDeg) {
                return function(color) {
                  return withContext(ctx)(function __do6() {
                    setFont(ctx)(show2(size) + "px Monospace")();
                    setFillStyle(ctx)(color)();
                    translate(ctx)({
                      translateX: origin.x,
                      translateY: origin.y
                    })();
                    rotate(ctx)(degToRad(rotDeg))();
                    return fillText(ctx)(text)(pos.x - origin.x)(pos.y - origin.y)();
                  });
                };
              };
            };
          };
        };
      };
      var drawScore = function(s) {
        return drawText(show2(s.score))({
          x: 10,
          y: 40
        })(40)({
          x: 0,
          y: 0
        })(0)("white");
      };
      var drawBlock = function(b) {
        var w2 = 80 / 2;
        var h2 = b.height / 2;
        return function __do6() {
          drawRectangle({
            x: b.x - w2,
            y: 0,
            width: 80,
            height: b.y - h2 + 30
          })({
            x: b.x,
            y: b.y
          })(0)("green")();
          return drawRectangle({
            x: b.x - w2,
            y: b.y + h2 - 30,
            width: 80,
            height: 600
          })({
            x: b.x,
            y: b.y
          })(0)("green")();
        };
      };
      var drawBlocks = function(s) {
        return traverse_2(drawBlock)(s.blocks);
      };
      var drawBird = function(s) {
        var w2 = 80 / 2;
        var rotDeg = s.velocity * 3;
        var h2 = 50 / 2;
        return drawRectangle({
          x: s.x - w2,
          y: s.y - h2,
          width: 80,
          height: 50
        })({
          x: s.x,
          y: s.y
        })(rotDeg)("yellow");
      };
      return function __do6() {
        clearRect(ctx)({
          x: 0,
          y: 0,
          width: 800,
          height: 600
        })();
        if (model instanceof Title) {
          drawText("Press space to play")({
            x: 100,
            y: 100
          })(40)({
            x: 0,
            y: 0
          })(0)("white")();
          return drawRectangle({
            x: 200,
            y: 200,
            width: 400,
            height: 200
          })({
            x: 0,
            y: 0
          })(0)("yellow")();
        }
        ;
        if (model instanceof Alive) {
          drawBird(model.value0)();
          drawBlocks(model.value0)();
          return drawScore(model.value0)();
        }
        ;
        if (model instanceof Dead) {
          drawBird(model.value0)();
          drawBlocks(model.value0)();
          drawScore(model.value0)();
          return drawText("YOU ARE DEAD")({
            x: 100,
            y: 270
          })(50)({
            x: 0,
            y: 0
          })(0)("red")();
        }
        ;
        throw new Error("Failed pattern match at Main (line 201, column 3 - line 213, column 85): " + [model.constructor.name]);
      };
    };
  };
  var outOfBounds = function(s) {
    var tooLow = function(y) {
      return y > 600;
    };
    var tooHigh = function(y) {
      return y < 0;
    };
    return any2(function(f) {
      return f(s.y);
    })([tooHigh, tooLow]);
  };
  var moveBlocks = function(s) {
    var move = function(b) {
      var x$prime = b.x - s.rules.speed;
      return {
        collected: b.collected,
        height: b.height,
        y: b.y,
        x: x$prime
      };
    };
    var blocks$prime = map3(move)(s.blocks);
    return {
      x: s.x,
      y: s.y,
      velocity: s.velocity,
      rules: s.rules,
      nextBlockTime: s.nextBlockTime,
      score: s.score,
      blocks: blocks$prime
    };
  };
  var mouseEffSig = function __do3() {
    var jump = mouseButtonPressed(MouseLeftButton.value)();
    return filterMap(function(b) {
      if (b) {
        return new Just(Jump.value);
      }
      ;
      return Nothing.value;
    })(Jump.value)(jump);
  };
  var jumpEffSig = function __do4() {
    var jump = keyPressed(32)();
    return filterMap(function(b) {
      if (b) {
        return new Just(Jump.value);
      }
      ;
      return Nothing.value;
    })(Jump.value)(jump);
  };
  var gravity = function(s) {
    var velocity$prime = s.velocity + 0.4;
    var y$prime = s.y + velocity$prime;
    return {
      x: s.x,
      blocks: s.blocks,
      rules: s.rules,
      nextBlockTime: s.nextBlockTime,
      score: s.score,
      velocity: velocity$prime,
      y: y$prime
    };
  };
  var fixedRules = {
    speed: 7,
    rate: 2500,
    gap: 500
  };
  var restartGame = /* @__PURE__ */ function() {
    return {
      x: 200,
      y: 200,
      velocity: 0,
      blocks: Nil.value,
      rules: fixedRules,
      nextBlockTime: 0,
      score: 0
    };
  }();
  var collideBlock = function(s) {
    var btop = function(b) {
      return b.y - b.height / 2 + 60;
    };
    var bright = function(b) {
      return b.x + 80;
    };
    var bleft = function(b) {
      return b.x - 80;
    };
    var hitTop = function(b) {
      return s.x > bleft(b) && (s.x < bright(b) && s.y < btop(b));
    };
    var bbot = function(b) {
      return b.y + b.height / 2 - 60;
    };
    var hitBot = function(b) {
      return s.x > bleft(b) && (s.x < bright(b) && s.y > bbot(b));
    };
    return any1(function(b) {
      return hitTop(b) || hitBot(b);
    })(s.blocks);
  };
  var collectScore = function(s) {
    var collectable = function(b) {
      return !b.collected && b.x < s.x;
    };
    var score$prime = s.score + length(filter(collectable)(s.blocks)) | 0;
    var blocks$prime = map3(function(b) {
      var $47 = collectable(b);
      if ($47) {
        return {
          height: b.height,
          x: b.x,
          y: b.y,
          collected: true
        };
      }
      ;
      return b;
    })(s.blocks);
    return {
      x: s.x,
      y: s.y,
      velocity: s.velocity,
      rules: s.rules,
      nextBlockTime: s.nextBlockTime,
      score: score$prime,
      blocks: blocks$prime
    };
  };
  var cleanupBlocks = function(s) {
    var inBounds = function(b) {
      return b.x > -40;
    };
    var blocks$prime = filter(inBounds)(s.blocks);
    return {
      x: s.x,
      y: s.y,
      velocity: s.velocity,
      rules: s.rules,
      nextBlockTime: s.nextBlockTime,
      score: s.score,
      blocks: blocks$prime
    };
  };
  var update = function(v) {
    return function(v1) {
      if (v instanceof Tick && v1 instanceof Alive) {
        var updates = foldr2(compose2)(gravity)(new Cons(moveBlocks, new Cons(cleanupBlocks, new Cons(spawnBlocks(v.value0)(unit), new Cons(collectScore, Nil.value)))));
        var s$prime = updates(v1.value0);
        var dieConditions = [outOfBounds, collideBlock];
        var died = any2(function(f) {
          return f(s$prime);
        })(dieConditions);
        if (died) {
          return new Dead(s$prime);
        }
        ;
        return new Alive(s$prime);
      }
      ;
      if (v instanceof Tick && v1 instanceof Title) {
        return Title.value;
      }
      ;
      if (v instanceof Tick && v1 instanceof Dead) {
        return new Dead(v1.value0);
      }
      ;
      if (v instanceof Jump && v1 instanceof Alive) {
        return new Alive({
          x: v1.value0.x,
          y: v1.value0.y,
          blocks: v1.value0.blocks,
          rules: v1.value0.rules,
          nextBlockTime: v1.value0.nextBlockTime,
          score: v1.value0.score,
          velocity: -11
        });
      }
      ;
      if (v instanceof Jump && v1 instanceof Title) {
        return new Alive(restartGame);
      }
      ;
      if (v instanceof Jump && v1 instanceof Dead) {
        return new Alive(restartGame);
      }
      ;
      throw new Error("Failed pattern match at Main (line 71, column 1 - line 71, column 35): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var main = function __do5() {
    var jumpSig = jumpEffSig();
    var mouseSig = mouseEffSig();
    var tapSig = tapEffSig();
    var animSig = animationFrame();
    var ctx = bind2(bind2(getCanvasElementById("myCanvas"))(maybe($$throw("could not find canvas"))(pure2)))(getContext2D)();
    var updateTickSig = map1(function(t) {
      return new Tick(t);
    })(every(toNumber(16)));
    var allSigs = append1(updateTickSig)(append1(jumpSig)(append1(mouseSig)(tapSig)));
    var modelSig = foldp(update)(Title.value)(allSigs);
    var renderEff = sampleOn(animSig)(map1(render(ctx))(modelSig));
    return runSignal(renderEff)();
  };

  // <stdin>
  main();
})();
