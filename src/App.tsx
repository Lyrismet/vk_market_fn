import '@vkontakte/vkui/dist/vkui.css';
import './App.css'
import {AppRoot, Group, Panel, PanelHeader, SplitCol, SplitLayout, usePlatform, View} from "@vkontakte/vkui";
import Cart from "./components/Cart.tsx";
import ProductList from "./components/ProductList.tsx";

function App() {
    const platform = usePlatform();
    const isVKCOM = platform === 'vkcom';

    return (
        <AppRoot>
            <SplitLayout header={!isVKCOM && <PanelHeader delimiter="none"/>}>
                <SplitCol>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>VKUI. Market </PanelHeader>
                            <SplitLayout>
                                <SplitCol style={{flex:3}}>
                                    <View activePanel="1">
                                        <Panel id="1">
                                            <Group>
                                                <ProductList/>
                                            </Group>
                                        </Panel>
                                    </View>
                                </SplitCol>
                                <SplitCol style={{flex:1}}>
                                    <View activePanel="2">
                                        <Panel id="2">
                                            <Cart/>
                                        </Panel>
                                    </View>
                                </SplitCol>
                            </SplitLayout>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    )
}

export default App
