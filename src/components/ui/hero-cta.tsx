import { GradientButton } from "@/components/ui/gradient-button"

function Herocta() {
  return (
    <div className="flex gap-8 justify-center items-center">
      <GradientButton>Get Started</GradientButton>
      <GradientButton variant="variant">Get Started</GradientButton>
    </div>
  )
}

export { Herocta }