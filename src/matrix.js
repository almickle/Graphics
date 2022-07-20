const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const renderCanvas = document.getElementById("renderCanvas")
      renderCanvas.width = 1000
      renderCanvas.height = 800
      renderCanvas.style.border = "solid"
      renderCanvas.style.borderWidth = "1px"

      const ctx = renderCanvas.getContext("2d")


// matrix constants

const matrix4x4 = [
    [1, 0, 2, 0],
    [0, 3, 0, 4],
    [0, 0, 5, 0],
    [6, 0, 0, 7],
]

const matrix1x4 = [2, 5, 1, 8]


//projection matrix

const fNear = 0.1
const fFar = 1000
const fLeft = -renderCanvas.width / 2
const fRight = renderCanvas.width / 2
const fBottom = -renderCanvas.height / 2
const fTop = renderCanvas.height / 2

const aspectRatio = renderCanvas.height / renderCanvas.width
const FOV = 90
const rdFOV = FOV * 0.0175
const focLen = 1 / (Math.tan(rdFOV/2))

const fWidth = renderCanvas.width
const fHeight = renderCanvas.height

const projMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

    //   projMatrix[0][0] = focLen
    //   projMatrix[1][1] = focLen / aspectRatio
    //   projMatrix[2][2] = -(fFar + fNear) / (fFar - fNear)
    //   projMatrix[2][3] = -(2 * fFar *fNear) / (fFar - fNear)
    //   projMatrix[3][2] = -1

    //   projMatrix[0][0] = (2 * fNear) / (fRight - fLeft)
    //   projMatrix[1][1] = (2 * fNear) / (fTop - fBottom)
    //   projMatrix[2][2] = (fFar) / (fFar - fNear)
    //   projMatrix[3][2] = -(fFar * fNear) / (fFar - fNear)

         projMatrix[0][0] = aspectRatio * rdFOV
         projMatrix[1][1] = rdFOV
         projMatrix[2][2] = (fFar) / (fFar - fNear)
         projMatrix[2][3] = -(fFar * fNear) / (fFar - fNear)
         projMatrix[3][2] = 1


// matrix multiplication function

function multiplyNormalizeMatrix(inputMatrix, transformMatrix, outputMatrix) {

    // console.log("Input:")
    //     console.log(inputMatrix)

    outputMatrix[0] = inputMatrix[0] * transformMatrix[0][0] + inputMatrix[1] * transformMatrix[0][1] + inputMatrix[2] * transformMatrix[0][2] + inputMatrix[3] * transformMatrix[0][3]
    outputMatrix[1] = inputMatrix[0] * transformMatrix[1][0] + inputMatrix[1] * transformMatrix[1][1] + inputMatrix[2] * transformMatrix[1][2] + inputMatrix[3] * transformMatrix[1][3]
    outputMatrix[2] = inputMatrix[0] * transformMatrix[2][0] + inputMatrix[1] * transformMatrix[2][1] + inputMatrix[2] * transformMatrix[2][2] + inputMatrix[3] * transformMatrix[2][3]
    outputMatrix[3] = inputMatrix[0] * transformMatrix[3][0] + inputMatrix[1] * transformMatrix[3][1] + inputMatrix[2] * transformMatrix[3][2] + inputMatrix[3] * transformMatrix[3][3]

    // console.log("Output:")

    //     console.log("Unnormalized:")
    //     console.log(outputMatrix)
    
        normalizeMatrix(outputMatrix)
    
        // console.log("Normalized:")
        // console.log(outputMatrix)

}

function multiplyMatrix(inputMatrix, transformMatrix, outputMatrix) {

    // console.log("Input:")
    //     console.log(inputMatrix)

    outputMatrix[0] = inputMatrix[0] * transformMatrix[0][0] + inputMatrix[1] * transformMatrix[0][1] + inputMatrix[2] * transformMatrix[0][2] + inputMatrix[3] * transformMatrix[0][3]
    outputMatrix[1] = inputMatrix[0] * transformMatrix[1][0] + inputMatrix[1] * transformMatrix[1][1] + inputMatrix[2] * transformMatrix[1][2] + inputMatrix[3] * transformMatrix[1][3]
    outputMatrix[2] = inputMatrix[0] * transformMatrix[2][0] + inputMatrix[1] * transformMatrix[2][1] + inputMatrix[2] * transformMatrix[2][2] + inputMatrix[3] * transformMatrix[2][3]
    outputMatrix[3] = inputMatrix[0] * transformMatrix[3][0] + inputMatrix[1] * transformMatrix[3][1] + inputMatrix[2] * transformMatrix[3][2] + inputMatrix[3] * transformMatrix[3][3]

    // console.log("Output:")
    //     console.log(outputMatrix)
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

    // console.log("Input:")
    //     console.log(matrix)

    coordinates[0] = matrix[0]
    coordinates[1] = matrix[1]

//     console.log("Output:")
//         console.log(coordinates)
}

function mapCoords(inputCoords, rasterCoords) {

    // console.log("Input:")
    //     console.log(inputCoords)

    rasterCoords[0] = (inputCoords[0] + 1) / 2 * renderCanvas.width
    rasterCoords[1] = (inputCoords[1] + 1) / 2 * renderCanvas.height

    // console.log("Output:")
    //     console.log(rasterCoords)
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

function matrixTransform2D (inputMatrix, transformMatrix, outputMatrix) {

    outputMatrix[0] = inputMatrix[0] * transformMatrix[0][0] + inputMatrix[1] * transformMatrix[0][1] + inputMatrix[2] * transformMatrix[0][2] 
    outputMatrix[1] = inputMatrix[0] * transformMatrix[1][0] + inputMatrix[1] * transformMatrix[1][1] + inputMatrix[2] * transformMatrix[1][2] 
   
}

const testMatrix = [400000, 400000, -fFar, 1]

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

        // console.log("Triangle:")
        // console.log(array[index])

        array[index].forEach((vertex, index, array) => {

            // console.log("Vertex:")
            // console.log(array[index])

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
            multiplyNormalizeMatrix(zewMatrix, projMatrix, NDCcoords)
            extractXY(NDCcoords, xyCoords)
            mapCoords(xyCoords, renderCoords)

            renderTri.push(renderCoords)

            array[index].pop()

    })

            drawTriangle(renderTri)
        
    })
}

const radCK = 0.0175

const fps = 60
let frame = 0

function eventTick(mesh) {
    
    setInterval(() => {

        ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height)
    
        renderMesh(mesh)
    
        frame++
    
    }, 1000/fps)

}




