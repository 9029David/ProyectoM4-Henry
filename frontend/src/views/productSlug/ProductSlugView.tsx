const ProductSlugView = async({ params }: { params: Promise<{ slug: string  }> }) => {
    const { slug } = await params;
    return (
        <h1 className="text-4xl">Product {slug}</h1>
    )
}

export default ProductSlugView