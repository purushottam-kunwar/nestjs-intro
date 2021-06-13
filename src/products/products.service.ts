import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getProductById(prodId: string) {
    const product = await this.findProductById(prodId);
    return product;
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    // const [product, index] = this.findProductById(productId);
    // const updatedProduct = { ...product };
    // if (title) {
    //   updatedProduct.title = title;
    // }
    // if (desc) {
    //   updatedProduct.description = desc;
    // }
    // if (price) {
    //   updatedProduct.price = price;
    // }
    // this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProductById(prodId)[1];
    this.products.splice(index, 1);
  }

  private async findProductById(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not found product');
    }

    if (!product) {
      throw new NotFoundException('Could not found product');
    }
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }
}
