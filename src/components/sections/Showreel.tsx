import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

export default function Showreel() {
  return (
    <SectionContainer>
      <SectionTitle title="Showreel 2022" />
      <div className="w-full h-full aspect-video max-h-[80vh] p-10 px-20">
        <iframe
          className="w-full h-full flex-1"
          src="https://www.youtube.com/embed/5mpAmu2x4Gs"
          title="Showreel 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </SectionContainer>
  );
}
