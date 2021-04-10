const Database = require('sqlite-async');

// Criar uma tabela se não existir uma no banco de dados
function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lat TEXT,
      lng TEXT,
      name TEXT,
      about TEXT,
      whatsapp TEXT,
      images TEXT,
      instructions TEXT,
      opening_hours TEXT,
      open_on_weekends TEXT
    );
  `);
}
//Para o SQLite acessar e coloque um arquivo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
