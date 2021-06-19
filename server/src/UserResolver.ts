import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./entity/User";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return 'hi!'
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
  ) {

    try {
      await User.insert({
        firstName,
        lastName,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    
    return true;
  }
}