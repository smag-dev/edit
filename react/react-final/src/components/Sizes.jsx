const Sizes = ({sizes, setMaxquantity, setQuantity, quantity}) => {
    const sizeKeys = Object.keys(sizes);
    return(
            sizeKeys.map((sizeKey) => {
            return (
                <button 
                    key={sizeKey} 
                    type="button"
                    onClick={() => {
                        setMaxquantity(sizes[sizeKey])
                        if (sizes[sizeKey] < quantity){
                            setQuantity(sizes[sizeKey])
                        }
                    }}
                >
                {sizeKey}
                </button>
                ) 
            }
        )
    )
}

export default Sizes