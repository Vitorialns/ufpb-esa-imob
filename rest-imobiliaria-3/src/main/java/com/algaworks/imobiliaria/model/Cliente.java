package com.algaworks.imobiliaria.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String bairro;
    
	public  String cep;
    public String cidade;
    public String cpfcnpj;
    public String email;
    public String endereco;
    public String nome;
    public String numero;
    public String orgao;
    public String profissao;
    public String rg;
    public String telefone1;
    public String telefone2;
    public String telefone3;
    public String tipo1;
    public String tipo2;
    public String ufcliente;
    public String ufrg;
    public String datanascimento;
    
    public Cliente(Long id, String bairro, String cep, String cidade, String cpfcnpj, String email, String endereco,
			String nome, String numero, String orgao, String profissao, String rg, String telefone1, String telefone2,
			String telefone3, String tipo1, String tipo2, String ufcliente, String ufrg, String datanascimento) {
		super();
		this.id = id;
		this.bairro = bairro;
		this.cep = cep;
		this.cidade = cidade;
		this.cpfcnpj = cpfcnpj;
		this.email = email;
		this.endereco = endereco;
		this.nome = nome;
		this.numero = numero;
		this.orgao = orgao;
		this.profissao = profissao;
		this.rg = rg;
		this.telefone1 = telefone1;
		this.telefone2 = telefone2;
		this.telefone3 = telefone3;
		this.tipo1 = tipo1;
		this.tipo2 = tipo2;
		this.ufcliente = ufcliente;
		this.ufrg = ufrg;
		this.datanascimento = datanascimento;
	}
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getCpfcnpj() {
		return cpfcnpj;
	}
	public void setCpfcnpj(String cpfcnpj) {
		this.cpfcnpj = cpfcnpj;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getOrgao() {
		return orgao;
	}
	public void setOrgao(String orgao) {
		this.orgao = orgao;
	}
	public String getProfissao() {
		return profissao;
	}
	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getTelefone1() {
		return telefone1;
	}
	public void setTelefone1(String telefone1) {
		this.telefone1 = telefone1;
	}
	public String getTelefone2() {
		return telefone2;
	}
	public void setTelefone2(String telefone2) {
		this.telefone2 = telefone2;
	}
	public String getTelefone3() {
		return telefone3;
	}
	public void setTelefone3(String telefone3) {
		this.telefone3 = telefone3;
	}
	public String getTipo1() {
		return tipo1;
	}
	public void setTipo1(String tipo1) {
		this.tipo1 = tipo1;
	}
	public String getTipo2() {
		return tipo2;
	}
	public void setTipo2(String tipo2) {
		this.tipo2 = tipo2;
	}
	public String getUfcliente() {
		return ufcliente;
	}
	public void setUfcliente(String ufcliente) {
		this.ufcliente = ufcliente;
	}
	public String getUfrg() {
		return ufrg;
	}
	public void setUfrg(String ufrg) {
		this.ufrg = ufrg;
	}
	public String getDatanascimento() {
		return datanascimento;
	}
	public void setDatanascimento(String datanascimento) {
		this.datanascimento = datanascimento;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	

}
