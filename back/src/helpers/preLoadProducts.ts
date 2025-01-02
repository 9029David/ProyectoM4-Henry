import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Apple iPhone 11 (128 GB) - Negro",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "/products/Apple-iPhone11.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Apple Macbook Air 13 M2 256gb 8c Cpu - 8c Gpu - 8gb Ram",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "/products/Apple-MacBookAir.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Apple iPad air 11 de 8 GB de 11 pulgadas color gris espacial",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "/products/Apple-iPad-pro.webp",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 9 GPS • Caja de aluminio color medianoche de 45 mm",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "/products/Apple-Watch.webp",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Apple AirPods Pro 2ª generación Con Estuche De Carga Blanco - Distribuidor Autorizado",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "/products/Apple-Airpod.webp",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Apple Homepod Mini - Space Gray",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "/products/Apple-Homepod.webp",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Apple iPad Air (5ª generación) 10.9 Wi-Fi 64 GB Chip M1 - Gris espacial",
    price: 699,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "/products/Apple-iPad-Air.webp",
    categoryId: 3,
    stock: 16,
  },
  {
    name: "Apple Studio Display - Vidrio estándar - Base con inclinación ajustable",
    price: 1699,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "/products/Apple-Studio-Display.webp",
    categoryId: 7,
    stock: 5,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
