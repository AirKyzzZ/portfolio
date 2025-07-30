import { MagicText } from "@/components/ui/MagicText/magic-text"

const ScrollingText = () => {
  return (
    <>
      <div className= "relative flex items-center justify-center pb-20 mt-12" >
        <MagicText
          text={
          "Salut, moi c'est Maxime, 19 ans et étudiant en ingénierie informatique à l'EPSI Bordeaux. Passionné par la programmation et l'entrepreneuriat, je fonde des projets qui allient technique, créativité et esprit communautaire."
        }
        />
        </div>
    </>
    )
}

export { ScrollingText }