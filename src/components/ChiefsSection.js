import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Sanjeev Kapoor",
            img: "/img/chefs_images/1.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Harpal Singh",
            img: "/img/chefs_images/2.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Ranveer Brar",
            img: "/img/chefs_images/3.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Garima Arora",
            img: "/img/chefs_images/4.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Vikas Khanna",
            img: "/img/chefs_images/5.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
        {
            name: "Vineet Bhatia",
            img: "/img/chefs_images/6.jpg",
            recipesCount: "10",
            cuisine: "Indian",
        },
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}