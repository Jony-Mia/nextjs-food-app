
export const getCategory = async () => {
    let data = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    let res = await data.json();
    return res.data
}