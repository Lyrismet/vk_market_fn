import '@vkontakte/vkui/dist/vkui.css';
import './App.css'
import {AppRoot, Group, Panel, PanelHeader, SplitCol, SplitLayout, usePlatform, View} from "@vkontakte/vkui";

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
                                <SplitCol>
                                    <View activePanel="1">
                                        <Panel id="1">
                                            <Group>3</Group>
                                        </Panel>
                                    </View>
                                </SplitCol>
                                <SplitCol>
                                    <View activePanel="2">
                                        <Panel id="2">
                                            <Group>1</Group>
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
