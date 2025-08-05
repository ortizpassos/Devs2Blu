import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ContaBancaria conta = null;

        
        System.out.println("=== SELEÇÃO DE CONTA ===");
        System.out.println("Selecione o tipo de conta:");
        System.out.println("1 - Conta Corrente");
        System.out.println("2 - Conta Poupança");
        System.out.print("Opção: ");
        
        
        int tipoConta = scanner.nextInt();
        scanner.nextLine(); // Limpa buffer

        System.out.print("Digite o nome do titular: ");
        String titular = scanner.nextLine();

        System.out.print("Digite o saldo inicial: ");
        double saldoInicial = scanner.nextDouble();

        if (tipoConta == 1) {
            System.out.print("Digite o limite do cheque especial: ");
            double limite = scanner.nextDouble();
            conta = new ContaCorrente(titular, saldoInicial, limite);
        
        } else if (tipoConta == 2) {
            System.out.print("Digite a taxa de juros (ex: 5 para 5%): ");
            double juros = scanner.nextDouble() /100;
            conta = new ContaPoupanca(titular, saldoInicial, juros);
       
        } else {
            System.out.println("Opção inválida. Encerrando...");
            scanner.close();
            return;
        }

        int opcao;
        do {
            System.out.println("\n--- MENU ---");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("3 - Consultar Saldo");           
            if (conta instanceof ContaPoupanca) {
                System.out.println("4 - Aplicar Juros");
            }
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.print("Digite o valor para depositar: ");
                    double dep = scanner.nextDouble();
                    conta.depositar(dep);
                    System.out.println("Depósito realizado!");
                    break;
                case 2:
                    System.out.print("Digite o valor a sacar: ");
                    double saque = scanner.nextDouble();
                    if (conta.sacar(saque)) {
                        System.out.println("Saque realizado com sucesso!");
                    } else {
                        System.out.println("Saque negado. Verifique o saldo e limite.");
                    }
                    break;
                case 3:
                    conta.consultarSaldo();
                    break;
                case 4:
                    if (conta instanceof ContaPoupanca) {
                        ((ContaPoupanca) conta).aplicarJuros();
                        System.out.println("Juros aplicados com sucesso.");
                    } else {
                        System.out.println("Opção inválida.");
                    }
                    break;
                case 0:
                    System.out.println("Encerrando...");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }

        } while (opcao != 0);

        scanner.close();
    }
}
