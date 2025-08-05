package ExercicioPlanta;

public class Briofta extends Planta {
    private String Rizoma;

    public Briofta(String nomePopular, String nomeCientifico, String familia, String habitat, Cuidados cuidados, String rizoma) {
        super(nomePopular, nomeCientifico, familia, habitat, cuidados);
        Rizoma = rizoma;
    }

    public String getRizoma() {
        return Rizoma;
    }

    public void setRizoma(String rizoma) {
        Rizoma = rizoma;
    }

    @Override
    public void mostrarDados() {

    }
}
