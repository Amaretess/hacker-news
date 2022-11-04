import Card from "./Card";

const TopTen = ({ topStories }) => {
    return (
        <> 
        <h1>HACKA NEWS</h1>
        {topStories?.map((story) => {
            console.log(story);
            return (
                <Card key={story.id} story={story}/>
            ) 
        })}
        </>
    )
}
export default TopTen;