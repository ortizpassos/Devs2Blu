import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan =  new Scanner(System.in);

        System.out.println("Digite: noite, dia, tarde");
        String palavra =  scan.next();

        String mensagem = switch (palavra){
            case "dia" -> "bom dia";
            case "noite" -> "boa noite";
            default -> "oi";
        };
        String msg2 = switch (palavra){
            case "segunda","terça","quarta","quinta","sexta" -> "dia de semana";
            case "domingo", "sábado" -> "final de semana";
            default -> "oi";
        };
    }
    public static int calculos (int a, int b, String operacao){
        int resultado =  switch(operacao){
            case "+" -> a + b;
            case "-" -> a -b;
            case "*" -> a* b;
            case "/" -> a / b;
            default -> 0;

        };
        return resultado;
    }
    public static void exemplo02(Scanner scan){
        ArrayList<String> frutas =  new ArrayList<>();

        while(true){
            System.out.println("Digite o nome da fruta. 0-Sair");
            String fruta = scan.next();

            if(fruta.equals("0")) break;

            frutas.add(fruta);

        }
        System.out.println("\nFRUTAS\n");
        for (String fruta : frutas) {
            System.out.println(fruta);
        }
        //Fazer um sistema de cadastro de notas
        //ao final, mostrar a lista de notas e a sua média;

        ArrayList<Double> notas =  new ArrayList<>();

        while(true){
            System.out.print("1-Nova Nota\n2-Sair\nOpção: ");
            if(scan.next().equals("2")) break;

            System.out.print("Nota: ");
            double nota = scan.nextDouble();
            notas.add(nota);
        }

        double soma = 0.0;
        for (Double nota : notas) {
            soma += nota ;
        }
        System.out.println(soma/notas.size());



    }

    public static void exemplo01(Scanner scan){
        ArrayList<String> nomes =  new ArrayList<>();
        nomes.add("Pedro");
        nomes.add("Maria");
        nomes.add("Horácio");
        nomes.add("Dolores");
        nomes.add("Julia");
        nomes.add(1,"João");
        nomes.isEmpty();
        nomes.size();

        for (int i = 0; i < nomes.size(); i++) {
            System.out.println( i + " - " +nomes.get(i));
        }
        System.out.println();
        for (String nome : nomes) {
            System.out.println(nomes.indexOf(nome) + " - " + nome);
        }
    }
}