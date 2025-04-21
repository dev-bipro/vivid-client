import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface FeaturedCategoriesProps {
  categories: Category[];
}

const FeaturedCategories = ({ categories }: FeaturedCategoriesProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated collection of products across popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`products/all/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-800 mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.productCount} Products
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
