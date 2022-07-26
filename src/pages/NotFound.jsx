import React from "react";
import {Link} from "react-router-dom";

function NotFound() {


    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Страница не найдена <icon>😕</icon></h2>
                    <Link href={"/"} className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
