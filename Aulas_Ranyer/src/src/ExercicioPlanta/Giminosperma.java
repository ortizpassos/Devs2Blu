package ExercicioPlanta;

public class Giminosperma extends Planta{
    private String cone;
    private boolean hasSementeExposta;

    public Giminosperma(String nomePopular, String nomeCientifico, String familia, String habitat, Cuidados cuidados, String cone, boolean hasSementeExposta) {
        super(nomePopular, nomeCientifico, familia, habitat, cuidados);
        this.cone = cone;
        this.hasSementeExposta = hasSementeExposta;
    }

    public String getCone() {
        return cone;
    }

    public void setCone(String cone) {
        this.cone = cone;
    }

    public boolean isHasSementeExposta() {
        return hasSementeExposta;
    }

    public void setHasSementeExposta(boolean hasSementeExposta) {
        this.hasSementeExposta = hasSementeExposta;
    }

    @Override
    public void mostrarDados() {
        System.out.println("Oi, eu sou do natal!");
    }
}
