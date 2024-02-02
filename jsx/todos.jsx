<div className="mt-4 w-[400px] mx-auto" id="todoList">
    <div className="syn_paginated-list syn_list__wrapper syn_list">
        <div className="syn_paginated-list__scroll-wrapper">
            <ul role="list">
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <button
                            type="button"
                            className="syn_list_item syn_list_item--regular syn_list__item"
                        >
                            <div className="syn_list_item__content">
                                <div>{todo}</div>
                            </div>
                            <div
                                className="syn_list_item__suffix cursor-pointer"
                                hx-delete={`/api/todo/${index}`}
                                hx-indicator="#indicator"
                                hx-target="#todoList"
                                hx-swap="outerHTML"
                            >
                                <svg role="img" className="syn_icon" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">7
                                    <path
                                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>
