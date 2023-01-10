import database from './mock_data2.json';

const allProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(database)
        }, 2000)

    })

}

const productsById = (id)=> {
 return new Promise((resolve)=> {
    setTimeout(()=> {
    let productoEncontrado = database.find(prod => prod.id == id )
    resolve(productoEncontrado)
    }, 1000)

 })
}

const productsByCategory = (category) => {

return new Promise((resolve)=> {
 
    setTimeout(()=> {
        let productoEncontrado = database.filter(prod => prod.categoria == category )
        resolve(productoEncontrado)

    }, 1000)
})

}

export {allProducts, productsById, productsByCategory};