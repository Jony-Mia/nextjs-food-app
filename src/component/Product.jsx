import { getCategory } from '@/api/API';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Food from '@/component/Food';

const nunito = Nunito({
    weight: "500"
});

const Product = async () => {
    const res = await getCategory()

    console.log(res);
    return (
        <div>
            <p className={` ${nunito.className}  text-3xl text-center my-8`}>Our products</p>
            <div className='grid grid-cols-4 gap-5 m-auto container'>
                {
                    res.slice(0,15).map(foods => {
                        if (foods.id === "food_009") {
                            foods.category = "Salad"
                        }
                        return ( <div  key={foods.id}>
                                <Food id={foods.id} alternative_names={foods.alternative_names} rice={foods.price} rating={foods.rating} name={foods.dish_name}image={foods.image_link} category={foods.category} />
                            </div> )
                    })
                }
            </div>
        </div>
    );
};

export default Product;