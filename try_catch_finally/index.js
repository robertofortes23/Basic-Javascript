try {
    console.log('Abri um arquivo.')
    console.log('Manipulação do arquivo.')
    console.log('Fechei o arquivo.')

    try{
        console.log('Outro try');
    }catch(err){
        console.log('Erro no outro catch')
    }
} catch(err){
    console.log('Tratando o erro.')
} finally {
    //Sempre executado tudo aqui dentro.
}