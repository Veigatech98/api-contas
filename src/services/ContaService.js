'use strict'

let contas = require("../contasdb");
const contaModel = require("../models/ContaModel")

module.exports = {
    listarTodasContas: async () => {
        try {
            const contasCadastradas = await contaModel.find();
            return contasCadastradas;
        } catch (error) {
            return {
                mensagem: error,
                sucess: false,
                status: 404,
            };
        }

    },
    buscarPorId: async (id) => {
        try {
            const contaEncontrada = await contaModel.findOne({_id: id});
            return contaEncontrada
        } catch (error) {
            return {
                mensagem: error,
                sucess: false,
                status: 404,
            };
        }
    },
    incluirConta: async (conta) => {
        try {
            const novaConta = await contaModel.create(conta)
            return novaConta;
        } catch (error) {
            return {
                mensagem: error,
                sucess: false,
                status: 404,
            };
        };
    },
};