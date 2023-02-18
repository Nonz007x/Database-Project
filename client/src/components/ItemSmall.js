import "./ItemSmall.css"

function ItemSmall(props){
    const { title,src,price} = props;
    return(
        <div className="bg">
            <div className="Top">
                <img src={src}/>
            </div>
            <div className="Bottom">
                <h4>{title}</h4>
                <h6>{price}</h6>
            </div>
        </div>
    );
}
export default ItemSmall;