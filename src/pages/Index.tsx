import { Sidebar } from "@/components/Sidebar";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Orange Sunrise",
    description: "Fresh squeezed orange juice with a hint of mango",
    price: 4.99,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Berry Blast",
    description: "Mixed berry juice packed with antioxidants",
    price: 5.49,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Green Energy",
    description: "Spinach, apple, and cucumber for a healthy boost",
    price: 5.99,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Tropical Paradise",
    description: "Pineapple, coconut, and passion fruit blend",
    price: 5.49,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Apple Crisp",
    description: "Pure apple juice with a crisp, refreshing taste",
    price: 4.49,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Watermelon Wave",
    description: "Hydrating watermelon juice with mint",
    price: 4.99,
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SipStream Juice Co.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium cold-pressed juices crafted with love and the freshest ingredients
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
