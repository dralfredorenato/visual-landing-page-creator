import { Bone, AlertTriangle } from "lucide-react";
import { MessageCircle } from "lucide-react";

const BoneHealthSection = () => {
  return (
    <section className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Você Cuida dos Seus Ossos?
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-6">
          Saúde Óssea e Muscular
        </h2>
        <p className="text-center font-body text-foreground/60 max-w-2xl mx-auto mb-14">
          Atuamos na prevenção, diagnóstico e tratamento da Osteoporose/Osteopenia e Sarcopenia. Essas condições, muitas vezes silenciosas, afetam a qualidade óssea e muscular, aumentando o risco de quedas, fraturas e mortalidade — especialmente em mulheres no climatério/pós-menopausa e em idosos de ambos os sexos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background/50 border border-border rounded-xl p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-4">
              <Bone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Osteoporose</h3>
            <p className="font-body text-foreground/65 leading-relaxed text-sm">
              Doença esquelética sistêmica caracterizada por baixa massa óssea e deterioração da microarquitetura do tecido ósseo, resultando em aumento da fragilidade óssea e maior risco de fraturas — especialmente em vértebras, quadril e punho.
            </p>
          </div>
          <div className="bg-background/50 border border-border rounded-xl p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Sarcopenia</h3>
            <p className="font-body text-foreground/65 leading-relaxed text-sm">
              Síndrome musculoesquelética progressiva e generalizada, caracterizada por redução da massa muscular esquelética associada a diminuição da força muscular e/ou da função física.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5551991932662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar com Dr. Carlos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BoneHealthSection;
