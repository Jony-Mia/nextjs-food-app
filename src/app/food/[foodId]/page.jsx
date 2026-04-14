import React from 'react';

const page = async ({params}) => {
    let {foodId} = await params;
    
    
    return (
        <div>
            dynamic food id : {foodId}
        </div>
    );
};

export default page;