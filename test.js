const THREE = require('three');
const test = require('tape');
const quatFromNormal = require('./');

test('should get quaternions', t => {
  t.ok(quatFromNormal(new THREE.Vector3()).isQuaternion, 'isQuaternion');
  t.deepEqual(quatFromNormal(new THREE.Vector3(0, 1, 0)).toArray(), [ 0, 0, 0, 1 ]);
  t.deepEqual(quatFromNormal(new THREE.Vector3(0, -1, 0)).toArray(), [ 1, 0, 0, 0 ]);
  t.deepEqual(quatFromNormal(new THREE.Vector3(0.25, 0.5, 1).normalize()).toArray(), [ 0.5149822244918705, 0, -0.12874555612296762, 0.8474773685686199 ]);
  const out2 = new THREE.Quaternion();
  const out1 = quatFromNormal(new THREE.Vector3(0.25, 0.5, 1).normalize(), out2);
  t.ok(out1 === out2, 'same instance');
  t.end();
})