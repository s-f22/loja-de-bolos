import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import type { Cake } from "../types/Cake";

export const EditCake = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState<number | undefined>();
  const [image, setImage] = useState("");
  const [weight, setWeight] = useState<number | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/cakes");
  };

  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    const fetchCake = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cakes/${id}`);
        const cake = response.data;
        setName(cake.name);
        setSubtitle(cake.subtitle)
        setDescription(cake.description);
        setPrice(cake.price);
        setWeight(cake.weight);
        setImage(cake.image);
      } catch (error) {
        console.error("Erro ao carregar bolo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCake();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !subtitle || !description || !price || !weight || !image) {
      alert("Preencha todos os campos!");
      return;
    }

    const updatedCake: Cake = { id: undefined, name, subtitle, description, price, weight, image };

    try {
      const response = await axios.put(`http://localhost:3001/cakes/${id}`, updatedCake);
      if (response.status === 200) {
        handleShowModal();
      }
    } catch (error) {
      console.error("Erro ao atualizar bolo:", error);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mt-4 text-center">
          <Spinner animation="border" />
          <p className="mt-2">Carregando bolo...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Editar Bolo #{id}</h2>
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
            <label className="form-label">Subtítulo</label>
            <input
              type="text"
              className="form-control"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Preço</label>
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
          <button type="submit" className="btn btn-primary">
            Salvar Alterações
          </button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Alterações Salvas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bolo atualizado com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
