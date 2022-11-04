import { useState, useEffect } from 'react';
import TopTen from './Components/TopTen';

const App = () => {

  const [topStories, setTopStories] = useState([]);


  useEffect(() => {
    const getTopStories = async () => {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const data = await response.json();
      const top = await data.slice(0,10);

      const topStories = await Promise.all (
        top?.map(async (item) => {
          const topResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
          const stories = await topResponse.json() 
          setTopStories(stories)
          console.log(stories)
          const topStoryComments = stories?.kids?.map(async comment => {
              const commentResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`)
              const topComments = await commentResponse.json()
              return topComments
            })
            console.log(topStoryComments)
            
        })
      )
    }
    getTopStories();
  }, [])


  return (
    <>
    <TopTen data={topStories}/>
    </>
  );
}

export default App;
