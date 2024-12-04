import Card from "@/components/card"

const products = [
    {
      name: "iPhone 11",
      price: 699,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
    {
      name: "MacBook Air",
      price: 999,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
    {
      name: "iPad Pro",
      price: 799,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
    {
      name: "Apple Watch Series 6",
      price: 399,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
    {
      name: "AirPods Pro",
      price: 249,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
    {
      name: "HomePod mini",
      price: 99,
      img: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
    },
  ];

const Home: React.FunctionComponent = () => {
    return (
        <div>
            {products.map((product) => (
                <Card title={product.name} price={product.price} img={product.img} />
            ))}
        </div>
    )
}

export default Home