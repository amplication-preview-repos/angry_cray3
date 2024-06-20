import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DatasetList } from "./dataset/DatasetList";
import { DatasetCreate } from "./dataset/DatasetCreate";
import { DatasetEdit } from "./dataset/DatasetEdit";
import { DatasetShow } from "./dataset/DatasetShow";
import { InsightList } from "./insight/InsightList";
import { InsightCreate } from "./insight/InsightCreate";
import { InsightEdit } from "./insight/InsightEdit";
import { InsightShow } from "./insight/InsightShow";
import { MachineLearningModelList } from "./machineLearningModel/MachineLearningModelList";
import { MachineLearningModelCreate } from "./machineLearningModel/MachineLearningModelCreate";
import { MachineLearningModelEdit } from "./machineLearningModel/MachineLearningModelEdit";
import { MachineLearningModelShow } from "./machineLearningModel/MachineLearningModelShow";
import { AutomatedPatternIdentificationList } from "./automatedPatternIdentification/AutomatedPatternIdentificationList";
import { AutomatedPatternIdentificationCreate } from "./automatedPatternIdentification/AutomatedPatternIdentificationCreate";
import { AutomatedPatternIdentificationEdit } from "./automatedPatternIdentification/AutomatedPatternIdentificationEdit";
import { AutomatedPatternIdentificationShow } from "./automatedPatternIdentification/AutomatedPatternIdentificationShow";
import { QueryList } from "./query/QueryList";
import { QueryCreate } from "./query/QueryCreate";
import { QueryEdit } from "./query/QueryEdit";
import { QueryShow } from "./query/QueryShow";
import { VisualizationList } from "./visualization/VisualizationList";
import { VisualizationCreate } from "./visualization/VisualizationCreate";
import { VisualizationEdit } from "./visualization/VisualizationEdit";
import { VisualizationShow } from "./visualization/VisualizationShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"data boom"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Dataset"
          list={DatasetList}
          edit={DatasetEdit}
          create={DatasetCreate}
          show={DatasetShow}
        />
        <Resource
          name="Insight"
          list={InsightList}
          edit={InsightEdit}
          create={InsightCreate}
          show={InsightShow}
        />
        <Resource
          name="MachineLearningModel"
          list={MachineLearningModelList}
          edit={MachineLearningModelEdit}
          create={MachineLearningModelCreate}
          show={MachineLearningModelShow}
        />
        <Resource
          name="AutomatedPatternIdentification"
          list={AutomatedPatternIdentificationList}
          edit={AutomatedPatternIdentificationEdit}
          create={AutomatedPatternIdentificationCreate}
          show={AutomatedPatternIdentificationShow}
        />
        <Resource
          name="Query"
          list={QueryList}
          edit={QueryEdit}
          create={QueryCreate}
          show={QueryShow}
        />
        <Resource
          name="Visualization"
          list={VisualizationList}
          edit={VisualizationEdit}
          create={VisualizationCreate}
          show={VisualizationShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
