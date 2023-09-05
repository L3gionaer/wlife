import * as React from "react"
import { FC, PropsWithChildren } from "react";

import "./button.scss";

const Button: FC<PropsWithChildren> = ({ children }) => {
    return (
       <button>
            {children}
       </button>
    )
}

export default Button;