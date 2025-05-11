import ImageGrid from "../ImagesGrid";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

  const imageList = [
    "https://cdnb.artstation.com/p/assets/images/images/058/878/149/large/nina-martinho-long-long-time.jpg?1675172584",
    "https://cdnb.artstation.com/p/assets/images/images/056/646/047/large/nina-martinho-lee-study.jpg?1669760873",
    "https://cdnb.artstation.com/p/assets/images/images/048/931/089/large/nina-martinho-study.jpg?1651270168",
    "https://cdna.artstation.com/p/assets/images/images/054/306/132/large/nina-martinho-oxalaia-hex.jpg?1664238687",
    "https://cdna.artstation.com/p/assets/images/images/041/619/752/large/nina-martinho-joy.jpg?1632225165",
    "https://cdnb.artstation.com/p/assets/images/images/046/837/479/large/nina-martinho-peace.jpg?1651284610",
    "https://cdnb.artstation.com/p/assets/images/images/058/878/149/large/nina-martinho-long-long-time.jpg?1675172584",
    "https://cdnb.artstation.com/p/assets/images/images/056/646/047/large/nina-martinho-lee-study.jpg?1669760873",
    "https://cdnb.artstation.com/p/assets/images/images/048/931/089/large/nina-martinho-study.jpg?1651270168",
    "https://cdna.artstation.com/p/assets/images/images/054/306/132/large/nina-martinho-oxalaia-hex.jpg?1664238687",
    "https://cdna.artstation.com/p/assets/images/images/041/619/752/large/nina-martinho-joy.jpg?1632225165",
    "https://cdnb.artstation.com/p/assets/images/images/046/837/479/large/nina-martinho-peace.jpg?1651284610",
    "https://cdnb.artstation.com/p/assets/images/images/058/878/149/large/nina-martinho-long-long-time.jpg?1675172584",
    "https://cdnb.artstation.com/p/assets/images/images/056/646/047/large/nina-martinho-lee-study.jpg?1669760873",
    "https://cdnb.artstation.com/p/assets/images/images/048/931/089/large/nina-martinho-study.jpg?1651270168",
    "https://cdna.artstation.com/p/assets/images/images/054/306/132/large/nina-martinho-oxalaia-hex.jpg?1664238687",
    "https://cdna.artstation.com/p/assets/images/images/041/619/752/large/nina-martinho-joy.jpg?1632225165",
    "https://cdnb.artstation.com/p/assets/images/images/046/837/479/large/nina-martinho-peace.jpg?1651284610",
    
  ];

export default function Concepts() {
  return (
    <SectionContainer scrollId="portfolio">
      <SectionTitle title="Concepts" />
      <ImageGrid images={imageList} />
    </SectionContainer>
  );
}
