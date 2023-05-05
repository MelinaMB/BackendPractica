import express from "express";
import ProductManager from "../ProductManager.js";

const path = "../productos.json";

export const productsRouter = express.Router();

const productManager = new ProductManager(path);

productsRouter.get("/api/products", async (req, res) => {
    try {
        const products = await productManager.getProduct();
        return res.status(200).json(products);  
    } catch (error) {
        res.status(400).json({message: "error"});
    }
});

// productsRouter.get("/api/products/:pid", async (req, res) => {
//     try {
//         const products = await productManager.getProduct();
//         const idproduct = req.params.pid;
//         const productoEncontrado = products.find((prod) => prod.id == idproduct)
//         if (productoEncontrado) {
//             return res.status(200).json(productoEncontrado);
//         } else {
//             return res.status(200).json({ error: "producto no encontrado con el id" + idproduct });
//         }  
//     } catch (error) {
//         res.status(400).json({message: "error"});
//     }
// });

// productsRouter.post('/api/', async (req, res) => {
//     try {
//         const products = await productManager.getProduct();
//         const newProduct = req.body;
//         const existe = products.find((producto) => producto.title == newProduct);
//         if (!existe) {
//             const agregarProducto = {
//                 id:  newProduct.id = (Math.random() * 100000000).toFixed(0).toString(),
//                 title: newTitle,
//                 description: newDescription,
//                 code: newCode,
//                 price: newPrice,
//                 status: true,
//                 stock: newStock,
//                 categoty: category,
//                 thumbnails: []
//             };
           
//             path.push(newProduct);
//             return res.status(201).json({
//                 status: "success",
//                 masg: "Producto creado",
//                 data: newProduct,
//             });

//         }
        
//     } catch (error) {
        
//     }
// });

// productsRouter.put('/api/:pid', async (req, res) => {
//     try {
//         let data = await productManager.getProduct();
//         const upDate = req.body;
//         const indesProductEncontrado = data.find((producto) => producto.id == upDate);
//         const productUpdate = {
//             ...indesProductEncontrado,
//             title: newTitle,
//                 description: newDescription,
//                 code: newCode,
//                 price: newPrice,
//                 status: true,
//                 stock: newStock,
//                 categoty: category,
//                 thumbnails: []
//         };
//         if (indesProductEncontrado) {
//             const update = Object.assign(indesProductEncontrado, productUpdate);
//             return res.status(201).json({
//                 status: "success",
//                 masg: "producto actualizado",
//                 data: upDate,
//             });
//         } else {
//             console.log("product id not found")
//         }
        
//     } catch (error) {
//         throw new Error("could not update")
//     }
// });

// productsRouter.put('/api/:pid', async (req, res) => {
//     try {
//         let data = await productManager.getProduct();
//         const deleteProdindex = data.findIndex((producto) => producto.id == product);
//         console.log("Index to delete: " + deleteProdindex)
//         const eliminado = data.splice(deleteProdindex, 1);
//         console.log('eliminado:', eliminado);

//     } catch (error) {
//         throw new Error ('product not delete');
//     }
// });