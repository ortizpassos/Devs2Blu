public class CarroEsportivo extends Carro {
    private int velocidadeMaxima;

    public CarroEsportivo(String modelo, Marca marca, Motor motor, int velocidadeMaxima) {
        super(modelo, marca, motor);
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public int getVelocidadeMaxima() {
        return velocidadeMaxima;
    }

    public void setVelocidadeMaxima(int velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    @Override
    public void exibirDetalhes() {
        super.exibirDetalhes();
        System.out.println("Velocidade Máxima: " + velocidadeMaxima + " km/h");
    }
}
