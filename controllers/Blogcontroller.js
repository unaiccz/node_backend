import BlogModel from "../models/Blogmodel.js";
// CRUD methods
//mostrar todos los blogs
export const getAll = async (req,res)=> {
    try{
       const blogs = await BlogModel.findAll()
       res.json(blogs)
    } catch (error){
res.json({message: error.message})}
}
//mostrar un blog
export const getBlog = async (req,res)=> {
    try{
       const blog = await BlogModel.findOne({where:{id:req.params.id}})
       res.json(blog)
    } catch (error){
res.json({message: error.message})}
    
}
//crear un blog
export const CreateBlog = async (req,res)=> {
    try{
        await BlogModel.create(req.body)
        res.json({message: "Blog creado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}
//actualizar un blog
export const UpdateBlog = async (req, res) =>{
    try{
        await BlogModel.update(req.body,{where:{id:req.params.id}})
        res.json({message: "Blog actualizado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}
//eliminar un blog
export const DeleteBlog = async (req,res)=> {
    try{
        await BlogModel.destroy({where:{id:req.params.id}})
        res.json({message: "Blog eliminado"})
    }
    catch (error){
        res.json({message: error.message})
    }
}