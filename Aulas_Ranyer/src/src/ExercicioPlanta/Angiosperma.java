package ExercicioPlanta;

public class Angiosperma extends Planta {
    private String tipoFruto;
    private String tipoFlor;
    private String corFlor;

    public Angiosperma(String nomePopular, String nomeCientifico, String familia, String habitat, Cuidados cuidados, String tipoFruto, String tipoFlor, String corFlor) {
        super(nomePopular, nomeCientifico, familia, habitat, cuidados);
        this.tipoFruto = tipoFruto;
        this.tipoFlor = tipoFlor;
        this.corFlor = corFlor;
    }

    public String getTipoFruto() {
        return tipoFruto;
    }

    public String getTipoFlor() {
        return tipoFlor;
    }

    public String getCorFlor() {
        return corFlor;
    }

    @Override
    public void mostrarDados() {
        System.out.println("Oi eu dou frutos");
    }
}
