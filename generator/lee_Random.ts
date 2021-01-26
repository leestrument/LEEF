const range = (min: number, max: number, isInteger = true): number => (

    isInteger ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min) + min

)

const id = () => (

    Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16)

)

export default {

    range,
    id,

}