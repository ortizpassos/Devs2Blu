import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    private static ArrayList<Carro> listaCarros = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcao;

        do {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Cadastrar Carro");
            System.out.println("2. Cadastrar Carro Esportivo");
            System.out.println("3. Listar Carros");
            System.out.println("4. Excluir Carro");
            System.out.println("0. Sair");
            System.out.print("Escolha: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Limpar buffer

            switch (opcao) {
                case 1 -> cadastrarCarro();
                case 2 -> cadastrarCarroEsportivo();
                case 3 -> listarCarros();
                case 4 -> excluirCarro();
                case 0 -> System.out.println("Encerrando...");
                default -> System.out.println("Opção inválida.");
            }
        } while (opcao != 0);
    }

    private static void cadastrarCarro() {
        System.out.print("Modelo: ");
        String modelo = scanner.nextLine();

        System.out.print("Marca: ");
        String nomeMarca = scanner.nextLine();
        Marca marca = new Marca(nomeMarca);

        System.out.print("Tipo do Motor: ");
        String tipoMotor = scanner.nextLine();

        System.out.print("Potência (CV): ");
        int potencia = scanner.nextInt();
        scanner.nextLine();

        Motor motor = new Motor(potencia, tipoMotor);
        Carro carro = new Carro(modelo, marca, motor);
        listaCarros.add(carro);

        System.out.println("Carro cadastrado com sucesso!");
    }

    private static void cadastrarCarroEsportivo() {
        System.out.print("Modelo (Esportivo): ");
        String modelo = scanner.nextLine();

        System.out.print("Marca: ");
        String nomeMarca = scanner.nextLine();
        Marca marca = new Marca(nomeMarca);

        System.out.print("Tipo do Motor: ");
        String tipoMotor = scanner.nextLine();

        System.out.print("Potência (CV): ");
        int potencia = scanner.nextInt();

        System.out.print("Velocidade Máxima (km/h): ");
        int velMax = scanner.nextInt();
        scanner.nextLine();

        Motor motor = new Motor(potencia, tipoMotor);
        CarroEsportivo esportivo = new CarroEsportivo(modelo, marca, motor, velMax);
        listaCarros.add(esportivo);

        System.out.println("Carro esportivo cadastrado com sucesso!");
    }

    private static void listarCarros() {
        if (listaCarros.isEmpty()) {
            System.out.println("Nenhum carro cadastrado.");
            return;
        }

        System.out.println("\n--- Lista de Carros ---");
        for (int i = 0; i < listaCarros.size(); i++) {
            System.out.println("Carro #" + i);
            listaCarros.get(i).exibirDetalhes();
            System.out.println("------------------------");
        }
    }

    private static void excluirCarro() {
        listarCarros();
        if (listaCarros.isEmpty()) return;

        System.out.print("Informe o número do carro a excluir: ");
        int indice = scanner.nextInt();
        scanner.nextLine();

        if (indice >= 0 && indice < listaCarros.size()) {
            listaCarros.remove(indice);
            System.out.println("Carro removido com sucesso!");
        } else {
            System.out.println("Índice inválido.");
        }
    }
}
