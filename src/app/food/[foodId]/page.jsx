import Image from 'next/image';
import React from 'react';
import { Nunito } from 'next/font/google';
const nunito = Nunito({
    weight: "500"
})
const page = async ({ params }) => {
    let { foodId } = await params;
    let data = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    let res = (await data.json()).data;
    const {
        price,
        rating,
        category,
        foodId: id,
        image_link,
        dish_name: name,
        cooking_steps: cooking,
        main_ingredients: ingredients,
        approximate_nutrition_per_serving: nutrition
    } = res;

    return (
        <div className='bg-white mt-6'>
            <div className='grid grid-cols-2'>
                <div className=' h-screen flex flex-col items-center '>
                    <Image loading="eager" src={res.image_link} alt={res.dish_name} height={650} width={650} />
                </div>
                <div className='h-screen '>
                    <div>
                        <h2 className={`${nunito.className} text-4xl `}>{name}</h2> <br />
                        <div className='flex justify-between  w-2xl'>
                            <p className={`text-xl ${nunito.className} badge-dash badge badge-warning p-2 h-full w-auto inline-block `}>${price}</p>
                            <p className={`text-xl ${nunito.className} btn-error btn-xs text-sm p-3 rounded-full btn text-white `}>  {category} </p>
                        </div>
                        <div><br />
                            
                            <h2 className={`${nunito.className} text-xl `}>Ingredients:</h2> 
                            <ul>
                               {
                                ingredients.map((values,index)=>{
                                    return(
                                         <li key={index}  className="flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{values}</span>
                                    </li>
                                    )
                                })
                               }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;