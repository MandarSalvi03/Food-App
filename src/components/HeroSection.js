import CustomImage from "./Customiamge"

export default function HeroSection(){
    const images = [
        "/img/food_images/burger.jpg",
        "/img/food_images/chole.jpg",
        "/img/food_images/franki.jpg",
        "/img/food_images/fries.jpg",
        "/img/food_images/idli.jpg",
        "/img/food_images/panipuri.jpg",
        "/img/food_images/pizza.jpg",
        "/img/food_images/rice.jpg",
        "/img/food_images/wada.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you  can please your soul and tummy with delicious food recipies of all cuisie. And our serviice is absolutely free. So start exploring now.</p>
                <button className="btn">EXPLORE NOW</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}