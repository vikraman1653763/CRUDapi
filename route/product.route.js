
import Product from '../product.model.js';


export const postOne=async (req,res)=>{
    try{
        const product = await Product.create(req.body)
        return res.status(200).json(product)
    }  catch(error){
      res.status(500).json({message:error.message})
    }
  }
  export const getAll =async (req,res)=>{
    try{
      const product = await Product.find({})
      return res.status(200).json(product)
    }  catch(error){
      res.status(500).json({message:error.message})
    }
  }
  export const getOne =async (req,res)=>{
    try{
      const{id}=req.params;
      const product = await Product.findById(id)
      return res.status(200).json(product)
    }  catch(error){
      res.status(500).json({message:error.message})
    }
  }
  export const updateOne =async (req,res)=>{
    try{
      const{id}=req.params;
      const product = await Product.findByIdAndUpdate(id,req.body)
      if(!product){
        return res.status(404).json({message:"not found"})
      }
      const newProduct = await Product.findById(id)
  
      return res.status(200).json(newProduct)
    }  catch(error){
      res.status(500).json({message:error.message})
    }
  }
  
  export const deleteOne = async (req,res)=>{
    try{
      const{id} =req.params
  
      const product = await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(404).json({message:"not found"})
      }
      const newProduct = await Product.find({})
      return res.status(200).json(newProduct)
  
    }  catch(error){
      res.status(500).json({message:error.message})
    }
  }

