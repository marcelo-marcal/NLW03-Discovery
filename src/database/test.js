const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-28.261934',
    lng: '-52.459893',
    name: 'Lar das Meninos',
    about:
      'Preste assistência a crianças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '54988889999',
    images: [
      'https://images.unsplash.com/photo-1614613998084-2b014d2b56d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3NzM1MTU4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',

      'https://images.unsplash.com/photo-1612714401296-87a1768bd741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3NzM1MzA5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
    ].toString(),
    instructions:
      'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horários de visita das 18h até 8h',
    open_on_weekends: '0',
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);

  // // deletar dado da tabela
  // console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'));
  // console.log(await db.run('DELETE FROM orphanages'));
});
