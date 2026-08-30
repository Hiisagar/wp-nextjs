const baseUrl = process.env.WORDPRESS_URL

type Categories = {
    id    : number;
    count : number;
    description : string;
    link  : string;
    name  : string;
    slug  : string;
    taxonomy : "category";
    parent  : number;
}

export async function getCategories() : Promise<Categories[]>{

    const repsonse = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
    const data = await repsonse.json();
    return data;

}