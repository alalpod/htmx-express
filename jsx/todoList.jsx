const Container = require('./container');
const SynButton = require('./components/SynButton');
const SynInput = require('./components/SynInput');
const List = require('./todos');

<Container>
    <form hx-post="/api/todo" hx-target="#todoList" hx-swap="outerHTML" hx-indicator="#indicator">
        <label className="flex items-center gap-2 w-[400px] mx-auto mb-2 cursor-pointer">
            New: <SynInput name="name" required />
        </label>
        <SynButton type="submit">Add</SynButton>
        <div className="htmx-indicator" id="indicator">Updating...</div>
    </form>
    <List todos={todos} />
</Container>
