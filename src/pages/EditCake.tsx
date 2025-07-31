import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [image, setImage] = useState<string[]>([""]);
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
        setSubtitle(cake.subtitle);
        setDescription(cake.description);
        setPrice(cake.price);
        setWeight(cake.weight);
        setImage(cake.image || [""]);
      } catch (error) {
        console.error("Erro ao carregar bolo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCake();
  }, [id]);

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...image];
    newImages[index] = value;
    setImage(newImages);
  };

  const handleAddImageField = () => {
    setImage([...image, ""]);
  };

  const handleRemoveImageField = (index: number) => {
    const newImages = image.filter((_, i) => i !== index);
    setImage(newImages);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !subtitle || !description || !price || !weight 
      // || image.some((img) => !img)
    ) {
      alert("Preencha todos os campos, incluindo todas as URLs de imagem!");
      return;
    }

    const updatedCake: Cake = {
      id: undefined,
      name,
      subtitle,
      description,
      price,
      weight,
      image
    };

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
        <div className="container mt-4 text-center">
          <Spinner animation="border" />
          <p className="mt-2">Carregando bolo...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-4">
        <h2>Editar bolo: <i>{id}</i></h2>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>Nome do Bolo</b></label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>Subtítulo</b></label>
            <input
              type="text"
              className="form-control"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>Descrição</b></label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // rows={3}
              style={{ resize: 'none', overflow: 'hidden' }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${target.scrollHeight}px`;
              }}

              required
            />

          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>Preço</b></label>
            <input
              type="number"
              className="form-control"
              value={price ?? ""}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>Peso (em gramas)</b></label>
            <input
              type="number"
              className="form-control"
              value={weight ?? ""}
              onChange={(e) => setWeight(Number(e.target.value))}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-flex justify-content-start"><b>URLs das Imagens</b></label>
            {image.map((img, index) => (
              <div key={index} className="input-group mb-2">
                <textarea
                  // type="url"
                  className="form-control"
                  value={img}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  // required
                />
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleRemoveImageField(index)}
                  disabled={image.length === 1}
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleAddImageField}
            >
              Adicionar Imagem
            </button>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
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
