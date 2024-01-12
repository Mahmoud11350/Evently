import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { createUser } from "@/server/controllers/userController";

const Home = () => {
  const handleClick = async () => {
    "use server";
    const user = {
      clerkId: "jkfesvdboprqwrijeghbvnklcf",
      email: "admin@admin.com",
      username: "hoksha",
      firstName: "hamoksha",
      lastName: "klrejf",
      photo: "gkjkgrlnkbknwrlkbn",
    };
    const createdUser = await createUser(user);
    console.log(createdUser);
  };
  return (
    <>
      <Hero />
      <form action={handleClick}>
        <Button>Click to Upload</Button>
      </form>
    </>
  );
};
export default Home;
