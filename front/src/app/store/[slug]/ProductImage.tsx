export const ProductImage = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div className="flex justify-center lg:w1/2">
            <img 
                src={src}
                alt={alt} 
                className="object-contain w-full border border-gray-200 rounded"
            />
        </div>
    )
} 

export default ProductImage