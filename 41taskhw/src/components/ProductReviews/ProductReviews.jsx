import "./ProductReviews.scss"

export const ProductRewiews = ({reviews}) =>  {
    return (
        <div className="ProductReviews"> 
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key = {index}>
                        <p>{review?.rating}</p>
                        <p>{review?.comment}</p>
                        <p>{review?.reviewerName}</p>
                        <p>{review?.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}