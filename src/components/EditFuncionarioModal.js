import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditFuncionarioModal(props) {
  const [funcionario, setFuncionario] = useState({});


    useEffect(() => {
        setFuncionario(props.funcionario);
    }, [props.funcionario]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFuncionario(prevState => ({ ...prevState, [name]: value }));
    };

    return (
      <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Editar Funcionário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {funcionario ? (
                  <Form>
                      <Form.Group>
                          <Form.Label>Nome</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="nome" 
                              value={funcionario.nome || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label>CPF</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="cpf" 
                              value={funcionario.cpf || ''} 
                              readOnly
                              onChange={handleChange} 
                          />
                      </Form.Group>       
                      <Form.Group>
                          <Form.Label>Matrícula</Form.Label>
                          <Form.Control 
                              type="number" 
                              name="matricula" 
                              value={funcionario.matricula || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>     
                      <Form.Group>
                          <Form.Label>Endereço</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="endereco" 
                              value={funcionario.endereco || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>         
                      <Form.Group>
                          <Form.Label>Salário</Form.Label>
                          <Form.Control 
                              type="number" 
                              name="salario" 
                              value={funcionario.salario || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>          
                      <Form.Group>
                          <Form.Label>Cargo</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="cargo" 
                              value={funcionario.cargo || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>       
                      <Form.Group>
                          <Form.Label>Data de Admissão</Form.Label>
                          <Form.Control 
                              type="date" 
                              name="dataadmissao" 
                              value={funcionario.dataadmissao || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>    
                      <Form.Group>
                          <Form.Label>Data de Nascimento</Form.Label>
                          <Form.Control 
                              type="date" 
                              name="datanascimento" 
                              value={funcionario.datanascimento || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>    
                      <Form.Group>
                          <Form.Label>Telefone</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="telefone" 
                              value={funcionario.telefone || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>    
                      <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                              type="text" 
                              name="email" 
                              value={funcionario.email || ''} 
                              onChange={handleChange} 
                          />
                      </Form.Group>    
                  </Form>
              ) : (
                  <p>Carregando detalhes do funcionário...</p>
              )}
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={props.onClose}>
                  Fechar
              </Button>
              {funcionario && (
                  <Button variant="primary" onClick={() => props.onSave(funcionario)}>
                Salvar Alterações
                  </Button>
              )}
          </Modal.Footer>
      </Modal>
  );
  
}

export default EditFuncionarioModal;
