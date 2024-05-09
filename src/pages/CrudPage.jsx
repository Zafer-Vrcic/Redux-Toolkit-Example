import { useState } from "react";
import { ButtonGroup, Button, Stack, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormModal from "../components/FormModal";

const CrudPage = () => {
  const state = useSelector((store) => store.counterSlice);
  const crudState = useSelector((store) => store.crudSlice);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
      </Stack>
      {/*Form Modal */}
      <FormModal isOpen={isOpen} close={()=>{setIsOpen(false) }} />

      <Table
        striped
        bordered
        responsive
        variant={state.is_dark_theme ? "light" : "dark"}
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={task.id}>
              <td>{i + 1} </td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="danger">Sil</Button>
                  <Button>düzenle</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
