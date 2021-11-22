function List(data) {
    console.log("=======================");
    console.log(data);
    console.log("=======================");
    return (
        <div>
            <ul>
                {data.goods.map(item=><li key={item.id}>{item.title}<img src={item.image}className="image" alt="img"/></li>)}
            </ul>    

        </div>    
    )
}

export default List;