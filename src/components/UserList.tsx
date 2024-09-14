import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user); /* (для получения состояний используем типизированный useSelector - useTypedSelector, без типизации не выдаст user) */

    return (
        <div>

        </div>
    )
}

export default UserList;