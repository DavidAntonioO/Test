import { useEffect } from 'react';
import './App.css'
import {ProductTableComponent} from './components/ProductTable';
import {UpgradeTableComponent} from './components/UpgradeTable';
import {products} from './components/Products.json';
import {upgrades} from './components/Upgrades.json'




  function App(){
    return(
     <main>
       <ProductTableComponent table={products}/>

       <UpgradeTableComponent table={upgrades}/>
     </main>
    )
      
    }

  export default App;
