import { useEffect } from "react";
import './App.css'
import ProductTable from './components/ProductTable'
import {products} from './components/Products.json'
import {upgrades} from './components/UpgradesJson.json'
import useRelatedCompanies from "./custom-hooks/useRelatedCompanies";

function App(){
  useEffect(() => {
    console.log(products, upgrades);
  },[])
    return(
      <main>
        <ProductTable table ={products}/>
        <useRelatedCompanies price = {products} />
        
      </main>
    )
   }

  export default App;
