// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
      
function xmur3(str) {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
    h = h << 13 | h >>> 19;
  return () => {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function sfc32_lightweight_uint32(a, b, c, d) {
  return () => {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    var t = (a + b) | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0);
  };
}

function uint32_gen_to_01(func) {
  return () => {
    return func() / 2 ** 32;
  }
}

let _xmur = xmur3(SEED);
let rng_u32 = sfc32_lightweight_uint32(_xmur(), _xmur(), _xmur(), _xmur());
let rng_0to1 = uint32_gen_to_01(rng_u32);

function normals() {
  // https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
  
  let u1 = rng_0to1(), u2 = rng_0to1();
  
  let factor = Math.sqrt(-2 * Math.log(u1));
  let angle = 2 * Math.PI * u2;
  
  let z0 = factor * Math.cos(angle);
  let z1 = factor * Math.sin(angle);
  
  return [z0, z1];
}

function normals_nonzero() {
  // https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
  
  let u1 = (rng_u32() + 1) / (2 ** 32 + 1), u2 = rng_0to1();
  
  let factor = Math.sqrt(-2 * Math.log(u1));
  let angle = 2 * Math.PI * u2;
  
  let z0 = factor * Math.cos(angle);
  let z1 = factor * Math.sin(angle);
  
  return [z0, z1];
}
