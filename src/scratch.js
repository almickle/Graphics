// // function drawTriangle(array) {
    
// //     ctx.beginPath();
// //     ctx.lineTo(array[2], array[3]);
// //     ctx.lineTo(array[4], array[5]);
// //     ctx.lineTo(array[0], array[1]);
// //     ctx.fill();

// // }


// // const vertex = [x, y, z]
// // const vertexA = [0, 0, 1]
// // const vertexB = [0, 1, 1]
// // const vertexC = [1, 1, 0]

// // const newVertex = []

// // const triangle = [vertex, vertex, vertex]
// // const triangleABC = [vertexA, vertexB, vertexC]

// // const multTriangle = []

// // const mesh = [triangle] // nth

// // const matrix4x4 = [
// //     [1, 0, 1, 1],
// //     [0, 0, 1, 0],
// //     [0, 0, 1, 1],
// //     [0, 1, 0, 1],
// // ]

// // const matrix2x2 = [
// //     [1, 0],
// //     [0, 1]
// // ]


// // console.log("Transformed Vertex: " + "(" + vertT[0] + ", " + vertT[1] + ")")
// // console.log("Transformed Vertex: " + "(" + vertR[0] + ", " + vertR[1] + ")")
// // console.log("Transformed Vertex: " + "(" + vertS[0] + ", " + vertS[1] + ")")

// // console.log(triT)

// // const vertA = [1, 1]
// // const vertB = [1, 3]
// // const vertC = [3, 2]

// // const vertT = []
// // const vertR = []
// // const vertS = []

// // const triT = []

// // const basisvecti = [30, 0]
// // const basisvectj = [60, 70]

// // const transformMatrix = [
// //     [basisvecti[0], basisvectj[0]],
// //     [basisvecti[1], basisvectj[1]]
// // ]





// // function multiplyMatrixVector(inVector, outVector, matrix) {

// //     outVector[0] = inVector[0] * matrix[0][0] + inVector[1] * matrix[1][0] + inVector[2] * matrix[2][0] + matrix[3][0]
// //     outVector[1] = inVector[0] * matrix[0][1] + inVector[1] * matrix[1][1] + inVector[2] * matrix[2][1] + matrix[3][1]
// //     outVector[2] = inVector[0] * matrix[0][2] + inVector[1] * matrix[1][2] + inVector[2] * matrix[2][2] + matrix[3][2]

// //     const w = inVector[0] * matrix[0][3] + inVector[1] * matrix[1][3] + inVector[2] * matrix[2][3] + matrix[3][3]
// //     if(w !== 0) {
// //         outVector[0] = outVector[0] / w
// //         outVector[1] = outVector[1] / w
// //         outVector[2] = outVector[2] / w
// //     }
// // }




// // setInterval(() => {

// //     ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height)

// //     const x = 0
// //     const y = 1

// //     const scalar = 100
// //     const translationX = renderCanvas.width / 2
// //     const translationY = renderCanvas.height / 2
// //     const radCK = 0.0175

// //     const vertA = []
// //           vertA[x] = 1 * scalar
// //           vertA[y] = 0 * scalar
// //     const vertB = []
// //           vertB[x] = 1 * scalar
// //           vertB[y] = 1 * scalar
// //     const vertC = []
// //           vertC[x] = 0 * scalar
// //           vertC[y] = 1 * scalar

// //     const vertT = []
// //     const vertR = []
// //     const vertS = []

// //     const basisVecti = []
// //           basisVecti[x] = Math.cos(radCK*((90/fps)*time))
// //           basisVecti[y] = -Math.sin(radCK*((90/fps)*time))
// //     const basisVectj = []
// //           basisVectj[x] = Math.sin(radCK*((90/fps)*time))
// //           basisVectj[y] = Math.cos(radCK*((90/fps)*time))
// //     const basisVectk = []
// //           basisVectk[x] = Math.sin(radCK*((90/fps)*time))
// //           basisVectk[y] = Math.cos(radCK*((90/fps)*time))      

// //     const transformMatrix = [
// //         [basisVecti[x], basisVecti[y]],
// //         [basisVecti[x], basisVectj[y]]
// //     ]

// //     const renderTri =[]
    
// //     vectorMatrixTransform(vertA, vertT, transformMatrix, renderTri, translationX, translationY)
// //     vectorMatrixTransform(vertB, vertR, transformMatrix, renderTri, translationX, translationY)
// //     vectorMatrixTransform(vertC, vertS, transformMatrix, renderTri, translationX, translationY)
// //     drawTriangle(renderTri)

// //     console.log(vertT, vertR, vertS)

