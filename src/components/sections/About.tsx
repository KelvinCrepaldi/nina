import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <SectionContainer scrollId="about">
      <SectionTitle title="About" />
      <div className="flex flex-col gap-10 p-20 bg-purple-800 text-white text-xl font-light tracking-[3px]">
        <div>
          My name is <strong>Nina Martinho</strong> and I am a 2D and 3D artist who loves
          creating imersive stories and fascinating characters. I'm from Brazil
          and I've studied and created video games in the <strong>Hertfordshire
          University</strong>, at <strong>EBAC</strong> international campus.
        </div>
        <div>
          <Separator title="Education" />

          <ul>
            <li>
              <strong>BA HONS: 3D Games Art & Design</strong> - Hertfordshire University (Ebac Campus) 2020-2023
            </li>
            <li>
              <strong>Foundation Diploma</strong> - Hertfordshire University (Ebac Campus) 2019-2020
            </li>
            <li>
              <strong>School Degree</strong> - E.E. Culto à Ciência
            </li>
            <li>
              <strong>Veterinary Assistant Diploma</strong> - AE Comp 2017-2018
            </li>
          </ul>
        </div>

        <div>
          <Separator title="Languages" />

          <ul>
            <li>
             <strong>Portuguese (BR)</strong> - Native
            </li>
            <li>
              <strong>English</strong> - Fluent
            </li>
          </ul>
        </div>

         <div>
          <Separator title="Contact" />
          <ul>
            <li className="text-xl">
             ninamartinho@hotmail.com
            </li>
            <li className="text-xl">
              +55 (11) 97202-4404
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

const Separator = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-black border-b border-purple-700 uppercase mb-5">
        {title}
      </h1>
    </div>
  );
};
