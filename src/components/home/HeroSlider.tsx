import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoplaySpeed?: number;
}

const HeroSlider = ({ slides, autoplaySpeed = 5000 }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, autoplaySpeed);
    return () => clearInterval(timer);
  }, [autoplaySpeed]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-[400px] md:h-[500px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg ml-8 md:ml-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-6 [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white"
                    asChild
                  >
                    <a href={slide.ctaLink}>{slide.cta}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
