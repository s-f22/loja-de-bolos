import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
// import type { Cake } from "../types/Cake";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import type { Cake } from "../types/Cake";

export const CreateCake = () => {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | undefined>();
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [weight, setWeight] = useState<number | undefined>();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/cakes");
  };

  const handleShowModal = () => setShowModal(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      // const response = await axios.get<Cake[]>("http://localhost:3001/cakes");
      // const cakes = response.data;
      // const maxId = Math.max(...cakes.map((cake) => Number(cake.id) || 0));
      // const newId = maxId + 1;

      const newCake: Cake = {
        id: undefined,
        name,
        subtitle,
        description,
        price,
        weight,
        image
      };

      const postResponse = await axios.post("http://localhost:3001/cakes", newCake);
      if (postResponse.status === 201) {
        handleShowModal();
        
      } 
    } catch (error) {
      console.error("Erro ao cadastrar o bolo:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Cadastrar Novo Bolo</h2>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome do Bolo</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Subtitulo</label>
            <input
              type="text"
              className="form-control"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
              placeholder="Texto breve sobre o produto"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Texto detalhado e completo sobre o produto"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Preço (em R$)</label>
            <input
              type="number"
              className="form-control"
              value={price ?? ""}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Peso (em gramas)</label>
            <input
              type="number"
              className="form-control"
              value={weight ?? 0}
              onChange={(e) => setWeight(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">URL da Imagem</label>
            <input
              type="url"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Cadastrar
          </button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tudo certo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item cadastrado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
