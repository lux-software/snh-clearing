import SNHClearing from '../src/index';


(async () => {
    const client = await SNHClearing.createClient({
        credentials: {
            username: "pohlclearing",
            password: "mX7Sm7VyrjwTe6e1!",

        },
        env: "int"
    })
    const result = await client.GetClearingCdrsAsync({})
    console.log(JSON.stringify(result[0].cdrInfoArray));

})()