import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg"; 
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpeg";
import gallery16 from "@/assets/gallery-16.jpeg";
import gallery17 from "@/assets/gallery-17.jpeg";
import gallery18 from "@/assets/gallery-18.jpeg";
import gallery19 from "@/assets/gallery-19.jpeg";
import gallery20 from "@/assets/gallery-20.jpeg";
import gallery21 from "@/assets/gallery-21.jpeg";

const images = [
  { src: gallery1, alt: "img1" },
  { src: gallery2, alt: "img2" },
  { src: gallery3, alt: "img3" },
  { src: gallery4, alt: "img4" },
  { src: gallery5, alt: "img5" },
  { src: gallery6, alt: "img6" },
  { src: gallery7, alt: "img7" },
  { src: gallery8, alt: "img8" },
  { src: gallery9, alt: "img9" },
  { src: gallery10, alt: "img10" },
  { src: gallery11, alt: "img11" },
  { src: gallery12, alt: "img12" },
  { src: gallery13, alt: "img13" },
  { src: gallery14, alt: "img14" },
  { src: gallery16, alt: "img16" },
  { src: gallery17, alt: "img17" },
  { src: gallery18, alt: "img18" },
  { src: gallery19, alt: "img19" },
  { src: gallery20, alt: "img20" },
  { src: gallery15, alt: "img15" },
  { src: gallery21, alt: "img21" },
];


const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Gallery"
            subtitle="Memories from previous editions of Pixel Fest"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden border border-border cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
