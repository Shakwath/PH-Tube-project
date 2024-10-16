console.log("video script added");
// 1 - Fetch ,load and show chatagories.


//Create LoadCaatagories
const  loadCategories = ()=>{
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    .then((res) => res.json())
    .then ((data) => displayCategories(data.categories))
    .catch((error)=> console.log(error));
}


// {
//     "category_id": "1003",
//     "video_id": "aaai",
//     "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
//     "title": "30 Rock",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
//             "profile_name": "Tina Fey",
//             "verified": false}
//     ],"others": {
//         "views": "4.5K",
//         "posted_date": "14800"
//     },
// "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
// }

//create display catagories
const displayCategories =(categories) => {
    const catagoryContainer = document.getElementById("categories");
    //add data
    // console.log(data);
    categories.forEach((item) => {
        console.log(item);

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        //add button
        catagoryContainer.append(button);
    });
};

//load videoes
const  loadVideos = ()=>{
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")

    .then((res) => res.json())
    .then ((data) => displayVideos(data.videos))
    .catch((error)=> console.log(error));
}

//create display videos
const displayVideos =(videos) => {
    const videosContainer = document.getElementById("videos");
    //add data
    // console.log(data);
   videos.forEach((videos) => {
        console.log(videos);

        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML =`
            <figure class="h-[200px] relative">
                <img class="h-full w-full object-cover" src=${videos.thumbnail} />            
            </figure>
                <div class="px-0 py-2 flex gap-2">
                    <div>
                     <img class="w-10 h-10 rounded-full object-cover" src=${videos.authors[0].profile_picture} />
                    </div>
                    <div>
                    <h2 class="font-bold">${videos.title}<h2>
                    <div class="flex items-center gap-2">
                        <P class="text-gray-400">${videos.authors[0].profile_name}</p>
                        <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />
                    </div>
                    
                    <p> </p>
                    </div>
                </div>`;
        //add button
        videosContainer.append(card);
    });
};

loadCategories();
loadVideos();
