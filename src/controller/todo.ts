import { RequestHandler } from "express";

import {Todos} from "../models/todos";

export const createTodo: RequestHandler = async (req, res, next) => {
    var todos = await Todos.create({...req.body});
    return res.status(200).json({message: "Todo created successfully.", data: todos});
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
    const {id} = req.params;
    const deletedTodo: Todos | null = await Todos.findByPk(id);
    
    await Todos.destroy({where: {id: id}});

    return res.status(200).json({message: "Todo deleted successfully.", data: deletedTodo})
};

export const getAllTodo: RequestHandler = async (req, res, next) => {
    const allTodos: Todos[] = await Todos.findAll();

    return res.status(200).json({message: "Todos fetched successfully.", data: allTodos});
};

export const getTodoById: RequestHandler = async (req, res, next) => {
    const {id} = req.params;
    
    const todos: Todos | null = await Todos.findByPk(id);
    return res.status(200).json({message: "Todo retrieved successfully.", data: todos});
}

export const updateTodo: RequestHandler = async (req, res, next) => {
    const {id} = req.params;
    await Todos.update({...req.body, id}, {where: {id: id}});

    const updatedTodo: Todos | null = await Todos.findByPk(id);

    return res.status(200).json({message: "Todo updated successfully.", data: updatedTodo})
}