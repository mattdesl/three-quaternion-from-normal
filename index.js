var THREE = require('three');
var axis = new THREE.Vector3();

module.exports = setDirection;
function setDirection (normal, quaternion) {
  quaternion = quaternion || new THREE.Quaternion();
  // vector is assumed to be normalized
  if (normal.y > 0.99999) {
    quaternion.set(0, 0, 0, 1);
  } else if (normal.y < -0.99999) {
    quaternion.set(1, 0, 0, 0);
  } else {
    axis.set(normal.z, 0, -normal.x).normalize();
    var radians = Math.acos(normal.y);
    quaternion.setFromAxisAngle(axis, radians);
  }
  return quaternion;
}
