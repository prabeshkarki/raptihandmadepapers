
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package2, ArrowRight, Star } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Our Premium Paper Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-300">
            Discover our range of high-quality paper solutions crafted with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Package2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-sm text-gray-500 space-y-1 mb-6">
                  <p className="flex items-center gap-2">
                    <Star className="h-4 w-4" /> Weight: {product.weight}
                  </p>
                  <p className="flex items-center gap-2">
                    <Star className="h-4 w-4" /> Size: {product.size}
                  </p>
                </div>
                <Button className="w-full group-hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2">
                  Request Sample
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
