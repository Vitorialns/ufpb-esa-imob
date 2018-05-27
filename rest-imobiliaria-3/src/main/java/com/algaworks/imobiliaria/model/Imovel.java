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
	
	@OneToOne
	@JoinColumn(name = "clienteLocatario")
	private Cliente clienteLocatario;
	
	private String rua;
	private String numero;
	private String bairro;
	private String cep;
	private String cidade;
	private String estado;
	
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
	

	
	
	public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
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
