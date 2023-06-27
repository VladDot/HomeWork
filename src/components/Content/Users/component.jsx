import React from "react";

import { User } from "./User/component";

import data from "./mockData";

function Users() {
    return (
        <div className="flex  flex-wrap justify-between">
            {data.map(({ id, ...rest }) => {
                return (
                    <User
                        key={id}
                        {...rest}
                    />
                );
            })}
        </div>
    );
}

export default Users;
