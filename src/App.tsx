import { Center } from "@chakra-ui/react";
import AppEditableTable from "./components/AppEditableTable";
import AppTable from "./components/AppTable";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import MaterialTable from "./components/MaterialTable";
import MyTable from "./components/MyTable";
import MyTanTable from "./components/MyTanTable";

export default function App() {
  return (
    <>
    <ColorModeSwitcher />
      {/* <AppTable /> */}
      {/* <AppEditableTable /> */}
      {/* <Center>
        <MyTable></MyTable>
      </Center> */}
      <Center>
        <MyTanTable />
      </Center>
      {/* <Center p={15}>
        <MaterialTable />
      </Center> */}
    </>
  );
}
