import { Drill, CircleDot, Boxes, Wrench } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: CircleDot,
      title: "Serras circulares",
      description: "Linha completa de serras circulares para diversos tipos de corte, com opções para madeira e metal"
    },
    {
      icon: Wrench,
      title: "Fresas",
      description: "Fresas de diversos tipos e tamanhos para usinagem de precisão em metal e outros materiais"
    },
    {
      icon: Drill,
      title: "Brocas e machos",
      description: "Brocas de alta qualidade e machos para rosqueamento, garantindo furos perfeitos"
    },
    {
      icon: Boxes,
      title: "Acessórios CNC",
      description: "Pinças, cones e vasta linha de acessórios para máquinas CNC de última geração"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Produtos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ampla variedade de ferramentas de alta qualidade para atender às necessidades da indústria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 animate-fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Catálogo completo disponível
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Oferecemos uma extensa linha de produtos para atender todas as necessidades do setor industrial, desde ferramentas básicas até soluções avançadas para máquinas CNC. Entre em contato para conhecer nosso catálogo completo e receber orientação técnica especializada.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="px-4 py-2 bg-background rounded-full border border-border">
                  Produtos originais
                </span>
                <span className="px-4 py-2 bg-background rounded-full border border-border">
                  Pronta entrega
                </span>
                <span className="px-4 py-2 bg-background rounded-full border border-border">
                  Garantia de qualidade
                </span>
                <span className="px-4 py-2 bg-background rounded-full border border-border">
                  Suporte técnico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
