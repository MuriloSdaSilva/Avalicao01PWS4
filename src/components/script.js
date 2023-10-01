
let callwebpage = (location)=>{
    return  new Promise((resolve,reject)=>{
        //fazendo chamada para algum site que agente esteja preparando
        console.log('fazendo uma chamada para ${location}');
        if(location ==='Google'){
            resolve('Google ok');
        }else{
            reject('Só temos integração com o Google :(');
        }
    })
}

let processRequest = (response) => {
    return new Promise((resolve,reject)=>{
        console.log('Processando resposta');
        resolve('Informação extra do site: ${response}'); 
        //apenas para vermos o encadeamento destas duas promise
    })
}

/*callwebpage('Google').then(response =>{ //coletando resposta da promiss
    console.log('resposta já recebida');
    return processRequest(response);
}).then(processedResponse =>{
    console.log(processedResponse);
}).catch(err =>{
  console.log(err);
})*/
// a promiss ficou assim : o nosso calwebpage chama a promiss fazendo uma chamada para o nosso site (google)
let callwebpageAndProcess = async() =>{
    const response = await callwebpage('Google');//facebook
    console.log(response);

    const processedResponse = await processRequest(response);
    //await permite que agente trable de forma assincrona , parecendo que estamos trabalhando de forma sincrona
    console.log(processedResponse);

}

callwebpageAndProcess();

// vamos fazer o mesmo exemplo utilizando assinc wait para vermos como é mais simples 