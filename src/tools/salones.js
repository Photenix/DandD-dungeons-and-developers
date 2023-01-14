const pisos = [ "A", "B", "C", "D" ]
const salones = []
for (let i = 0; i < pisos.length; i++) {
    const piso = pisos[i];
    const salonesPiso = []
    for (let x = 0; x < 5; x++) {
        salonesPiso[x] = piso + ( x + 1)
    }
    salones.push( ...salonesPiso )
}

export default salones