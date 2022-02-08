export const eachProduct = async (id) =>{
    try {
        let datos = `./data.js/${id}`
        const response = await fetch(datos)
        const data = await response.json()
        return data;
    } catch (err) {
         
    }
}