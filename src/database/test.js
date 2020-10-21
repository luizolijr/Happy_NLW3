const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-21.7516999",
        lng: "-41.3320221",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9885548898",
        images: [
            "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h às 18h",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})