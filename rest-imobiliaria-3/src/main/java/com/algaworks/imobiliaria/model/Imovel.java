package com.algaworks.imobiliaria.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Imovel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	@JoinColumn(name = "clienteLocador")
	private Cliente clientelocador;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "clienteLocatario")
	private Cliente clienteLocatario;
	
	private String endereco;
	private String tipo_imovel;
	private String unidadestatus;
	private String unidadequarto;
	private String unidadegaragem;
	private String observacoes;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	

	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getTipo_imovel() {
		return tipo_imovel;
	}
	public void setTipo_imovel(String tipo_imovel) {
		this.tipo_imovel = tipo_imovel;
	}
	public String getUnidadestatus() {
		return unidadestatus;
	}
	public void setUnidadestatus(String unidadestatus) {
		this.unidadestatus = unidadestatus;
	}
	public String getUnidadequarto() {
		return unidadequarto;
	}
	public void setUnidadequarto(String unidadequarto) {
		this.unidadequarto = unidadequarto;
	}
	public String getUnidadegaragem() {
		return unidadegaragem;
	}
	public void setUnidadegaragem(String unidadegaragem) {
		this.unidadegaragem = unidadegaragem;
	}
	public String getObservacoes() {
		return observacoes;
	}
	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}/*
	public ClienteLocador getClientelocador() {
		return clientelocador;
	}
	public void setClientelocador(ClienteLocador clientelocador) {
		this.clientelocador = clientelocador;
	}*/
	public Cliente getClientelocador() {
		return clientelocador;
	}
	public void setClientelocador(Cliente clientelocador) {
		this.clientelocador = clientelocador;
	}
	public Cliente getClienteLocatario() {
		return clienteLocatario;
	}
	public void setClienteLocatario(Cliente clienteLocatario) {
		this.clienteLocatario = clienteLocatario;
	}
	
	
	
	
}
