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

export async function Categories({cat} : {cat : Categories[] }){
    return (

        <div>

            <ul>
                {cat.map((Categories : Categories) => (
                    <li key={Categories.id}>
                        {Categories.name}
                    </li>
                ))}
            </ul>


        </div>
        
    )
}