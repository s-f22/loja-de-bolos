import axios from "axios";
import { Header } from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Cake } from "../types/Cake";
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CakeDetails = () => {
  const { id } = useParams();
  const [cake, setCake] = useState<Cake>();

  const getDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cakes/${id}`);
      setCake(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  if (!cake) {
    return (
      <>
        <Header />
        <div className="container mt-4">Carregando...</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">{cake.name}</h2>
        <div className="d-flex justify-content-end gap-2">
          <div className="d-flex justify-content-end mb-3 align-items-center">
            <Link to={`/cakes/${id}/edit`} className="btn btn-outline-primary d-flex align-items-center">
              <FaEdit className="me-2" />
              <span>Editar</span>
            </Link>
          </div>
          <div className="d-flex justify-content-end mb-3 align-items-center">
            <Link to={`/cakes/${id}/edit`} className="btn btn-outline-danger d-flex align-items-center">
              <FaTrash className="me-2" />
              <span>Excluir</span>
            </Link>
          </div>
        </div>

        {/* Galeria de imagens */}
        <div className="mt-4 row mb-4 justify-content-center align-items-center">
          {cake.image.map((imgUrl, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <img
                src={imgUrl || "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"}
                alt={`Imagem ${index + 1} do ${cake.name}`}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* Informações do bolo */}
        <section >
          <p className="fs-5 text-start text-wrap">{cake.description}</p>
          <p>
            <strong>Peso:</strong> {cake.weight}g
          </p>
          <p className="fs-5 mb-1">
            <strong>Preço: R$ {cake.price.toFixed(2)}</strong>
          </p>
        </section>
      </div>
    </>
  );
};
