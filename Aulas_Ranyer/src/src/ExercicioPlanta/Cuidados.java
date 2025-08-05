package ExercicioPlanta;

public class Cuidados {
    private String tipoSolo;
    private double qtdAgua;
    private double temperaturaIdeal;

    public Cuidados(String tipoSolo, double qtdAgua, double temperaturaIdeal) {
        this.tipoSolo = tipoSolo;
        this.qtdAgua = qtdAgua;
        this.temperaturaIdeal = temperaturaIdeal;
    }

    public String getTipoSolo() {
        return tipoSolo;
    }

    public void setTipoSolo(String tipoSolo) {
        this.tipoSolo = tipoSolo;
    }

    public double getQtdAgua() {
        return qtdAgua;
    }

    public void setQtdAgua(double qtdAgua) {
        this.qtdAgua = qtdAgua;
    }

    public double getTemperaturaIdeal() {
        return temperaturaIdeal;
    }

    public void setTemperaturaIdeal(double temperaturaIdeal) {
        this.temperaturaIdeal = temperaturaIdeal;
    }
}
