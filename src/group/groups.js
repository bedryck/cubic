const frontRotateZ = [[-1, 1, 1], [0, 1, 1], [1, 1, 1], [1, 0, 1], [1, -1, 1], [0, -1, 1], [-1, -1, 1], [-1, 0, 1]]
const middleRotateZ = [[-1, 1, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0], [1, -1, 0], [0, -1, 0], [-1, -1, 0], [-1, 0, 0]]
const backRotateZ = [[-1, 1, -1], [0, 1, -1], [1, 1, -1], [1, 0, -1], [1, -1, -1], [0, -1, -1], [-1, -1, -1], [-1, 0, -1]]

const frontRotateX = [[1, 1, 1], [1, 1, 0], [1, 1, -1], [1, 0, -1], [1, -1, -1], [1, -1, 0], [1, -1, 1], [1, 0, 1]]
const middleRotateX = [[0, 1, 1], [0, 1, 0], [0, 1, -1], [0, 0, -1], [0, -1, -1], [0, -1, 0], [0, -1, 1], [0, 0, 1]]
const backRotateX = [[-1, 1, 1], [-1, 1, 0], [-1, 1, -1], [-1, 0, -1], [-1, -1, -1], [-1, -1, 0], [-1, -1, 1], [-1, 0, 1]]

const frontRotateY = [[-1, 1, -1], [0, 1, -1], [1, 1, -1], [1, 1, 0], [1, 1, 1], [0, 1, 1], [-1, 1, 1], [-1, 1, 0]]
const middleRotateY = [[-1, 0, -1], [0, 0, -1], [1, 0, -1], [1, 0, 0], [1, 0, 1], [0, 0, 1], [-1, 0, 1], [-1, 0, 0]]
const backRotateY = [[-1, -1, -1], [0, -1, -1], [1, -1, -1], [1, -1, 0], [1, -1, 1], [0, -1, 1], [-1, -1, 1], [-1, -1, 0]]


export {
    frontRotateZ,
    middleRotateZ,
    backRotateZ,
    frontRotateX,
    middleRotateX,
    backRotateX,
    frontRotateY,
    middleRotateY,
    backRotateY,
}