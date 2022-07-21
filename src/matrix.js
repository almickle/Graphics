const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const renderCanvas = document.getElementById("renderCanvas")
      renderCanvas.width = windowWidth
      renderCanvas.height = windowHeight

const ctx = renderCanvas.getContext("2d")


//projection matrix

const fNear = 0.1
const fFar = 1000
const aspectRatio = renderCanvas.height / renderCanvas.width
const FOV = 90
const rdFOV = FOV * 0.0175

const projMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

         projMatrix[0][0] = aspectRatio * rdFOV
         projMatrix[1][1] = rdFOV
         projMatrix[2][2] = (fFar) / (fFar - fNear)
         projMatrix[2][3] = -(fFar * fNear) / (fFar - fNear)
         projMatrix[3][2] = 1


// matrix multiplication function

function multiplyMatrix(inputMatrix, transformMatrix, outputMatrix) {

    outputMatrix[0] = inputMatrix[0] * transformMatrix[0][0] + inputMatrix[1] * transformMatrix[0][1] + inputMatrix[2] * transformMatrix[0][2] + inputMatrix[3] * transformMatrix[0][3]
    outputMatrix[1] = inputMatrix[0] * transformMatrix[1][0] + inputMatrix[1] * transformMatrix[1][1] + inputMatrix[2] * transformMatrix[1][2] + inputMatrix[3] * transformMatrix[1][3]
    outputMatrix[2] = inputMatrix[0] * transformMatrix[2][0] + inputMatrix[1] * transformMatrix[2][1] + inputMatrix[2] * transformMatrix[2][2] + inputMatrix[3] * transformMatrix[2][3]
    outputMatrix[3] = inputMatrix[0] * transformMatrix[3][0] + inputMatrix[1] * transformMatrix[3][1] + inputMatrix[2] * transformMatrix[3][2] + inputMatrix[3] * transformMatrix[3][3]

}

function normalizeMatrix (matrix) {
    if(matrix[3] !== 0) {
        matrix[0] /= matrix[3]
        matrix[1] /= matrix[3]
        matrix[2] /= matrix[3]
        matrix[3] /= matrix[3]

    }
}

function extractXY(matrix, coordinates) {

    coordinates[0] = matrix[0]
    coordinates[1] = matrix[1]

}

function mapCoords(inputCoords, rasterCoords) {

    rasterCoords[0] = (inputCoords[0] + 1) / 2 * renderCanvas.width
    rasterCoords[1] = (inputCoords[1] + 1) / 2 * renderCanvas.height

}

function drawTriangle(triangle) {
    
        ctx.beginPath();
        ctx.lineTo(triangle[1][0], triangle[1][1]);
        ctx.lineTo(triangle[2][0], triangle[2][1]);
        ctx.lineTo(triangle[0][0], triangle[0][1]);
        ctx.fillStyle = "rgb(0, 0, 0, 0.3)"
        ctx.fill();
        ctx.strokeStyle = "white"
        ctx.stroke()

}


const polygonMesh = [

    [[0, 0, 0], [0, 1, 0], [1, 1, 0]],
    [[0, 0, 0], [1, 1, 0], [1, 0, 0]],

    [[1, 0, 0], [1, 1, 0], [1, 1, 1]],
    [[1, 0, 0], [1, 1, 1], [1, 0, 1]],

    [[1, 0, 1], [1, 1, 1], [0, 1, 1]],
    [[1, 0, 1], [0, 1, 1], [0, 0, 1]],

    [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
    [[0, 0, 1], [0, 1, 0], [0, 0, 0]],

    [[0, 1, 0], [0, 1, 1], [1, 1, 1]],
    [[0, 1, 0], [1, 1, 1], [1, 1, 0]],
    
    [[1, 0, 1], [0, 0, 1], [0, 0, 0]],
    [[1, 0, 1], [0, 0, 0], [1, 0, 0]],

]


function renderMesh(mesh) {

    mesh.forEach((triangle, index, array) => {

        const renderTri = []

        array[index].forEach((vertex, index, array) => {

            const newMatrix = []
            const mewMatrix = []
            const pewMatrix = []
            const tewMatrix = []
            const zewMatrix = []

            const NDCcoords = []
            const xyCoords = []
            const renderCoords = [] 

            const theta = radCK * (frame * 90/fps)
            const rotationMatrixZ = [

                [Math.cos(theta), -Math.sin(theta), 0, 0],
                [Math.sin(theta), Math.cos(theta), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            
                ]
            
            const rotationMatrixX = [
        
                [1, 0, 0, 0],
                [0, Math.cos(theta), -Math.sin(theta), 0],
                [0, Math.sin(theta), Math.cos(theta), 0],
                [0, 0, 0, 1],
            
                ]

            const rotationMatrixY = [
        
                [Math.cos(theta), 0, Math.sin(theta), 0],
                [0, 1, 0, 0],
                [-Math.sin(theta), 0, Math.cos(theta), 0],
                [0, 0, 0, 1],
                
                ]

            const s = 2
            const scaleMatrix = [
                [s, 0, 0, 0],
                [0, s, 0, 0],
                [0, 0, s, 0],
                [0, 0, 0, 1],
            ]

            const tx = 0
            const ty = 0
            const tz = -20
            const translateMatrixZ = [
                [1, 0, 0, tx],
                [0, 1, 0, ty],
                [0, 0, 1, tz],
                [0, 0, 0, 1],
            ]

            const originMatrix = [
                [1, 0, 0, -0.5],
                [0, 1, 0, -0.5],
                [0, 0, 1, -0.5],
                [0, 0, 0, 1],
            ]

            const idMatrix = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]

            array[index].push(1)

            // translation
            multiplyMatrix(array[index], originMatrix, newMatrix)
    
            // rotation
            multiplyMatrix(newMatrix, rotationMatrixY, mewMatrix)
            multiplyMatrix(mewMatrix, rotationMatrixX, pewMatrix)
            
            // scale
            multiplyMatrix(pewMatrix, scaleMatrix, tewMatrix)

            // translation
            multiplyMatrix(tewMatrix, translateMatrixZ, zewMatrix)

            // projection
            multiplyMatrix(zewMatrix, projMatrix, NDCcoords)
            normalizeMatrix(NDCcoords)
            extractXY(NDCcoords, xyCoords)
            mapCoords(xyCoords, renderCoords)

            renderTri.push(renderCoords)

            array[index].pop()

    })

            drawTriangle(renderTri)
        
    })
}

const radCK = 0.0175
const fps = 24
let frame = 0

function eventTick(mesh) {
    
    setInterval(() => {

        ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height)
    
        renderMesh(mesh)
    
        frame++

    }, 1000/fps)

}




