import { lazyComponent } from "utils/lazyLoad";

export const SubItem = () => {
  return <span>SubItem</span>
}
const ComponentA = lazyComponent(() => import( /*  vitePrefetch:  true   */ './ComponentA'))
const ComponentB = lazyComponent(() => import( /*  vitePrefetch:  true   */ './ComponentB'))
const Item = () => {
    return (
      <div>
        This is Item component
        <ComponentA/>
        <ComponentB/>
      </div>
    );
  };
  
  export default Item;