/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Answer } from "./Answer";
import { AnswerCountArgs } from "./AnswerCountArgs";
import { AnswerFindManyArgs } from "./AnswerFindManyArgs";
import { Query } from "../../query/base/Query";
import { AnswerFindUniqueArgs } from "./AnswerFindUniqueArgs";
import { DeleteAnswerArgs } from "./DeleteAnswerArgs";
import { AnswerService } from "../answer.service";
@graphql.Resolver(() => Answer)
export class AnswerResolverBase {
  constructor(protected readonly service: AnswerService) {}

  async _answersMeta(
    @graphql.Args() args: AnswerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Answer])
  async answers(@graphql.Args() args: AnswerFindManyArgs): Promise<Answer[]> {
    return this.service.answers(args);
  }

  @graphql.Query(() => Answer, { nullable: true })
  async answer(
    @graphql.Args() args: AnswerFindUniqueArgs
  ): Promise<Answer | null> {
    const result = await this.service.answer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Answer)
  async deleteAnswer(
    @graphql.Args() args: DeleteAnswerArgs
  ): Promise<Answer | null> {
    try {
      return await this.service.deleteAnswer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
