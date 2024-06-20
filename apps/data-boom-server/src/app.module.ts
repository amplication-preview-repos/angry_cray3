import { Module } from "@nestjs/common";
import { DatasetModule } from "./dataset/dataset.module";
import { InsightModule } from "./insight/insight.module";
import { MachineLearningModelModule } from "./machineLearningModel/machineLearningModel.module";
import { AutomatedPatternIdentificationModule } from "./automatedPatternIdentification/automatedPatternIdentification.module";
import { QueryModule } from "./query/query.module";
import { VisualizationModule } from "./visualization/visualization.module";
import { AnswerModule } from "./answer/answer.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DatasetModule,
    InsightModule,
    MachineLearningModelModule,
    AutomatedPatternIdentificationModule,
    QueryModule,
    VisualizationModule,
    AnswerModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
