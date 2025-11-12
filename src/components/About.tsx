import { Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossa história
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De um pequeno salão a referência em soluções de corte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in">
              <p className="text-foreground leading-relaxed">
                Desde o ano 2000, a <span className="font-semibold text-primary">Eurofres</span> tem sua história marcada por dedicação, inovação e crescimento contínuo. Fundada pelo engenheiro Rodrigo Dias Brigide em Santo André, a partir de um pequeno salão de apenas 30 metros quadrados, a empresa nasceu do desejo de realizar um sonho próprio e de oferecer soluções de alta qualidade em afiação de ferramentas para os setores metalúrgico e moveleiro.
              </p>
              <p className="text-foreground leading-relaxed">
                Iniciando suas operações com apenas uma máquina de afiar serras, a Eurofres enfrentou os desafios comuns de uma empresa em recém-expansão, apoiada por uma experiência sólida na área de ferramentas de corte. Essa trajetória de aprendizado e aperfeiçoamento possibilitou conquistas importantes, incluindo, em 2002, a mudança para um prédio maior.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-up">
              <p className="text-foreground leading-relaxed">
                Essa transferência permitiu ampliar sua estrutura, investir em novas máquinas e diversificar a capacidade de produção, consolidando sua atuação no mercado de afiação e ferramentas de alta precisão.
              </p>
              <p className="text-foreground leading-relaxed">
                Hoje, a Eurofres, que começou como uma empresa familiar, evoluiu de afiadores manuais para uma operação equipada com <span className="font-semibold text-primary">máquinas CNC de última geração</span>, incluindo uma afiadora de fresas CNC de 5 eixos — um investimento que elevou significativamente a qualidade de seus serviços.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-secondary rounded-lg hover:shadow-lg transition-all animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência regional em soluções de corte e afiação, reconhecida pela qualidade, confiança e atendimento técnico
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground">
                Apresentar soluções de corte com ferramentas e serviços técnicos especializados, garantindo processos produtivos eficientes
              </p>
            </div>

            <div className="text-center p-8 bg-secondary rounded-lg hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Valores</h3>
              <p className="text-muted-foreground">
                Excelência técnica, atendimento customizado, compromisso com prazos, melhoria contínua e transparência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
