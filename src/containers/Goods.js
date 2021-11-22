import { useDispatch } from "react-redux";
import {addGoods} from "../action";

const Goods =() => {
    const dispatch = useDispatch();
    const formHandler = (event)=>{
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addGoods(data.id.value, data.title.value, data.image.value));
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name="id" defaultValue="28ss7s" />
                </div>
                <div>
                    <input type="text" name="title" defaultValue="ОПОРА КОЛЁСНАЯ ПОЛИУРИТАНОВАЯ N109 (11) ДЛЯ ОФИСНЫХ КРЕСЕЛ" />
                </div>
                <div>
                    <input type="text" name="image" defaultValue="https://ko-mod.by/image/cache/catalog/spareparts/sparepart_005-900x600.png" />
                </div>
                <div>
                    <button tepe="submit">Add new goods</button>
                </div>    
            </form>
        </div>    
    )
}

export default Goods;