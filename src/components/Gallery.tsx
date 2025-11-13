import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import brocas from "@/assets/gallery/brocas.jpg";
import entrada from "@/assets/gallery/entrada.jpg";
import ferramentas from "@/assets/gallery/ferramentas.jpg";
import fresaTupia from "@/assets/gallery/fresa-tupia.jpg";
import fresas from "@/assets/gallery/fresas.jpg";
import maquinario from "@/assets/gallery/maquinario.jpg";
import maquinarioCnc from "@/assets/gallery/maquinario-cnc.jpg";
import afiacao from "@/assets/gallery/afiacao.jpg";
import serraCircular from "@/assets/gallery/serra-circular.jpg";
import maquinaAfiacao from "@/assets/gallery/maquina-afiacao.jpg";
import fresasVariadas from "@/assets/gallery/fresas-variadas.jpg";
import conjuntoFresas from "@/assets/gallery/conjunto-fresas.jpg";
import detalheSerra from "@/assets/gallery/detalhe-serra.jpg";
import discoSerraCompleto from "@/assets/gallery/disco-serra-completo.jpg";

const galleryImages = [
  { src: entrada, alt: "Entrada Eurofres" },
  { src: ferramentas, alt: "Ferramentas - Serras, Fresas e Brocas" },
  { src: maquinarioCnc, alt: "Maquinário CNC de alta precisão" },
  { src: afiacao, alt: "Processo de afiação" },
  { src: maquinario, alt: "Equipamentos de afiação" },
  { src: brocas, alt: "Brocas de alta qualidade" },
  { src: fresaTupia, alt: "Fresa para tupia" },
  { src: fresas, alt: "Fresas especializadas" },
  { src: serraCircular, alt: "Serra circular" },
  { src: maquinaAfiacao, alt: "Máquina de afiação de precisão" },
  { src: fresasVariadas, alt: "Variedade de fresas" },
  { src: conjuntoFresas, alt: "Conjunto de fresas de diferentes tamanhos" },
  { src: detalheSerra, alt: "Detalhe da serra circular afiada" },
  { src: discoSerraCompleto, alt: "Disco de serra completo" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  // Auto-scroll implementation
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossa galeria
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossas instalações, equipamentos e ferramentas de alta precisão
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/2 lg:basis-1/3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2">
                    <Card 
                      className="cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <CardContent className="p-0 aspect-square relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm font-medium">{image.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] sm:max-w-[85vw] md:max-w-4xl max-h-[90vh] p-4 sm:p-6 animate-scale-in">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-[80vh] object-contain animate-fade-in"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
