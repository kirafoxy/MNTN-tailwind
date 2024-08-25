
import ContentCard from './ContentCard';
import content1img from '..//../assets/hiking01.png';
import content2img from '..//../assets/hiking02.png';
import content3img from '..//../assets/hiking03.png';


const contents = [
  {
    number:'01',
    subtitle: 'GEt Started',
    title :'What level of  hiker are you?',
    description: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ',
    image :content1img,
    link: './article1'
  },

  { 
    number:'01',
    subtitle: 'Hiking Essentials',
    title :'Picking the right Hiking Gear!',
    description: "The nice thing about beginning hiking is that you don`t really need any special gear, you can probably get away with things you already have Let`s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    image :content2img,
    link: './article2'
    
  },

  {
    number:'01',
    subtitle: 'where you go is the key',
    title :'Understand Your Map & Timing',
    description: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
    image :content3img,
    link: './article3'
    
  }
];

export default function Content(){
    return(
        <div>
            {contents.map(function(content) {
        return (
            <ContentCard 
              number={content.number}
              subtitle={content.subtitle}
              description={content.description}
              title={content.title}
              image={content.image}
              link={content.link}
              
             />
          )
      }) }
        </div>
    )
}

Content()