import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
// import gallery5 from "@/assets/gallery-5.jpeg";
// import gallery6 from "@/assets/gallery-6.jpeg";

const images = [
  { src: gallery1, alt: "img1" },
  { src: gallery2, alt: "img2" },
  { src: gallery3, alt: "img3" },
  { src: gallery4, alt: "img4" },
  // { src: gallery5, alt: "img5" },
  // { src: gallery6, alt: "img6" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <SectionTitle title="Gallery" subtitle="Memories from previous editions of Pixel Fest" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div key={i} className="group rounded-lg overflow-hidden border border-border cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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
