import React,{ useState} from 'react';
import AddCategory from './Elements/AddCategory';
import GifGrid from './Elements/GifGrid';

const GifExpertApp = () => {

    
    const [categories,setCategories]=useState([
       "Dragon Ball"
    ]);


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((item,index)=>(
                    <GifGrid key={index+item} category={item} />    
                    ))
                }
            </ol>
        </>
    )






}

export default GifExpertApp;