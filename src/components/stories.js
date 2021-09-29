import { useState } from 'react';
import './task.css';


function Stories(){
    const [story ] = useState([
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-An-Old-Man.jpg',
            imgHeading:'An Old Man Lived in the Village',
            imgDescription:'An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened. Instantly everyone started hearing the rumour:'
        },
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-The-Wise-Man.jpg',
            imgHeading:'The Wise Man',
            imgDescription:'People have been coming to the wise man, complaining about the same problems every time. One day he told them a joke and everyone roared in laughter.After a couple of minutes, he told them the same joke and only a few of them smiled.'
        },
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-The-Foolish-Donkey.jpg',
            imgHeading:'The Foolish Donkey',
            imgDescription:'A salt seller used to carry the salt bag on his donkey to the market every day.On the way they had to cross a stream. One day the donkey suddenly tumbled down the stream and the salt bag also fell into the water. The salt dissolved in the water and hence the bag became very light to carry. The donkey was happy. Then the donkey started to play the same trick every day. The salt seller came to understand the trick and decided to teach a lesson to it. The next day he loaded a cotton bag on the donkey. Again it played the same trick hoping that the cotton bag would be still become lighter.'
        },
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-Having-A-Best-Friend.jpg',
            imgHeading:'Having A Best Friend',
            imgDescription:'A story tells that two friends were walking through the desert. During some point of the journey they had an argument, and one friend slapped the other one in the face. The one who got slapped was hurt, but without saying anything, wrote in the sand; They kept on walking until they found an oasis, where they decided to take a bath. The one who had been slapped got stuck in the mire and started drowning, but the friend saved him. After he recovered from the near drowning, he wrote on a stone;'
        },
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-The-Four-Smart-Students.jpg',
            imgHeading:'The Four Smart Students',
            imgDescription:'Stories that have morals and messages behind them are always powerful. In fact, it’s crazy just how powerful a 200 word story can be.Our last article of short stories became so popular, that we decided to create another list, in which every story has a simple moral behind it.   They kept on walking until they found an oasis, where they decided to take a bath. The one who had been slapped got stuck in the mire and started drowning, but the friend saved him. After he recovered from the near drowning, he wrote on a stone;“When someone hurts us we should write it down in sand where winds of forgiveness can erase it away. But, when someone does something good for us, we must engrave it in stone where no wind can ever erase it.”            Moral of the story: Don’t value the things you have in your life. But value who you have in your life. 5. The Four Smart Studentsshort Moral Stories - '
        },
        {
            image:'https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Short-Moral-Stories-The-Greedy-Lion.jpg',
            imgHeading:'The Greedy Lion',
            imgDescription:'it was an incredibly hot day, and a lion was feeling very hungry.He came out of his den and searched here and there. He could find only a small hare. He caught the hare with some hesitation. “This hare can’t fill my stomach” thought the lion.As the lion was about to kill the hare, a deer ran that way. The lion became greedy. He thought;He let the hare go and went behind the deer. But the deer had vanished into the forest. The lion now felt sorry for letting the hare off. '
        },
    ])

    const [index , setIndex] = useState(0);
   
    
    
    return(
        <div  className='mx-2  my-5'>
            <h1 className="mb-4  fs-1">STORIES</h1>
            <hr/>
            <div className='row main'>

            <div className='cont-img col-md-4 col-lg-6
col-sm-12'>
                <img   src={story[index].image} />
            </div>
            <div className='col-md-12 pera col-lg-6 col-sm-12'>
                <h1 className='mb-5 ' >
{story[index].imgHeading}</h1>
                <p  > 
{story[index].imgDescription} </p>
            </div>
           </div>
            <div className=' inc'><br/>
               <span> 
                   <button onClick={()=> index>0? setIndex
(index-1):setIndex(index)} className='btn-dark rounded 
border-none fs-2 fw-bold px-3'> - </button>
               <span className='fw-bold fs-2'> {index + 1}
</span> 
               <button onClick={()=> index +1 !== story.length?
setIndex(index+1) :setIndex(index)} className='btn-dark
 rounded border-none fs-2 fw-bold px-2 mx-1'>+</button>
                </span>
            </div>
           
        </div>
    )
}

export default Stories;