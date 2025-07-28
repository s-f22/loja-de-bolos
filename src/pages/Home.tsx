import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import type { Cake } from "../types/Cake";

export const Home = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await axios.get<Cake[]>("http://localhost:3001/cakes");
        const allImages = response.data.flatMap((cake) => cake.image);
        const shuffled = allImages.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5); // Mostra até 5 imagens aleatórias
        setImages(selected);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
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

        {images.length > 0 && (
          <Carousel className="mt-4">
            {images.map((imgUrl, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 rounded"
                  src={imgUrl}
                  alt={`Imagem destaque ${idx + 1}`}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
};
