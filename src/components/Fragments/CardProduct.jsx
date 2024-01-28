import Button from "../Elements/Button"

const CardProduct = ({children}) => {
    return (
        <div className="flex flex-col justify-between bg-slate-200 w-full p-3 rounded m-2 lg:w-1/4">
            {children}
        </div>
    )
}
const Header = () => {
    return (
        <a href="#">
            <img src="img/product1.jpg" alt="Shoe" className="h-52 w-full mx-auto bg-auto" />
        </a>
    )
}

const Body = ({children, name}) => {
    return (
        <div className="h-full">
            <h2 className="text-xl font-bold text-slate-800">{name}</h2>
            <p className="font-normal text-slate-700">{children}</p>
        </div>
    )
}

const Footer = ({price, onclick}) => {
    return (
        <div className="flex justify-between items-center">
            <p className="font-semibold text-slate-800 text-lg">{price}</p>
            <Button classname="px-3 py-2" onClick={onclick}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;