// //     console.log("i: ("+ parseFloat(basisVecti[x]).toFixed(2) + ", " + parseFloat(basisVecti[y]).toFixed(2) + ")")
// //     console.log("j: ("+ parseFloat(basisVectj[x]).toFixed(2) + ", " + parseFloat(basisVectj[y]).toFixed(2) + ")")
// //     console.log("Triangle:")
// //     console.log("Vertex: (" + renderTri[0][0] + ", " + renderTri[0][1] + ")")
// //     console.log("Vertex: (" + renderTri[1][0] + ", " + renderTri[1][1] + ")")
// //     console.log("Vertex: (" + renderTri[2][0] + ", " + renderTri[2][1] + ")")

// //     console.log("Window Size: (" + document.body.offsetWidth + ", " + document.body.offsetHeight + ")")

// //     time++

// // }, 1000/fps)



// // setInterval(() => {

// //     ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height)

// //     const x = 0
// //     const y = 1

// //     const scalar = 100
// //     const radCK = 0.0175

// //     const vertA = []
// //           vertA[x] = 1 * scalar
// //           vertA[y] = 0 * scalar
// //     const vertB = []
// //           vertB[x] = 2 * scalar
// //           vertB[y] = 1 * scalar
// //     const vertC = []
// //           vertC[x] = 0 * scalar
// //           vertC[y] = 1 * scalar

// //     const vertT = []
// //     const vertR = []
// //     const vertS = []

// //     const basisVecti = []
// //           basisVecti[x] = Math.cos(radCK*((90/fps)*time))
// //           basisVecti[y] = -Math.sin(radCK*((90/fps)*time))
// //     const basisVectj = []
// //           basisVectj[x] = Math.sin(radCK*((90/fps)*time))
// //           basisVectj[y] = Math.cos(radCK*((90/fps)*time))

// //     const transformMatrix = [
// //         [basisVecti[x], basisVecti[y]],
// //         [basisVecti[x], basisVectj[y]]
// //     ]

// //     const renderTri =[]
    
// //     vectorMatrixTransform(vertA, vertT, transformMatrix, renderTri)
// //     vectorMatrixTransform(vertB, vertR, transformMatrix, renderTri)
// //     vectorMatrixTransform(vertC, vertS, transformMatrix, renderTri)
// //     drawTriangle(renderTri)

// //     console.log("i: ("+ parseFloat(basisVecti[x]).toFixed(2) + ", " + parseFloat(basisVecti[y]).toFixed(2) + ")")
// //     console.log("j: ("+ parseFloat(basisVectj[x]).toFixed(2) + ", " + parseFloat(basisVectj[y]).toFixed(2) + ")")
// //     console.log("Triangle:")
// //     console.log("Vertex: (" + renderTri[0][0] + ", " + renderTri[0][1] + ")")
// //     console.log("Vertex: (" + renderTri[1][0] + ", " + renderTri[1][1] + ")")
// //     console.log("Vertex: (" + renderTri[2][0] + ", " + renderTri[2][1] + ")")

// //     time++

// // }, 1000/fps)


//     // console.log("i: ("+ parseFloat(basisVecti[x]).toFixed(2) + ", " + parseFloat(basisVecti[y]).toFixed(2) + ", " + parseFloat(basisVecti[z]).toFixed(2) + ")")
//     // console.log("j: ("+ parseFloat(basisVectj[x]).toFixed(2) + ", " + parseFloat(basisVectj[y]).toFixed(2) + ", " + parseFloat(basisVectj[z]).toFixed(2) + ")")
//     // console.log("j: ("+ parseFloat(basisVectk[x]).toFixed(2) + ", " + parseFloat(basisVectk[y]).toFixed(2) + ", " + parseFloat(basisVectk[z]).toFixed(2) + ")")
//     // console.log("Triangle:")
//     // console.log("Vertex: (" + geoTri[0][0] + ", " + geoTri[0][1] + ")")
//     // console.log("Vertex: (" + geoTri[1][0] + ", " + geoTri[1][1] + ")")
//     // console.log("Vertex: (" + geoTri[2][0] + ", " + geoTri[2][1] + ")")


//     function vectorMatrixTransform (vertIn, vertOut, matrix, triangle, translatex, translatey) {

//         vertOut[0] = vertIn[0] * matrix[0][0] + vertIn[1] * matrix[0][1] + translatex
//         vertOut[1] = vertIn[0] * matrix[1][0] + vertIn[1] * matrix[1][1] + translatey
        
//         triangle.push(vertOut)
    
//     }


//     function matrixTransformVertex (vertIn, vertOut, matrix, triangle) {

//         const x = 0
//         const y = 1
//         const z = 2
    
