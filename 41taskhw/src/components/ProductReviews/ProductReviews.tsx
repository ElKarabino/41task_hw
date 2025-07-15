import "./ProductReviews.scss"
 
type Review = {
    rating: number,
    comment: string,
    reviewerName: string,
    date: string,
}

type ProductReviewsProps = {
  reviews: Review[];
};

export const ProductReviews = ({reviews = []}:ProductReviewsProps) =>  {
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