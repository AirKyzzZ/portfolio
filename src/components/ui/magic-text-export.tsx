import { MagicText } from "@/components/ui/magic-text"

const ScrollingText = () => {
  return (
    <>
      <div className= "relative flex items-center justify-center pb-[30rem] mt-12" >
        <MagicText
          text={
          "Hi there! I'm preet, creator of HextaUI. Thank you so much of all the support and love you've shown me. I hope you enjoy using HextaUI as much as I enjoyed creating it."
        }
        />
        </div>
    </>
    )
}

export { ScrollingText }