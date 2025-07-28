import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Cake } from "../types/Cake";

interface CarouselItem {
  id: string;
  name: string;
  image: string;
}

export const Home = () => {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get<Cake[]>("http://localhost:3001/cakes");

        const allImagesWithInfo: CarouselItem[] = response.data.flatMap((cake) =>
          cake.image.map((img) => ({
            id: String(cake.id), // converte para string
            name: cake.name,
            image: img,
          }))

        );

        const shuffled = allImagesWithInfo.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5); // até 5 imagens no carrossel

        setCarouselItems(selected);
      } catch (error) {
        console.error("Erro ao carregar carrossel:", error);
      }
    };

    fetchCakes();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="display-4">Bem-vindo à Loja de Bolos!</h1>
        <p className="lead">Delícias que derretem na boca 🍰</p>

        {carouselItems.length > 0 && (
          <Carousel className="mt-4">
            {carouselItems.map((item, idx) => (
              <Carousel.Item key={idx}>
                <Link to={`/cakes/${item.id}`}>
                  <img
                    className="d-block w-100 rounded"
                    src={item.image}
                    alt={item.name}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  <Carousel.Caption
                    className="bg-dark bg-opacity-50 rounded p-2"
                  >
                    <h5 className="text-white">{item.name}</h5>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
};
