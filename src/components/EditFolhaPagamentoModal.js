import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditFolhaPagamentoModal(props) {
  const [folhapagamento, setFolhaPagamento] = useState({});


    useEffect(() => {
        setFolhaPagamento(props.folhapagamento);
    }, [props.folhapagamento]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFolhaPagamento(prevState => ({ ...prevState, [name]: value }));
    };

    return (
      <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Editar FolhaPagamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {folhapagamento ? (
                  <Form>
                      <Form.Group>
                          <Form.Label>Mes</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="mes" 
                              value={folhapagamento.mes || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>CPF</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="cpf" 
                              value={folhapagamento.cpf || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>                      
                  </Form>
              ) : (
                  <p>Carregando detalhes do folhapagamento...</p>
              )}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={props.onClose}>
                  Fechar
              </Button>
              {folhapagamento && (
                  <Button variant="primary" onClick={() => props.onSave(folhapagamento)}>
                      Salvar Alterações
                  </Button>
              )}
          </Modal.Footer>
      </Modal>
  );
  
}

export default EditFolhaPagamentoModal;
