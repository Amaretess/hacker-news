const Card = ({ story }) => {
    return (
            <div>
                <h2>{story?.title}</h2>
                <p>Author: {story?.by} </p>
                
            </div>
    )
}
export default Card;