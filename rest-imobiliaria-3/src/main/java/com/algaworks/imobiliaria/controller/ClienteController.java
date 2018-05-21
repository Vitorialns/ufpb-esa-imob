package com.algaworks.imobiliaria.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.imobiliaria.model.Cliente;
import com.algaworks.imobiliaria.repository.Clientes;
import com.algaworks.cobranca.repository.filtros.NomeFiltro;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class ClienteController {
	
	@Autowired
	private Clientes c;
	
	@GetMapping("/users")
	public List<Cliente> getClientes() {
		return c.findAll();
	}
	@GetMapping("/user/{id}")
	public Optional<Cliente> getCliente(@PathVariable Long id) {
		return c.findById(id);
	}
	@DeleteMapping("/user/{id}")
	public boolean deleteCliente(@PathVariable Long id) {
		c.deleteById(id);
		return true;
	}
	@PostMapping("/user")
	public Cliente createCliente(@RequestBody Cliente cliente) {
		return c.save(cliente);
	}
	@PutMapping("/user")
	public Cliente updateCliente(@RequestBody Cliente cliente) {
		return c.save(cliente);
	}
	public List<Cliente> buscaCliente(NomeFiltro nome) {
		String nomeCliente = nome.getNome();
		return c.findByNomeContaining(nomeCliente);
	}
	

}
