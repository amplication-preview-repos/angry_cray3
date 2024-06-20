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
import { MachineLearningModel } from "./MachineLearningModel";
import { MachineLearningModelCountArgs } from "./MachineLearningModelCountArgs";
import { MachineLearningModelFindManyArgs } from "./MachineLearningModelFindManyArgs";
import { Query } from "../../query/base/Query";
import { MachineLearningModelFindUniqueArgs } from "./MachineLearningModelFindUniqueArgs";
import { DeleteMachineLearningModelArgs } from "./DeleteMachineLearningModelArgs";
import { MachineLearningModelService } from "../machineLearningModel.service";
@graphql.Resolver(() => MachineLearningModel)
export class MachineLearningModelResolverBase {
  constructor(protected readonly service: MachineLearningModelService) {}

  async _machineLearningModelsMeta(
    @graphql.Args() args: MachineLearningModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MachineLearningModel])
  async machineLearningModels(
    @graphql.Args() args: MachineLearningModelFindManyArgs
  ): Promise<MachineLearningModel[]> {
    return this.service.machineLearningModels(args);
  }

  @graphql.Query(() => MachineLearningModel, { nullable: true })
  async machineLearningModel(
    @graphql.Args() args: MachineLearningModelFindUniqueArgs
  ): Promise<MachineLearningModel | null> {
    const result = await this.service.machineLearningModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MachineLearningModel)
  async deleteMachineLearningModel(
    @graphql.Args() args: DeleteMachineLearningModelArgs
  ): Promise<MachineLearningModel | null> {
    try {
      return await this.service.deleteMachineLearningModel(args);
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
