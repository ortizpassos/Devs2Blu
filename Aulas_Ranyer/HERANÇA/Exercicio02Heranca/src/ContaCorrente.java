public class ContaCorrente extends ContaBancaria {
    private double limiteChequeEspecial;

    public ContaCorrente(String titular, double saldoInicial, double limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    @Override
    public boolean sacar(double valor) {
        if (valor > 0 && valor <= (saldo + limiteChequeEspecial)) {
            saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public double getLimiteChequeEspecial() {
        return limiteChequeEspecial;
    }
}
