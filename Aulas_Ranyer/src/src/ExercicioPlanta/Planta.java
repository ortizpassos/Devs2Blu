package ExercicioPlanta;

import java.util.Random;

public abstract class Planta {
    private int id;
    protected String nomePopular;
    protected String nomeCientifico;
    protected String familia;
    protected String habitat;
    protected Cuidados cuidados;

    public Planta(String nomePopular, String nomeCientifico, String familia, String habitat, Cuidados cuidados) {
        this.id = new Random().nextInt(1000);
        this.nomePopular = nomePopular;
        this.nomeCientifico = nomeCientifico;
        this.familia = familia;
        this.habitat = habitat;
        this.cuidados = cuidados;
        System.out.println("MDS EUS OU UMA PLANTA AAAAAH 🌱🌱🌱🌱");
    }

    public abstract void mostrarDados();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomePopular() {
        return nomePopular;
    }

    public void setNomePopular(String nomePopular) {
        this.nomePopular = nomePopular;
    }

    public String getNomeCientifico() {
        return nomeCientifico;
    }

    public void setNomeCientifico(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    public String getFamilia() {
        return familia;
    }

    public void setFamilia(String familia) {
        this.familia = familia;
    }

    public String getHabitat() {
        return habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }

    public Cuidados getCuidados() {
        return cuidados;
    }

    public void setCuidados(Cuidados cuidados) {
        this.cuidados = cuidados;
    }
}
