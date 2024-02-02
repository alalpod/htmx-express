const Container = require('./container');
const SynButton = require('./components/SynButton');

<Container>
    <div>Count <span id="count">0</span></div>
    <SynButton hx-post="/api/increment" hx-target="#count">Increment</SynButton>
</Container>
