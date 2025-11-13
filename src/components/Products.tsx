import { Drill, CircleDot, Boxes, Wrench } from "lucide-react";
import serraCircular from "@/assets/gallery/serra-circular.jpg";
import discoSerraCompleto from "@/assets/gallery/disco-serra-completo.jpg";
import conjuntoFresas from "@/assets/gallery/conjunto-fresas.jpg";
import brocas from "@/assets/gallery/brocas.jpg";

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
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Produtos
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Ampla variedade de ferramentas de alta qualidade para atender às necessidades da indústria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 animate-fade-up">
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={discoSerraCompleto} 
                alt="Disco de serra circular completo" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={serraCircular} 
                alt="Detalhe da serra circular" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={conjuntoFresas} 
                alt="Conjunto de fresas variadas" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={brocas} 
                alt="Brocas de precisão" 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 sm:p-8 lg:p-12 animate-fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                Catálogo completo disponível
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-5 sm:mb-6 px-4">
                Oferecemos uma extensa linha de produtos para atender todas as necessidades do setor industrial, desde ferramentas básicas até soluções avançadas para máquinas CNC. Entre em contato para conhecer nosso catálogo completo e receber orientação técnica especializada.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <span className="px-3 sm:px-4 py-2 bg-background rounded-full border border-border">
                  Produtos originais
                </span>
                <span className="px-3 sm:px-4 py-2 bg-background rounded-full border border-border">
                  Pronta entrega
                </span>
                <span className="px-3 sm:px-4 py-2 bg-background rounded-full border border-border">
                  Garantia de qualidade
                </span>
                <span className="px-3 sm:px-4 py-2 bg-background rounded-full border border-border">
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
