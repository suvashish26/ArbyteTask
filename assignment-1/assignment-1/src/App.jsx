import React from "react";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Header from "./components/Header";
import PostPreview from "./components/PostPreview";
const users = [
  {
    name: "Vibe coding” is just AI startup marketing",
    age: 19,
    bio: "I work at an AI agent startup and know several folks behind these vibe coding platforms. The truth? Most of it is just hype - slick marketing to attract investors and charge users $200/month.The I vibe coded my dream app in 12 hours” posts? Mostly bots or exaggerated founder content. Reddit is flooded with it now. Just be cautious - don’t confuse marketing with actual PMF.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Why is Golang becoming so popular nowadays?",
    age: 21,
    bio: "When I first started learning programming, I began with PHP and the Laravel framework. Recently, some of my developer friends suggested I learn Node.js because it’s popular. Now, I keep hearing more and more developers recommending Golang, saying it’s becoming one of the most powerful languages for the future.Can anyone share why Golang is getting so popular these days, and whether it’s worth learning compared to other languages?",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Math for programming.",
    age: 20,
    bio: "Here's the question, I'm learning programming and I feel like I should start from learning math first, but should I learn math which related only to programming or better do all, maybe some just basics, but some learn dipper. What's your advise?",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
];
function App() {
  return (
    <div>
      <Header />
      <div className="w-full px-5">
        {users.map((user, index) => (
          <PostPreview
            key={index}
            names={user.name}
            bio={user.bio}
            avatar={user.avatar}
            blogTitle={user.blogTitle}
          />
        ))}
      </div>
      <Welcome />
      <div className="flex justify-center items-center gap-6 mt-20">
        <Card
          name="Suvashish"
          age={19}
          imageUrl="https://media.licdn.com/dms/image/v2/D4D03AQEoupgrys0I1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698410597400?e=1755129600&v=beta&t=ZCmCEKwXWjLX3B7TMOSgL_LJVem6PJ4ilnz1llAS5yY"
        />
        <Card
          name="Jonas"
          age={34}
          imageUrl="https://randomuser.me/api/portraits/men/32.jpg
"
        />
        <Card
          name="Anna"
          age={23}
          imageUrl="https://randomuser.me/api/portraits/women/44.jpg
"
        />
        <Card
          name="Sophia"
          age={21}
          imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
        />
      </div>
    </div>
  );
}

export default App;
