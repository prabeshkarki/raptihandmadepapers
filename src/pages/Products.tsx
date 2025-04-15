
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Premium Writing Paper",
    description: "Smooth, high-quality paper perfect for writing and printing",
    weight: "80gsm",
    size: "A4",
  },
  {
    id: 2,
    name: "Kraft Paper",
    description: "Durable brown paper ideal for packaging and crafts",
    weight: "120gsm",
    size: "Various",
  },
  {
    id: 3,
    name: "Art Paper",
    description: "Textured paper designed for artistic applications",
    weight: "200gsm",
    size: "A3",
  },
  {
    id: 4,
    name: "Recycled Office Paper",
    description: "Eco-friendly paper perfect for everyday use",
    weight: "75gsm",
    size: "A4",
  },
];

const Products = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <p className="text-xl text-gray-600 mb-12">
          Discover our range of premium paper products, crafted with precision and care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Weight: {product.weight}</p>
                  <p>Size: {product.size}</p>
                </div>
                <Button className="w-full mt-4">
                  Request Sample
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
