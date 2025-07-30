import { GradientButton } from "@/components/ui/GradientButtons/gradient-button"

function Herocta() {
  return (
    <div className="flex gap-8 justify-center items-center">
      <a href="#projects" className="gradient-button inline-flex items-center justify-center rounded-[11px] min-w-[132px] px-9 py-4 text-base leading-[19px] font-[500] text-white font-sans font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
        Découvrir mes projets
      </a>
      <GradientButton asChild variant="variant">
        <a href="https://www.linkedin.com/in/maxime-mansiet" target="_blank" rel="noopener noreferrer">
          Voir mon LinkedIn
        </a>
      </GradientButton>
    </div>
  )
}

export { Herocta }