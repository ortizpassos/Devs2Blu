public class Carro extends Veiculo {
    private String modelo;

    public Carro(String marca, int ano, String modelo) {
        super(marca, ano);
        this.modelo = modelo;
    }

    @Override
    public String detalhes() {
        return super.detalhes() + ", Modelo: " + modelo;
    }
}
