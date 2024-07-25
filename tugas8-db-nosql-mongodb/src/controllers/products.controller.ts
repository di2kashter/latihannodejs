import { Request, Response } from "express";
import ProductsModel from "@/models/products.model";
import CategorysModel from "@/models/category.models";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await ProductsModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const result = await ProductsModel.find();
      res.status(200).json({
        data: result,
        message: "Success get all products",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all products",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOne({
        _id: req.params.id,
      });
      res.status(200).json({
        data: result,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await ProductsModel.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(200).json({
        data: result,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product",
      });
    }
  },
  async findProductByCategory(req:Request, res: Response){
    try {
      const { categoryName } = req.params;
    const lowerCaseCategoryName = categoryName.toLowerCase();

    const category = await CategorysModel.findOne({ name: { $regex: new RegExp('^' + lowerCaseCategoryName + '$', 'i') } });

    console.log(category);

    if (!category) {
      return res.status(404).send({ error: 'Category not found' });
    } 
        const products = await ProductsModel.find({ categoryId: category._id }).populate('categoryId', 'name');
        if (products.length === 0) {
          return res.status(404).send({ message: 'No products found for this category' });
        }
    
        res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
