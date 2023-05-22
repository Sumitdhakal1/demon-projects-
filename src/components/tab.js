import React from "react";

function Tab({ menus, activeTab, toogle }) {
    return (
        <>
            <ul>
                {menus.map((menu, i) =>
                    <li onClick={() => toogle(i + 1)} className={`${activeTab === i+1 && "active"}`} >{menu}</li>
                )}
            </ul>
        </>
    )
}

export default Tab