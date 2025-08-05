package Heranca;

import java.util.ArrayList;

public class Aluno extends Pessoa{

    public String turno;
    public ArrayList<Double> notas = new ArrayList<>();

    public void teste(){
        this.turno = "vespertino";
        super.nome = "Joazin Java";
    }

}
