import { Categories } from "./components/categories"
import { getCategories } from "./lib/queries"

export default async function Home() {

  const cat = await getCategories();

  return (
    <div>
      <div>Home page wps</div>

      <div>
        <Categories cat={cat} />
      </div>
    </div>
  );
}
