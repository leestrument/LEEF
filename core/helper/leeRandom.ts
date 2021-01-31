const range = (min: number, max: number, isInteger = true): number => (

    isInteger ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min) + min

)

const id = () => (

    Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16)

)

const color = () => (

    '#' + Math.random().toString(16).slice(2, 8).toUpperCase()

)

export default {

    range,
    id,
    color,

}