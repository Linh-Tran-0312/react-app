import { lazyComponent } from "utils/lazyLoad";


const ComponentA = lazyComponent(() => import( /*  vitePrefetch:  true   */ 'components/ComponentA'))
const ComponentB = lazyComponent(() => import( /*  vitePrefetch:  true   */ 'components/ComponentB'))

const Card = () => {
    return (
      <>
     <div>This is Card</div>
     <ComponentA/>
     <ComponentB/>
     </>
    );
  };
  
  export default Card;
