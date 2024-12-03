/* React.createElement() => returns Object
  <div id="parent">
    <div id="child">
      <h1> I am H1 Tag</h1>
      <h2> I am H2 Tag</h2>
    </div>
    <div id="child">
      <h1> I am H1 Tag</h1>
      <h2> I am H2 Tag</h2>
    </div>
  </div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://media.istockphoto.com/id/1190040680/vector/plastic-bag-food-delivery-icon.jpg?s=612x612&w=0&k=20&c=rH4wx01088_bKVXSppri6XSj54ovSZDiW4fe5YhHJE8="
      />
    </div>
    <div className="nav-bar">
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRatingString } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="food-img"
        src="data:image/jpeg;base64,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"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Ratings : {avgRatingString}</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "54155",
      name: "Meat and Eat",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/4/23/03dd4df7-ed4c-4dff-8478-2d2a21e6d06f_6dd87bf2-90bb-4c67-8731-4292c5999d53.jpeg",
      locality: "Sathy Main Road",
      areaName: "Saravanampatty",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "632",
      avgRatingString: "4.4",
      totalRatingsString: "11K+",
    },
  },
  {
    info: {
      id: "779184",
      name: "Cafe Inc",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/ca3b3c1f-ad97-4078-8688-6f467b800f8f_779184.jpg",
      locality: "Saravanampatti",
      areaName: "Saravanampatti",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Fast Food", "Pizzas"],
      avgRating: 4.3,
      parentId: "464161",
      avgRatingString: "4.3",
      totalRatingsString: "60",
    },
  },
  {
    info: {
      id: "911640",
      name: "C2 Chicken Games Cafe",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/6/29/947f2af2-113f-4db7-b07f-7616c4394269_e186be81-5eae-4cef-be44-009571093c02.jpg",
      locality: "Kallipalayam Road",
      areaName: "Saravanampatti",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Continental",
        "Arabian",
        "Juices",
        "Sweets",
        "Snacks",
        "Pizzas",
        "Waffle",
        "Ice Cream Cakes",
      ],
      avgRating: 4.1,
      parentId: "529498",
      avgRatingString: "4.1",
      totalRatingsString: "102",
    },
  },
  {
    info: {
      id: "85179",
      name: "Burmese Treats",
      cloudinaryImageId: "0d900d7fad01c321544044dea0d3a35a",
      locality: "Ramakrishna Puram",
      areaName: "Saravanampatty",
      costForTwo: "₹200 for two",
      cuisines: [
        "Burmese",
        "Kerala",
        "Chinese",
        "Biryani",
        "South Indian",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "51671",
      avgRatingString: "4.3",
      totalRatingsString: "2.5K+",
    },
  },
  {
    info: {
      id: "722365",
      name: "Big Fat Burger",
      cloudinaryImageId: "f55bef1ed2df39d0e8f93cabfc818182",
      locality: "Keeranatham new road",
      areaName: "Saravanampatti",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers"],
      avgRating: 4.3,
      parentId: "18031",
      avgRatingString: "4.3",
      totalRatingsString: "1.6K+",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const Heading1 = () => <h1>I have Completed 3 Epdisode of Javascript in Namaste React Course</h1>

const Heading2 = () =>(
  <div>
    {heading}
    <h1 className="heading">I am Studying React JS from Namaste React course</h1>
    <Heading1/>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
