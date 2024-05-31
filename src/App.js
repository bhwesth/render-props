import "./App.css";
import Circle from "./components/shapes/Circle";
import Box from "./components/shapes/Box";
import Button from "./components/shapes/Button";
import Draggable from "./components/Draggable";

export default () => (
    <div className="app">
        <Draggable render={(props) => <Circle draggable={props} />} />
        <Draggable render={(props) => <Box draggable={props} />} />
        <Draggable render={(props) => <Button draggable={props} />} />
    </div>
);
