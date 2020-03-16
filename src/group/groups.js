const frontRotationZ = [[-1, 1, 1], [0, 1, 1], [1, 1, 1], [1, 0, 1], [1, -1, 1], [0, -1, 1], [-1, -1, 1], [-1, 0, 1]]
const middleRotationZ = [[-1, 1, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0], [1, -1, 0], [0, -1, 0], [-1, -1, 0], [-1, 0, 0]]
const backRotationZ = [[-1, 1, -1], [0, 1, -1], [1, 1, -1], [1, 0, -1], [1, -1, -1], [0, -1, -1], [-1, -1, -1], [-1, 0, -1]]

const frontRotationX = [[1, 1, 1], [1, 1, 0], [1, 1, -1], [1, 0, -1], [1, -1, -1], [1, -1, 0], [1, -1, 1], [1, 0, 1]]
const middleRotationX = [[0, 1, 1], [0, 1, 0], [0, 1, -1], [0, 0, -1], [0, -1, -1], [0, -1, 0], [0, -1, 1], [0, 0, 1]]
const backRotationX = [[-1, 1, 1], [-1, 1, 0], [-1, 1, -1], [-1, 0, -1], [-1, -1, -1], [-1, -1, 0], [-1, -1, 1], [-1, 0, 1]]

const frontRotationY = [[-1, 1, -1], [0, 1, -1], [1, 1, -1], [1, 1, 0], [1, 1, 1], [0, 1, 1], [-1, 1, 1], [-1, 1, 0]]
const middleRotationY = [[-1, 0, -1], [0, 0, -1], [1, 0, -1], [1, 0, 0], [1, 0, 1], [0, 0, 1], [-1, 0, 1], [-1, 0, 0]]
const backRotationY = [[-1, -1, -1], [0, -1, -1], [1, -1, -1], [1, -1, 0], [1, -1, 1], [0, -1, 1], [-1, -1, 1], [-1, -1, 0]]


export {
    frontRotationZ,
    middleRotationZ,
    backRotationZ,
    frontRotationX,
    middleRotationX,
    backRotationX,
    frontRotationY,
    middleRotationY,
    backRotationY,
}