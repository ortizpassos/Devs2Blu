public class ContaBancaria {
    protected String titular;
    protected double saldo;

    public ContaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }else {
        	System.out.println("Digite um valor Válido!");
        }
    }

    public boolean sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public void consultarSaldo() {
        System.out.println("Titular: " + titular + " | Saldo atual: R$ " + saldo);
    }
}