//         vertOut[x] = vertIn[x] * matrix[0][0] + vertIn[y] * matrix[0][1] + vertIn[z] * matrix[0][2] 
//         vertOut[y] = vertIn[x] * matrix[1][0] + vertIn[y] * matrix[1][1] + vertIn[z] * matrix[1][2]
//         vertOut[z] = vertIn[x] * matrix[1][0] + vertIn[y] * matrix[1][1] + vertIn[z] * matrix[2][2]
//            const w = vertIn[x] * matrix[0][3] + vertIn[y] * matrix[1][3] + vertIn[z] * matrix[2][3] + matrix[3][3];
    
//             if (w !== 0)
//             {
//                 vertOut[x] = vertOut[x] / w
//                 vertOut[y] = vertOut[y] / w
//                 vertOut[z] = vertOut[z] / w
//             }
        
//         triangle.push(vertOut)
    
//     }
    
//     function matrixProjection (vertIn, vertOut, matrix, triangle, translatex, translatey, translatez) {
    
//         vertOut[0] = vertIn[0] * matrix[0][0] + vertIn[1] * matrix[0][1] + vertIn[2] * matrix[0][2] + translatex
//         vertOut[1] = vertIn[0] * matrix[1][0] + vertIn[1] * matrix[1][1] + vertIn[2] * matrix[1][2] + translatey
//         vertOut[2] = vertIn[0] * matrix[1][0] + vertIn[1] * matrix[1][1] + vertIn[2] * matrix[2][2] + translatez
    
//         triangle.push(vertOut)
    
//     }


//     function renderPolygon(vax, vay, vaz, vbx, vby, vbz, vcx, vcy, vcz, scalar) {

//         const x = 0
//         const y = 1
//         const z = 2
    
//         const translationX = renderCanvas.width / 2
//         const translationY = renderCanvas.height / 2
//         const translationZ = 100
    
//         const radCK = 0.0175
    
//         const vertA = []
//               vertA[x] = vax * scalar
//               vertA[y] = vay * scalar
//               vertA[z] = vaz * scalar
//         const vertB = []
//               vertB[x] = vbx * scalar
//               vertB[y] = vby * scalar
//               vertB[z] = vbz * scalar
//         const vertC = []
//               vertC[x] = vcx * scalar
//               vertC[y] = vcy * scalar
//               vertC[z] = vcz * scalar
    
//     console.log(vertA)
//     console.log(vertB)
//     console.log(vertC)
    
//         const vertT = []
//         const vertR = []
//         const vertS = []
    
//         const vertJ = []
//         const vertK = []
//         const vertL = []
    
//         const basisVecti = []
//               basisVecti[x] = Math.cos(radCK*((90/fps)*time))
//               basisVecti[y] = -Math.sin(radCK*((90/fps)*time))
//               basisVecti[z] = -Math.sin(radCK*((90/fps)*time))
//         const basisVectj = []
//               basisVectj[x] = Math.sin(radCK*((90/fps)*time))
//               basisVectj[y] = Math.cos(radCK*((90/fps)*time))
//               basisVectj[z] = -Math.sin(radCK*((90/fps)*time))
//         const basisVectk = []
//               basisVectk[x] = 0
//               basisVectk[y] = 0
//               basisVectk[z] = 1  
    
//         const transformMatrix = [
//             [basisVecti[x], basisVecti[y], basisVecti[z]],
//             [basisVectj[x], basisVectj[y], basisVectj[z]],
//             [basisVectk[x], basisVectk[y], basisVectk[z]]
//         ]
    
//         const geoTri = []
//         const renderTri = []
        
//         matrixTransformVertex(vertA, vertT, transformMatrix, geoTri)
//         matrixTransformVertex(vertB, vertR, transformMatrix, geoTri)
//         matrixTransformVertex(vertC, vertS, transformMatrix, geoTri)
    
//         console.log("Geometric Triangle: ") 
//         console.log(geoTri)
    
//         matrixProjection(geoTri[0], vertJ, projMatrix, renderTri, translationX, translationY, translationZ)
//         matrixProjection(geoTri[1], vertK, projMatrix, renderTri, translationX, translationY, translationZ)
//         matrixProjection(geoTri[2], vertL, projMatrix, renderTri, translationX, translationY, translationZ)
    
//         console.log("Render Triangle: ")
//         console.log(renderTri)
    
//         drawTriangle(renderTri)
    
//     }


//     // function renderPolygon(triangle) {

// //     const tri = []

// //     triangle.forEach(vertex => {
// //         const vertP = []
// //         matrixMultiply(vertex, projMatrix, vertP)
// //         normalizeMatrix(vertP)
// //         tri.push(vertP)
// //     })

// //     const rasterTri = [
// //         [tri[0][0], tri[0][1]],
// //         [tri[1][0], tri[1][1]],
// //         [tri[2][0], tri[2][1]]
// //     ]

// //     drawTriangle(rasterTri)
    
// // }


// // setInterval(() => {

