import React from "react";
import "./review.css"
let image = "https://s11.favim.com/orig/7/781/7819/78198/curly-hair-black-girl-pretty-girl-Favim.com-7819814.jpg"
let image2 = "https://media.istockphoto.com/photos/teenager-boy-looking-through-the-window-at-home-picture-id1304075048?b=1&k=20&m=1304075048&s=170667a&w=0&h=1rLMVzHvwq9W9lAsegz9k3MukjRDt13J8gMIY8lgqDI="

const Review = ()=>{
    return (
        <section className="Review">
            <h3>Students Reviews</h3>
            <div className="ReviewList">
                <div className="rev">
                    <img src={image} alt="review LearnersConnect" />
                    <h4>Oluwarotimi Faith</h4>
                    <p>“to get vocational skill easily without stress, this is the best platform”</p>
                </div>
                <div className="rev">
                    <img src={image} alt="review LearnersConnect" />
                    <h4>Adebowale Praise</h4>
                    <p>“How i wish i diecovered student’s connect early ..”</p>
                </div>
                <div className="rev">
                    <img src={image} alt="review LearnersConnect" />
                    <h4>Adedoyin Muinat</h4>
                    <p>“I really find this platform helpful through out my part one studies..”</p>
                </div>
            </div>
        </section>
    )
}

export default Review;