# three-quaternion-from-normal

Builds a ThreeJS quaternion from a normal vector.

This is useful for getting meshes to 'point' in the direction of a vector.

```js
const quaternionFromNormal = require('three-quaternion-from-normal');

// Say we want mesh to point from A to B point
const A = new THREE.Vector3(1, 0, 0);
const B = new THREE.Vector3(2, 5, -1);

// Get normal A->B
const normal = B.clone().sub(A).normalize();

// Get orientation
const quaternion = quaternionFromNormal(normal);

// Apply orientation to mesh
mesh.quaternion.copy(quaternion);
```

## Install

Use [npm](https://npmjs.com/) to install.

```sh
npm install three-quaternion-from-normal --save
```

## Usage

#### `quat = quaternionFromNormal(normal, [quaternionTarget])`

Builds a quaternion from the `normal` (a normalized THREE.Vector3), storing the result in `quaternionTarget` (a THREE.Quaternion) or creating a new quaternion object if no target is specified.

The quaternion target is returned.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/three-quaternion-from-normal/blob/master/LICENSE.md) for details.
