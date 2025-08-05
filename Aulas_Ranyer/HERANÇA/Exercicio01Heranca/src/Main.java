public class Main {
    public static void main(String[] args) {
        Carro carro1 = new Carro("Toyota", 2020, "Corolla");
        Carro carro2 = new Carro("Chevrollet", 2025, "Captiva");
        Aviao aviao1 = new Aviao("Boeing", 2015, "LATAM");

        System.out.println(carro1.detalhes());
        System.out.println(aviao1.detalhes());
        System.out.println(carro2.detalhes());
    }
}
