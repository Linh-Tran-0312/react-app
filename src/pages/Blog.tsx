import { useState, useEffect } from "react";
import { lazyComponent } from "utils/lazyLoad";

const Card = lazyComponent(() => import( 
  /*  vitePrefetch:  true   */ 
  'pages/Card'))
const Item = lazyComponent(() => import( /*  vitePrefetch:  true   */ '../components/Item'))

const Blog = () => {
  const [showCard,setShowCard] = useState(false);
  useEffect(() => {
    import( /*  vitePrefetch:  true   */ '../components/Item')
  },[])
  return (
    <div>
      This is Blog page
       <button onClick={() => setShowCard(true)}>Show Card</button>
       {
        showCard ? <Card/> : null
       }
       <Item/>
    </div>
  );
};

export default Blog;