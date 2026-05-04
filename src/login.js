/**
 * Declare um vetor contendo informações sobre usuários de um site, 
 * contendo as propriedades: id, nome, email, 
 * senha e expirado (boleano, pode ser true ou false). 
 * Adicione ao menos um dos usuarios como expirado sendo true.
*/
const usuario =[
    {
        id:1,
        nome:'Renata',
        email:'renata@teste.com',
        senha:123456,
        expirado:false

    },
        {
        id:2,
        nome:'Alice',
        email:'alice@teste.com',
        senha:321456,
        expirado:true

    },
    {
        id:3,
        nome:'Roberto',
        email:'roberto@teste.com',
        senha:654123,
        expirado:false

    },
    {
        id:4,
        nome:'paulo',
        email:'paulo@teste.com',
        senha:147258,
        expirado:false

    }
]

/**
 * Construa uma função de para realizar login. 
 * Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso 
 *   caso exista um usuário com email e senha iguais aos informados.
 *  A função deve dizer que as credenciais expiraram caso expirado for true. 
 * A função também tem que dizer que as credenciais estão incorretas 
 *    caso o email não exista ou a senha esteja incorreta para aquele email.
 */

export function validarUsuario(email, senha){
    for (let i = 0; i < usuario.length; i++){
        if (email == usuario[i].email){

            if (senha != usuario[i].senha){
                return 'senha incorreta'
            }

            if (usuario[i].expirado == true){
                return 'expirado'
            }

            return 'sucesso'
        }
    }

    return 'incorreto' 
}
