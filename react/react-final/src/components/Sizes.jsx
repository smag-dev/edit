//import { uuid } from 'uuid';
const Sizes = ({sizes}) => {
    return(
         sizes.map(size => {
            return (<button key={size} type="button">{size}</button>) 
         })
    )
}

export default Sizes