public class ContaPoupanca extends ContaBancaria {
    private double taxaJuros;

    public ContaPoupanca(String titular, double saldoInicial, double taxaJuros) {
        super(titular, saldoInicial);
        this.taxaJuros = taxaJuros;
    }

    public void aplicarJuros() {
        saldo *= (1 + taxaJuros);
    }

    public double getTaxaJuros() {
        return taxaJuros;
    }
}
