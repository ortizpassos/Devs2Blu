public class Carro {
    private String modelo;
    private Marca marca;
    private Motor motor;

    public Carro(String modelo, Marca marca, Motor motor) {
        this.modelo = modelo;
        this.marca = marca;
        this.motor = motor;
    }

    public String getModelo() {
        return modelo;
    }

    public Marca getMarca() {
        return marca;
    }

    public Motor getMotor() {
        return motor;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public void setMotor(Motor motor) {
        this.motor = motor;
    }

    public void exibirDetalhes() {
        System.out.println("Modelo: " + modelo);
        marca.exibirMarca();
        motor.exibirMotor();
    }
}
