package com.algaworks.imobiliaria.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.imobiliaria.model.Cliente;
import com.algaworks.imobiliaria.repository.Clientes;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {
	
	@Autowired
	private Clientes c;
	
	@GetMapping("/users")
	public List<Cliente> listarClientes() {
		return c.findAll();
		
	}
	
	@GetMapping("/users/{id}")
	public void deletarClientes(@PathVariable Long id) {
		c.deleteById(id);
	}
	
	@GetMapping("/user")
	public void cadastrarCliente(@RequestBody Cliente cliente) {
		c.save(cliente);
	}
	
	@GetMapping("/user/{id}")
	public void buscarCliente(@PathVariable Long id) {
		c.findById(id);
	}
	

}
