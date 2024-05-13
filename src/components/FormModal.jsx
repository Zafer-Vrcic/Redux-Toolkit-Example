import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTask, editTask } from "../redux/slice/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData.entries());
    if (editItem) {
      dispatch(editTask({...task, id : editItem.id}));
    } else {
      dispatch(addTask(task));
    }

    // console.log(task);
    close();
  };
  return (
    <Modal onHide={close} show={isOpen} centered>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? "Güncelle" : "Yeni Görev Ekle"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              required
              name="title"
              placeholder="Görevi giriniz."
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              required
              name="author"
              placeholder="İsminizi giriniz."
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Atananı</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              required
              name="assigned_to"
              placeholder="Kime atadığınızı giriniz."
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              required
              name="end_date"
              type="date"
            />
          </Form.Group>
          <Button onClick={close} variant="secondary">
            Vazgeç
          </Button>
          <Button type="submit">Kaydet</Button>
        </Form>
        <Modal.Footer></Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
