import { Sidebar } from "@/components/Sidebar";

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to premium quality
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-primary">2015 - The Beginning</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SipStream Juice Co. was founded by a group of health enthusiasts who believed that 
              premium, cold-pressed juices should be accessible to everyone. What started in a 
              small kitchen has grown into a beloved brand.
            </p>
          </section>

          <section className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-secondary">2018 - Expansion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After three years of perfecting our recipes and building a loyal customer base, 
              we opened our first production facility. This allowed us to scale while maintaining 
              the quality our customers love.
            </p>
          </section>

          <section className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-accent">2020 - Going Green</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We committed to sustainability by transitioning to 100% recyclable packaging and 
              partnering with local organic farms. Our carbon-neutral delivery program launched 
              this same year.
            </p>
          </section>

          <section className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-primary">Today</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SipStream Juice Co. now serves thousands of health-conscious customers daily. 
              We remain committed to our founding principles: fresh ingredients, innovative 
              flavors, and sustainable practices.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default History;
