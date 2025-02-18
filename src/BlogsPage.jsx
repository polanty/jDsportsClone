import { useLocation } from "react-router-dom";
import LocationMap from "./components/Location-Map/LocationMap.components";
import CouraselContainer from "./components/Courael-container/CouraselContainer.components";
import Blog from "./components/BlogsItem/BlogsItem.component";
import { AllProductImages } from "./assets/AllImages/AllImagesObject/AllImagesObject";

const { accessories, blogs } = AllProductImages;

const { shopByCat } = accessories;

const { shopByCat: shopByCatBlog } = blogs;

const BlogsRoute = () => {
  // const { allproducts } = useParams();
  const { pathname } = useLocation();
  //The current location path
  const locationPath = pathname.split("/");

  const { home } = AllProductImages;

  const { CouraselImagesLink } = home;

  return (
    <>
      <LocationMap locationPath={locationPath}></LocationMap>
      <CouraselContainer couraelElements={CouraselImagesLink} />
      <div className="BlogPage--Container">
        <Blog
          image={shopByCat.men}
          title="Football Fashion Forward: How the Sport is Influencing Street Style"
          content="Football isn't just a game; it's a fashion movement. The 2024–2025 NFL season saw players embracing bold prints and unique suiting, turning game-day into a runway. This fusion of sport and style is making waves off the field, inspiring fans to incorporate athletic elements into everyday wear."
        />

        <Blog
          image={shopByCat.hats}
          title="Cap It Off: The Must-Have Hat Trends of 2025"
          content="Hats are making a significant comeback in 2025, with designers showcasing a variety of styles on the runways. From sleek, structured bucket hats to wide-brimmed designs adorned with intricate details, these accessories are elevating outfits and making bold fashion statements."
        />

        <Blog
          image={shopByCat.women}
          title="Elevate Your Workout: Top Women's Gym Wear Trends for 2025"
          content="As fitness and fashion continue to merge, 2025 brings innovative trends in women's gym wear. From smart fabrics with built-in sensors that monitor performance to sustainable materials that prioritize the planet, the latest activewear combines functionality with style. Brands like Lululemon and Alo Yoga are leading the charge with designs that support and inspire."
        />

        <Blog
          image={shopByCat.kids}
          title="Step Up: Sneaker Trends You Can't Ignore in 2025"
          content="Sneaker culture continues to evolve, and 2025 brings a blend of innovation and nostalgia. Expect to see slim silhouettes reminiscent of '90s European sports shoes, playful designs featuring charms and straps, and a resurgence of classic black sneakers. These trends offer something for every sneaker enthusiast."
        />
        <Blog
          image={shopByCatBlog.shirts}
          title="Cozy and Chic: Men's Hoodie Styles Dominating 2025"
          content="The hoodie has transcended its casual roots to become a staple in men's fashion for 2025. From gothic-inspired designs to high-end luxury interpretations, this versatile piece offers comfort without compromising on style. Brands are experimenting with materials and cuts, making the hoodie suitable for various occasions."
        />
      </div>
    </>
  );
};

export default BlogsRoute;
