const mongoose = require('./connection');
const userModel = require('../models/user');


console.log("posts model")

const postSchema = new mongoose.Schema({
	img: { type:String,required:true },
  header: { type:String, required: true, min:1, max:15  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	caption: { type:String, required: true, min:1, max:250 },
  tag: {type:String, required: false, min: 1, max:100},
});


const Post = mongoose.model('posts', postSchema);

var postArray = [
	{
	  img: 'img/taal_volcano.jpg',
	  header: 'Eruption of Taal 2020',
	  caption: 'On 12th of January 2020 (Sunday), the taal volcano started spewing ash. The Philippine Institute of Volcanology and Seismology (Phivolcs) raised the alert status to level 2. That same day, the alert level was raised to level 4,  where there was frequent volcanic lightning activity. By nightfall, the ashfall already reached certain areas such as Calabarzon and Metro Manila. We are in need of donations for those who are affected, no matter how small, will be deeply appreciated.',
	  tags: '#taaleruption #taalvolcano #naturalcalamity #volcano #philippines'
  }, 
  {
	  img: "img/virus.jpg",
	  header: "COVID-2019", 
	  caption: "As the number of confirmed cases continue to rise, the threat of the coronavirus continues to spread worldwide. China, leading with a total of 79,257 confirmed cases and 2,835 deaths. Several countries banned travel flights to China and now South Korea.  We are asking in kind donations to help the citizens of China and South Korea.",
	  tags:  "#ncov19 #covid19 #coronavirus #wuhanvirus"
  }, 
  {
	  img:  "img/bushfire.jpg",
	  header: "Australia Bushfire 2019-2020",
	  caption: "Starting November 2019, fires started to erupt in New South Wales. The fire rapidly spread across all states and killed three volunteer firefighters. Thousands of people were forced to evacuate as the fire danger zone spreads. At the beginning of the new decade, the fire continued to spread, raising the death toll to 23. As of February 13, the situation was said to be “contained”. We are appealing to your kind heart by raising funds to recover for the affected families.", 
	  tags: "#australiabushfire #bushfire #fire #SaveAustralia"
  }, 
  {
	  img: "img/elderly.jpg",
	  header:  "Home for the Aged",
	  caption: "According to the World Food Programme (WFP), because of the years of drought, widespread flooding and economic disarray, 45 million people are facing severe food shortages, with women and children bearing the brunt of the crisis. Half of the population of Zimbabwe or 7.7 million people are facing its worst hunger emergency in a decade. Let us help the people who are starving, let us share our blessings to them. Donate now.",
	  tags: "#famine #Africa #HelpAfrica"
  }, 
  {
	  img: "img/panda.jpg",
	  header: "Save Pandas",
	  caption: "Pandas are bear-like creatures, distinguishable by their black and white color pattern. In 2016, the International Union for Conservation of Nature declassified pandas from “endangered” to “vulnerable”. There are about 1,864 pandas living in the wild, but still at risk because of habitat loss. A large proportion of the panda's habitat has already been lost  to meet the needs of the area's booming pulation. Donate now to help conserve pandas and their habitat",
	  tags: "#panda #SavePandas #SaveAnimals"
  }, 
  {
	  img: "img/famine.jpg",
	  header: "Famine in Africa",
	  caption: "According to the World Food Programme (WFP), because of the years of drought, widespread flooding and economic disarray, 45 million people are facing severe food shortages, with women and children bearing the brunt of the crisis. Half of the population of Zimbabwe or 7.7 million people are facing its worst hunger emergency in a decade. Let us help the people who are starving, let us share our blessings to them. Donate now.",
	  tags: "#famine #Africa #HelpAfrica", 
  }
];

userModel.getAll((err, result) => {
  console.log(result);
  for (i =0 ; i<postArray.length;i ++){
    // assigns different post for different users... posts are distributed to the predefined users
      if(i<3)
        var owner_id = result[i]._id;
      else if (i>=3 && i<5)
        var owner_id = result[i]._id;
      else
        var owner_id = result[i]._id;
    
      const post = new Post({
        img: postArray[i].img,
        header: postArray[i].header,
        caption: postArray[i].caption,
        tags: postArray[i].tags,
        owner: owner_id
      });
  
      post.save(function (err, result) {
        if (err) throw err;
        console.log(result);
      });      
    }
  






});






