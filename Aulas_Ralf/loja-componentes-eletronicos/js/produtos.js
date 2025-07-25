// Base de dados dos produtos da loja de componentes eletrônicos
const produtos = [
    // Microcontroladores
    {
        id: 1,
        nome: "Arduino Uno R3",
        imagem: "assets/images/arduino-uno.jpg",
        quantidade: 25,
        categoria: "microcontroladores",
        valor: 89.90
    },
    {
        id: 2,
        nome: "ESP32 DevKit V1",
        imagem: "assets/images/esp32.jpg",
        quantidade: 30,
        categoria: "microcontroladores",
        valor: 45.50
    },
    {
        id: 3,
        nome: "Raspberry Pi 4 Model B 4GB",
        imagem: "assets/images/raspberry-pi4.jpg",
        quantidade: 15,
        categoria: "microcontroladores",
        valor: 299.90
    },
    {
        id: 4,
        nome: "Arduino Nano",
        imagem: "assets/images/arduino-nano.jpg",
        quantidade: 40,
        categoria: "microcontroladores",
        valor: 35.90
    },
    {
        id: 5,
        nome: "NodeMCU ESP8266",
        imagem: "assets/images/nodemcu.jpg",
        quantidade: 22,
        categoria: "microcontroladores",
        valor: 28.90
    },
    {
        id: 6,
        nome: "Arduino Mega 2560",
        imagem: "assets/images/arduino-mega.jpg",
        quantidade: 18,
        categoria: "microcontroladores",
        valor: 129.90
    },
    {
        id: 7,
        nome: "Raspberry Pi Pico",
        imagem: "assets/images/pi-pico.jpg",
        quantidade: 35,
        categoria: "microcontroladores",
        valor: 25.90
    },
    {
        id: 8,
        nome: "STM32 Blue Pill",
        imagem: "assets/images/stm32-blue.jpg",
        quantidade: 20,
        categoria: "microcontroladores",
        valor: 18.90
    },
    {
        id: 9,
        nome: "Arduino Pro Mini",
        imagem: "assets/images/arduino-pro-mini.jpg",
        quantidade: 28,
        categoria: "microcontroladores",
        valor: 22.90
    },
    {
        id: 10,
        nome: "ESP8266 Wemos D1 Mini",
        imagem: "assets/images/wemos-d1.jpg",
        quantidade: 33,
        categoria: "microcontroladores",
        valor: 19.90
    },
    {
        id: 11,
        nome: "Teensy 4.0",
        imagem: "assets/images/teensy40.jpg",
        quantidade: 12,
        categoria: "microcontroladores",
        valor: 89.90
    },
    {
        id: 12,
        nome: "Arduino Leonardo",
        imagem: "assets/images/arduino-leonardo.jpg",
        quantidade: 16,
        categoria: "microcontroladores",
        valor: 79.90
    },
    {
        id: 13,
        nome: "Micro:bit V2",
        imagem: "assets/images/microbit.jpg",
        quantidade: 24,
        categoria: "microcontroladores",
        valor: 65.90
    },
    {
        id: 14,
        nome: "ESP32-CAM",
        imagem: "assets/images/esp32-cam.jpg",
        quantidade: 19,
        categoria: "microcontroladores",
        valor: 38.90
    },
    {
        id: 15,
        nome: "Arduino MKR WiFi 1010",
        imagem: "assets/images/arduino-mkr.jpg",
        quantidade: 14,
        categoria: "microcontroladores",
        valor: 149.90
    },

    // Sensores
    {
        id: 16,
        nome: "Sensor Ultrassônico HC-SR04",
        imagem: "assets/images/hc-sr04.jpg",
        quantidade: 45,
        categoria: "sensores",
        valor: 12.90
    },
    {
        id: 17,
        nome: "Sensor de Temperatura DHT22",
        imagem: "assets/images/dht22.jpg",
        quantidade: 38,
        categoria: "sensores",
        valor: 18.90
    },
    {
        id: 18,
        nome: "Sensor PIR HC-SR501",
        imagem: "assets/images/pir-sensor.jpg",
        quantidade: 32,
        categoria: "sensores",
        valor: 8.90
    },
    {
        id: 19,
        nome: "Sensor de Gás MQ-2",
        imagem: "assets/images/mq2.jpg",
        quantidade: 26,
        categoria: "sensores",
        valor: 15.90
    },
    {
        id: 20,
        nome: "Acelerômetro MPU6050",
        imagem: "assets/images/mpu6050.jpg",
        quantidade: 29,
        categoria: "sensores",
        valor: 22.90
    },
    {
        id: 21,
        nome: "Sensor de Luz LDR",
        imagem: "assets/images/ldr.jpg",
        quantidade: 50,
        categoria: "sensores",
        valor: 3.90
    },
    {
        id: 22,
        nome: "Sensor de Umidade do Solo",
        imagem: "assets/images/soil-moisture.jpg",
        quantidade: 35,
        categoria: "sensores",
        valor: 9.90
    },
    {
        id: 23,
        nome: "Sensor de Pressão BMP280",
        imagem: "assets/images/bmp280.jpg",
        quantidade: 21,
        categoria: "sensores",
        valor: 28.90
    },
    {
        id: 24,
        nome: "Sensor de Cor TCS3200",
        imagem: "assets/images/tcs3200.jpg",
        quantidade: 18,
        categoria: "sensores",
        valor: 24.90
    },
    {
        id: 25,
        nome: "Sensor Hall A3144",
        imagem: "assets/images/hall-sensor.jpg",
        quantidade: 42,
        categoria: "sensores",
        valor: 5.90
    },
    {
        id: 26,
        nome: "Sensor de Vibração SW-420",
        imagem: "assets/images/vibration-sensor.jpg",
        quantidade: 27,
        categoria: "sensores",
        valor: 7.90
    },
    {
        id: 27,
        nome: "Sensor de Som KY-038",
        imagem: "assets/images/sound-sensor.jpg",
        quantidade: 31,
        categoria: "sensores",
        valor: 11.90
    },
    {
        id: 28,
        nome: "Sensor de Chama KY-026",
        imagem: "assets/images/flame-sensor.jpg",
        quantidade: 23,
        categoria: "sensores",
        valor: 13.90
    },
    {
        id: 29,
        nome: "Sensor de Toque TTP223",
        imagem: "assets/images/touch-sensor.jpg",
        quantidade: 36,
        categoria: "sensores",
        valor: 6.90
    },
    {
        id: 30,
        nome: "Sensor de Corrente ACS712",
        imagem: "assets/images/acs712.jpg",
        quantidade: 17,
        categoria: "sensores",
        valor: 19.90
    },

    // Componentes Passivos
    {
        id: 31,
        nome: "Kit Resistores 1/4W (600 peças)",
        imagem: "assets/images/resistor-kit.jpg",
        quantidade: 25,
        categoria: "componentes-passivos",
        valor: 35.90
    },
    {
        id: 32,
        nome: "Kit Capacitores Eletrolíticos",
        imagem: "assets/images/capacitor-kit.jpg",
        quantidade: 20,
        categoria: "componentes-passivos",
        valor: 42.90
    },
    {
        id: 33,
        nome: "LED 5mm Vermelho (100 unidades)",
        imagem: "assets/images/led-red.jpg",
        quantidade: 15,
        categoria: "componentes-passivos",
        valor: 18.90
    },
    {
        id: 34,
        nome: "LED 5mm Azul (100 unidades)",
        imagem: "assets/images/led-blue.jpg",
        quantidade: 18,
        categoria: "componentes-passivos",
        valor: 22.90
    },
    {
        id: 35,
        nome: "LED 5mm Verde (100 unidades)",
        imagem: "assets/images/led-green.jpg",
        quantidade: 16,
        categoria: "componentes-passivos",
        valor: 19.90
    },
    {
        id: 36,
        nome: "LED RGB 5mm (50 unidades)",
        imagem: "assets/images/led-rgb.jpg",
        quantidade: 22,
        categoria: "componentes-passivos",
        valor: 28.90
    },
    {
        id: 37,
        nome: "Diodo 1N4007 (100 unidades)",
        imagem: "assets/images/diode-1n4007.jpg",
        quantidade: 30,
        categoria: "componentes-passivos",
        valor: 15.90
    },
    {
        id: 38,
        nome: "Transistor BC547 (50 unidades)",
        imagem: "assets/images/bc547.jpg",
        quantidade: 28,
        categoria: "componentes-passivos",
        valor: 12.90
    },
    {
        id: 39,
        nome: "Transistor BC337 (50 unidades)",
        imagem: "assets/images/bc337.jpg",
        quantidade: 25,
        categoria: "componentes-passivos",
        valor: 14.90
    },
    {
        id: 40,
        nome: "Potenciômetro 10K Linear",
        imagem: "assets/images/potentiometer.jpg",
        quantidade: 35,
        categoria: "componentes-passivos",
        valor: 8.90
    },
    {
        id: 41,
        nome: "Buzzer Ativo 5V",
        imagem: "assets/images/buzzer.jpg",
        quantidade: 40,
        categoria: "componentes-passivos",
        valor: 6.90
    },
    {
        id: 42,
        nome: "Cristal Oscilador 16MHz",
        imagem: "assets/images/crystal-16mhz.jpg",
        quantidade: 33,
        categoria: "componentes-passivos",
        valor: 4.90
    },
    {
        id: 43,
        nome: "Relé 5V 10A",
        imagem: "assets/images/relay-5v.jpg",
        quantidade: 27,
        categoria: "componentes-passivos",
        valor: 9.90
    },
    {
        id: 44,
        nome: "Chave Táctil 6x6mm (100 unidades)",
        imagem: "assets/images/tactile-switch.jpg",
        quantidade: 19,
        categoria: "componentes-passivos",
        valor: 16.90
    },
    {
        id: 45,
        nome: "Jumpers Macho-Macho (40 unidades)",
        imagem: "assets/images/jumper-mm.jpg",
        quantidade: 45,
        categoria: "componentes-passivos",
        valor: 12.90
    },
    {
        id: 46,
        nome: "Jumpers Macho-Fêmea (40 unidades)",
        imagem: "assets/images/jumper-mf.jpg",
        quantidade: 38,
        categoria: "componentes-passivos",
        valor: 14.90
    },
    {
        id: 47,
        nome: "Protoboard 830 Pontos",
        imagem: "assets/images/protoboard.jpg",
        quantidade: 24,
        categoria: "componentes-passivos",
        valor: 18.90
    },
    {
        id: 48,
        nome: "Display LCD 16x2",
        imagem: "assets/images/lcd-16x2.jpg",
        quantidade: 21,
        categoria: "componentes-passivos",
        valor: 32.90
    },
    {
        id: 49,
        nome: "Display OLED 0.96\" I2C",
        imagem: "assets/images/oled-096.jpg",
        quantidade: 26,
        categoria: "componentes-passivos",
        valor: 28.90
    },
    {
        id: 50,
        nome: "Servo Motor SG90",
        imagem: "assets/images/servo-sg90.jpg",
        quantidade: 32,
        categoria: "componentes-passivos",
        valor: 22.90
    },
    {
        id: 51,
        nome: "Motor DC 3-6V",
        imagem: "assets/images/motor-dc.jpg",
        quantidade: 29,
        categoria: "componentes-passivos",
        valor: 15.90
    },
    {
        id: 52,
        nome: "Driver Motor L298N",
        imagem: "assets/images/l298n.jpg",
        quantidade: 23,
        categoria: "componentes-passivos",
        valor: 18.90
    }
];

// Categorias disponíveis
const categorias = [
    { id: "microcontroladores", nome: "Microcontroladores" },
    { id: "sensores", nome: "Sensores" },
    { id: "componentes-passivos", nome: "Componentes Passivos" }
];

// Função para obter produtos por categoria
function obterProdutosPorCategoria(categoria) {
    if (categoria === "todos") {
        return produtos;
    }
    return produtos.filter(produto => produto.categoria === categoria);
}

// Função para pesquisar produtos
function pesquisarProdutos(termo) {
    const termoBusca = termo.toLowerCase();
    return produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoBusca) ||
        produto.categoria.toLowerCase().includes(termoBusca)
    );
}

// Função para obter produto por ID
function obterProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

