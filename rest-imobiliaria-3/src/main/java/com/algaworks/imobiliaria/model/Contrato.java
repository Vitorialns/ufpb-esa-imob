package com.algaworks.imobiliaria.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Contrato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Date datafinal;
	private Date datainicial;
	
	@OneToOne
	@JoinColumn(name = "clienteLocatario")
	private Cliente clientelocatario;
	
	@OneToOne
	@JoinColumn(name = "clienteLocador")
	private Cliente clientelocador;
	
	@OneToOne
	@JoinColumn(name = "idImovel")
	private Imovel idimovel;
	private Float valoraluguel;
	private Float valorcondominio;
	private Float valortotal;
	private Date datadevencimento;
	
	
	public Date getDatadevencimento() {
		return datadevencimento;
	}
	public void setDatadevencimento(Date datadevencimento) {
		this.datadevencimento = datadevencimento;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDatafinal() {
		return datafinal;
	}
	public void setDatafinal(Date datafinal) {
		this.datafinal = datafinal;
	}
	public Date getDatainicial() {
		return datainicial;
	}
	public void setDatainicial(Date datainicial) {
		this.datainicial = datainicial;
	}
	
	public Cliente getClientelocatario() {
		return clientelocatario;
	}
	public void setClientelocatario(Cliente clientelocatario) {
		this.clientelocatario = clientelocatario;
	}
	public Cliente getClientelocador() {
		return clientelocador;
	}
	public void setClientelocador(Cliente clientelocador) {
		this.clientelocador = clientelocador;
	}
	public Imovel getIdimovel() {
		return idimovel;
	}
	public void setIdimovel(Imovel idimovel) {
		this.idimovel = idimovel;
	}
	public Float getValoraluguel() {
		return valoraluguel;
	}
	public void setValoraluguel(Float valoraluguel) {
		this.valoraluguel = valoraluguel;
	}
	public Float getValorcondominio() {
		return valorcondominio;
	}
	public void setValorcondominio(Float valorcondominio) {
		this.valorcondominio = valorcondominio;
	}
	public Float getValortotal() {
		return valortotal;
	}
	public void setValortotal(Float valortotal) {
		this.valortotal = valortotal;
	}
	
	
	
	

}
