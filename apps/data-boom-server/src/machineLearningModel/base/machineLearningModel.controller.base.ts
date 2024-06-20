/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MachineLearningModelService } from "../machineLearningModel.service";
import { MachineLearningModelCreateInput } from "./MachineLearningModelCreateInput";
import { MachineLearningModel } from "./MachineLearningModel";
import { MachineLearningModelFindManyArgs } from "./MachineLearningModelFindManyArgs";
import { MachineLearningModelWhereUniqueInput } from "./MachineLearningModelWhereUniqueInput";
import { MachineLearningModelUpdateInput } from "./MachineLearningModelUpdateInput";

export class MachineLearningModelControllerBase {
  constructor(protected readonly service: MachineLearningModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MachineLearningModel })
  async createMachineLearningModel(
    @common.Body() data: MachineLearningModelCreateInput
  ): Promise<MachineLearningModel> {
    return await this.service.createMachineLearningModel({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MachineLearningModel] })
  @ApiNestedQuery(MachineLearningModelFindManyArgs)
  async machineLearningModels(
    @common.Req() request: Request
  ): Promise<MachineLearningModel[]> {
    const args = plainToClass(MachineLearningModelFindManyArgs, request.query);
    return this.service.machineLearningModels({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MachineLearningModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async machineLearningModel(
    @common.Param() params: MachineLearningModelWhereUniqueInput
  ): Promise<MachineLearningModel | null> {
    const result = await this.service.machineLearningModel({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MachineLearningModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMachineLearningModel(
    @common.Param() params: MachineLearningModelWhereUniqueInput,
    @common.Body() data: MachineLearningModelUpdateInput
  ): Promise<MachineLearningModel | null> {
    try {
      return await this.service.updateMachineLearningModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MachineLearningModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMachineLearningModel(
    @common.Param() params: MachineLearningModelWhereUniqueInput
  ): Promise<MachineLearningModel | null> {
    try {
      return await this.service.deleteMachineLearningModel({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
