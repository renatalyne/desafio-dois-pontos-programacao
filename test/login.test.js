import { validarUsuario } from "../src/login.js";
import assert from 'node:assert';
/**
 * Testes:
Escreva 4 testes: 
 1) Sucesso,
 2) Credencial expirada,
 3) Usuario não encontrado e
 4) Senha incorreta para o usuário encontrado.
 */

 describe('Validar logins de usuários',function(){
    it ('Validar login com sucesso',function(){
        //arrange
        const email ='renata@teste.com'
        const senha =123456
        const status = 'sucesso'
        //act
        const resultadoFuncao = validarUsuario(email,senha)
        //assert
        assert.equal(resultadoFuncao,status)
        
    })
        it ('Validar login expirado',function(){
        //arrange
        const email ='alice@teste.com'
        const senha =321456
        const status = 'expirado'
        //act
        const resultadoFuncao = validarUsuario(email,senha)
        //assert
        assert.equal(resultadoFuncao,status)
        
    })
        it ('Validar login com senha incorreta',function(){
        //arrange
        const email ='renata@teste.com'
        const senha =258963
        const status = 'senha incorreta'
        //act
        const resultadoFuncao = validarUsuario(email,senha)
        //assert
        assert.equal(resultadoFuncao,status)
        
    })
        it ('Validar usuário não encontrado',function(){
        //arrange
        const email ='renataAlice@teste.com'
        const senha =258963
        const status = 'incorreto'
        //act
        const resultadoFuncao = validarUsuario(email,senha)
        //assert
        assert.equal(resultadoFuncao,status)
        
    })
 })