// //     polygonMesh.forEach((triangle, index) => {
// //         console.log("Framerate: " + fps + "fps")
// //         console.log("Triangle: " + index)
// //         console.log("Vertex: " + "(" + triangle[0][0] + ", " + triangle[0][1] + ", " + triangle[0][2] + ")")
// //         console.log("Vertex: " + "(" + triangle[1][0] + ", " + triangle[1][1] + ", " + triangle[2][2] + ")")
// //         console.log("Vertex: " + "(" + triangle[2][0] + ", " + triangle[2][1] + ", " + triangle[2][2] + ")")
// //     })

// // }, 1000/fps)
        

// // projection matrix old 

//     //   projMatrix[2][3] = (2 * fFar * fNear) / (fNear - fFar)

//     //projMatrix[3][2] = 1
//      //projMatrix[0][2] = (fRight + fLeft) / (fRight - fLeft)
//      // projMatrix[1][2] = (fTop + fBottom) / (fTop - fBottom)
//      // projMatrix[2][2] = (fFar + fNear) / (fNear - fFar)


//      function multiplyMatrix(inputMatrix, transformMatrix, outputMatrix) {

//         outputMatrix[0] = inputMatrix[0] * transformMatrix[0][0] + inputMatrix[1] * transformMatrix[1][0] + inputMatrix[2] * transformMatrix[2][0] + inputMatrix[3] * transformMatrix[3][0]
//         outputMatrix[1] = inputMatrix[0] * transformMatrix[0][1] + inputMatrix[1] * transformMatrix[1][1] + inputMatrix[2] * transformMatrix[2][1] + inputMatrix[3] * transformMatrix[3][1]
//         outputMatrix[2] = inputMatrix[0] * transformMatrix[0][2] + inputMatrix[1] * transformMatrix[1][2] + inputMatrix[2] * transformMatrix[2][2] + inputMatrix[3] * transformMatrix[3][2]
//         outputMatrix[3] = inputMatrix[0] * transformMatrix[0][3] + inputMatrix[1] * transformMatrix[1][3] + inputMatrix[2] * transformMatrix[2][3] + inputMatrix[3] * transformMatrix[3][3]
    
//         console.log("Output:")
    
//         console.log("Unnormalized:")
//         console.log(outputMatrix)
    
//         normalizeMatrix(outputMatrix)
    
//         console.log("Normalized:")
//         console.log(outputMatrix)
    
//     }



// function renderPolygon(polygon) {

//     ctx.clearRect(0, 0, renderCanvas.width, renderCanvas.height)

//     const renderTri = []

//     demoTri.forEach((vertex, index, array) => {

//         const scale2D = [
//             [scale, 0, 0],
//             [0, scale, 0]
//         ]

//         const transVert = []
//         const scaledVert = [] 
        
//         console.log("input:")
//         console.log(array[index])
//         matrixTransform2D(array[index], scale2D, scaledVert)
//         console.log("scale:")
//         console.log(scaledVert)
//         scaledVert.push(1)
//         matrixTransform2D(scaledVert, translate2D, transVert)
//         console.log("translate:")
//         console.log(transVert)
    
        
//         renderTri.push(transVert)
    
//     })

//     drawTriangle(renderTri)

// }

//     const renderTri = []

//     array[index].forEach((vertex, index, array) => {

//         const scale2D = [
//             [scale, 0, 0],
//             [0, scale, 0]
//         ]

//         const transVert = []
//         const scaledVert = [] 
        
//         console.log("input:")
//         console.log(array[index])
//         matrixTransform2D(array[index], scale2D, scaledVert)
//         console.log("scale:")
//         console.log(scaledVert)
//         scaledVert.push(1)
//         matrixTransform2D(scaledVert, translate2D, transVert)
//         console.log("translate:")
//         console.log(transVert)
    
        
//         renderTri.push(transVert)
    
//     })

//     drawTriangle(renderTri)

// }



// multiplyNormalizeMatrix(testMatrix, projMatrix, newMatrix)

// multiplyMatrix(testMatrix, transformMatrix, newMatrix)
// multiplyNormalizeMatrix(newMatrix, projMatrix, newTMatrix)
// extractXY(newTMatrix, NDCcoords)
// mapCoords(NDCcoords, renderCoords)


// multiplyMatrix(matrix1x4, matrix4x4, newMatrix)
// console.log("if equals [4, 47, 5, 68], then the matrix works")
// console.log(newMatrix)

// let a = 0
// let b = 0
// let translateX = renderCanvas.width/4 + a
// let translateY = renderCanvas.height/4 + b
// let scale = 200

// const demoTri = [
//     [1, 0, 1],
//     [0, 1, 1],
//     [2, 1, 1]
// ]

// const translate2D = [
//     [1, 0, translateX],
//     [0, 1, translateY]
// ]
