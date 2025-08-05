import ExercicioPlanta.Angiosperma;
import ExercicioPlanta.Cuidados;
import ExercicioPlanta.Planta;
import Heranca.Aluno;
import Heranca.Pessoa;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Angiosperma laranjeira = new Angiosperma(
                "Laranjeira",
                "Citrus × sinensis",
                "Rutaceae ",
                "Blumenau",
                new Cuidados("Terroso",10.0,21),
                "Laranja",
                "Aberta",
                "Branca");

            laranjeira.mostrarDados();
        System.out.println(laranjeira.getNomeCientifico());




    }
}