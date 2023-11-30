import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditDepartamentoModal(props) {
  const [departamento, setDepartamento] = useState({});


    useEffect(() => {
        setDepartamento(props.departamento);
    }, [props.departamento]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDepartamento(prevState => ({ ...prevState, [name]: value }));
    };

    return (
      <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Editar Departamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {departamento ? (
                  <Form>
                      <Form.Group>
                          <Form.Label>Nome</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="nome" 
                              value={departamento.nome || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>CNPJ</Form.Label>
                          <Form.Control 
                              type="number" 
                              name="cnpj" 
                              value={departamento.cnpj || ''} 
                              readOnly
                              onChange={handleChange} 
                          />
                      </Form.Group>       
                      <Form.Group>
                          <Form.Label>Código do Departamento</Form.Label>
                          <Form.Control 
                              type="number" 
                              name="codigodepartamento" 
                              value={departamento.codigodepartamento || ''} 
                              readOnly
                              onChange={handleChange} 
                          />
                      </Form.Group>     
                         
                  </Form>
              ) : (
                  <p>Carregando detalhes do departamento...</p>
              )}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={props.onClose}>
                  Fechar
              </Button>
              {departamento && (
                  <Button variant="primary" onClick={() => props.onSave(departamento)}>
                Salvar Alterações
                  </Button>
              )}
          </Modal.Footer>
      </Modal>
  );
  
}

export default EditDepartamentoModal;
