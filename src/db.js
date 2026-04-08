import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync(":memory:"); 

db.exec(` 
    CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,                  
        preco REAL NOT NULL,                 
        categoria TEXT,
        disponivel INTEGER DEFAULT 1,         
        criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Só insere se a tabela estiver vazia (para não duplicar toda vez que o servidor reiniciar)
const check = db.prepare("SELECT count(*) as count FROM produtos").get();

if (check.count === 0) {
    db.exec(`
        INSERT INTO produtos (nome, preco, categoria) VALUES 
        ('Cheese Burger', 21.90, 'Burgers'),
        ('Batata Crinkle', 7.99, 'Acompanhamentos'),
        ('Cheddar', 23.90, 'Combos');
    `);
    console.log("Cardápio inicial criado!");
}

export default db;