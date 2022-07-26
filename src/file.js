
const teapotOBJ = []

fetch('https://raw.githubusercontent.com/almickle/Graphics/main/ref/teapot.txt')
.then(resp => resp.text())
.then(data => {
    parseData(data, teapotOBJ)
    eventTick(teapotOBJ)
})


function parseData(data, mesh) {
    const arr = data.split(/\r?\n/)
    const vertices = []
    const faces = []
    
    arr.forEach((element, index, array) => {
        if(array[index][0] === 'v') {
            vertices.push(element)
        }

        if(array[index][0] === 'f') {
            faces.push(element)
        }
    })

    vertices.forEach((vertex, index, array) => {
        array[index] = array[index].split(' ')
        array[index].shift()
    })

    faces.forEach((face, index, array) => {
        array[index] = array[index].split(' ')
        array[index].shift()
    })

    //

    faces.forEach((face, index, array) => {
        const tri = []
        array[index].forEach((vertex, index, array) => {
            tri.push(vertices[array[index] - 1])
        })
        mesh.push(tri)
    })

}