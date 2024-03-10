/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return
        // console.log(NewCategory)
        // categories.push(NewCategory)
        setCategories([NewCategory, ...categories])
        // setCategories(cat => [...cat, 'Valorant'])

    }


    console.log(categories);

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />


            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    
                    />
                ))
            }


        </>
    )

}