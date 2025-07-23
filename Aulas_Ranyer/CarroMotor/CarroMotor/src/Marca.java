public class Marca {
    private String nome;

    public Marca(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void exibirMarca() {
        System.out.println("Marca: " + nome);
    }
}
