
const ItemListContainer = (props) => {
    return(
        <ul className="ul">
            <li>{props.itemUno}</li>
            <li>{props.itemDos}</li>
            <li>{props.itemTres}</li>
            <li>{props.itemCuatro}</li>
        </ul>
    )
};

export default ItemListContainer;
