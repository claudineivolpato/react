import React from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import ContactService from "../services/ContactService";

function CreateContactFormHook() {

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm();

    const history = useHistory();

    const onSubmit = async (data) => {
        let res = await (await ContactService.createContact(data)).data
        alert(res)
        history.push({
            pathname: "/contacts"
        })
    }

    return (
        <div className="container">
            <div className="card col-md-6 offset-md-3">
                <h2 className="text-center">Cadastro de Contatos</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Código</label>
                            <input {...register('codigo', { required: true })} placeholder="Código" name="codigo" className="form-control"></input>
                            {errors.codigo && <p className="alert alert-warning">Código é obrigatório!</p>}
                        </div>
                        <div className="form-group">
                            <label>Nome</label>
                            <input {...register('nome', { required: true })} placeholder="Nome" name="nome" required className="form-control"></input>
                            {errors.nome && <p className="alert alert-warning">Nome é obrigatório!</p>}
                        </div>
                        <div className="form-group">
                            <label>Telefone</label>
                            <input {...register('telefone', { required: true })} placeholder="Telefone" name="telefone" required className="form-control"></input>
                            {errors.telefone && <p className="alert alert-warning">Telefone é obrigatório!</p>}
                        </div>
                        <input type="submit" className='btn btn-success' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateContactFormHook;