import NotasModel from "../models/Notasmodel.js";
// CRUD methods
//mostrar todos los Notass
export const getAll = async (req,res)=> {
    try{
       const Notass = await NotasModel.findAll()
       res.json(Notass)
    } catch (error){
res.json({message: error.message})}
}
//mostrar un Notas
export const getNotas = async (req,res)=> {
    try{
       const Notas = await NotasModel.findOne({where:{id:req.params.id}})
       res.json(Notas)
    } catch (error){
res.json({message: error.message})}
    
}
//crear un Notas
export const CreateNotas = async (req,res)=> {
    try{
        await NotasModel.create(req.body)
        res.json({message: "Notas creado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}
//actualizar un Notas
export const UpdateNotas = async (req, res) =>{
    try{
        await NotasModel.update(req.body,{where:{id:req.params.id}})
        res.json({message: "Notas actualizado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}
//eliminar un Notas
export const DeleteNotas = async (req,res)=> {
    try{
        await NotasModel.destroy({where:{id:req.params.id}})
        res.json({message: "Notas eliminado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}