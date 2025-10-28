import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our ingredients are sourced from certified organic farms",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every bottle is crafted with care and attention to detail",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for quality and innovation in the beverage industry",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We support local farmers and give back to our community",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            About the App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your gateway to premium cold-pressed juices
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The SipStream Juice Co. app makes it easy to order premium, cold-pressed juices 
              delivered right to your door. Browse our selection, customize your orders, and 
              track deliveries all in one convenient place. We're committed to making healthy 
              choices accessible and enjoyable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Special</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">App Features</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Easy browsing and ordering of all our juice products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Real-time order tracking and delivery updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Save your favorite combinations for quick reordering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Exclusive app-only promotions and discounts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Nutritional information and ingredient transparency</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
