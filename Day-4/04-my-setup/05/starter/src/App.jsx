import { useState } from "react";
import menu from "./data";
import item from "./data";
import MenuItems from "./components/MenuItems";
import CategoriesBar from "./components/CategoriesBar";
const allCategories = ["all" , ...(new Set(item.map((it)=>(it.category))))]
const App = () => {
  const [category , showCategory] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(menu);
 
  const handleCat= (cat) =>{

    if (cat==="all"){
      setMenuItems(menu); 
      return;
    }
    setMenuItems(menu.filter((item)=>(item.category===cat)))
  }
  return (
    <main>
      <section section className="menu">
        
          <h4 className="title">Our Menu</h4>
          <div className="title-underline"> </div>
        <CategoriesBar category={category} handleCat={handleCat} />
          <MenuItems menu={menuItems}  />

      </section>
    </main>
  );
};
export default App;
