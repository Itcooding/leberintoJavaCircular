let x = 0
let y = 0
let z = 0
let material = 0
let numDeParedes = 0
let radio = 0
let altura = 0
player.onChat("1", function () {
    // asignación de variables
    x = x + 15
    y = y + 0
    z = z + 100
    material = BLUE_WOOL
    numDeParedes = 5
    radio = 10
    altura = 3
    // Bucle para crear las paredes
    for (let index = 0; index < numDeParedes; index++) {
        // Bucle para crear las capas de cada pared
        for (let index = 0; index < altura; index++) {
            shapes.circle(
            material,
            world(x, y, z),
            radio,
            Axis.Y,
            ShapeOperation.Outline
            )
            // Aumenta la altura (Y) de la siguiente capa
            y += 1
        }
        y = 0
        // Aumenta el radio después de cada pared
        radio += 4
    }
})
