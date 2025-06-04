import { Button } from "../../Functional/Button";
import { Container } from "./index";

const meta = {
    title: "Prometheus/Layout/Container",
    component: Container,
    parameters: {
        layout: "fullscreen",
    },
};
export default meta;

export const Primary = () => {
    return <Container>
        <Button onClick={() => { }}>Test</Button>
    </Container>;
}
