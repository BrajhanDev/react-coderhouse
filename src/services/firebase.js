
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjMBKlb_zTkdKKrvRkZE13qqt0_-OFoIA",
  authDomain: "ecommerce-coder2022.firebaseapp.com",
  projectId: "ecommerce-coder2022",
  storageBucket: "ecommerce-coder2022.appspot.com",
  messagingSenderId: "419726657844",
  appId: "1:419726657844:web:28c1af41480914481abd61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//funciones

export const obtenerProductos = async () => {
  // accediendo a la colleccion
  const productCollect = collection(db, "productos")
  // accediendo a los productos

  const productProtect = await getDocs(productCollect)
  // .data() sirve para acceder a los datos
  // const products =   productProtect.docs.map( pro => pro.data())
  const products = productProtect.docs.map(pro => ({ ...pro.data(), id: pro.id }))
  return products;
}

export const obtenerProductosPorId = async (id) => {
  // traemos la collecion
  const productCollect = collection(db, "productos")
  // traemos a la colecion individual
  const productIndiv = doc(productCollect, id);
  // obtener datos individuales
  const obtenerDatos = await getDoc(productIndiv);

  return { ...obtenerDatos.data(), id: obtenerDatos.id };
}


export const obtenerProductosPorCategoria = async (category = '') => {
  // accediendo a la collecion
  const productCollect = collection(db, "productos")
  // haciendo la consulta en bruto
  const consulta = query(productCollect, where("categoria", "==", category))
  // traemos los datos
  const productporCategoria = await getDocs(consulta)
  // mapeamos para traer los datos y adjuntamos en id
  const products = productporCategoria.docs.map(pro => ({ ...pro.data(), id: pro.id }))
  return products;

}

export const createOrder = async (data) => {
  // accediendo a la collecion
  const orderCollect = collection(db, "order")

  let res = await addDoc(orderCollect, data)
  return res.id


}

export default db;