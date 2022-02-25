import { useState } from "react";

const AddProduct = () => {
    const [type, setType] = useState('');
    const [sNo, setSNo] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { type, code: sNo, location, image, status};
        setIsPending(true);
        fetch('http://localhost:8001/collections',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=> {
            setIsPending(false);
        })
    }
    return (
        <div className="create">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Type:</label>
                <input 
                    value={type}
                    type="text"
                    required
                    onChange={(e)=>setType(e.target.value)}
                />
                <label>S/N:</label>
                <input 
                    value={sNo}
                    required
                    onChange={(e)=>setSNo(e.target.value)}
                ></input>
                <label>Location: </label>
                <input 
                    value={location}
                    required
                    onChange={(e)=>setLocation(e.target.value)}
                ></input>
                <label>Status: </label>
                <input 
                    value={status}
                    required
                    onChange={(e)=>setStatus(e.target.value)}
                ></input>
                 <label>Image Link: </label>
                <input 
                    value={image}
                    required
                    onChange={(e)=>setImage(e.target.value)}
                ></input>

               { !isPending && <button> Add Product</button>}
               { isPending && <button disabled> Adding product...</button>}
            </form>

        </div>
      );
}
 
export default AddProduct;